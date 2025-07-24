# Design Document

## Overview

The Card Selection Manager is a React-based feature that integrates with external APIs to fetch card data, provides an interactive UI for card selection and property enhancement, and persists the enhanced cards to MongoDB. The system follows a modular architecture with clear separation between data fetching, UI components, and database operations.

## Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   External API  │    │   React Client  │    │   MongoDB       │
│                 │    │                 │    │                 │
│ - Card Data     │◄──►│ - Card Display  │◄──►│ - Enhanced      │
│ - Metadata      │    │ - Selection UI  │    │   Cards         │
│                 │    │ - Property Edit │    │ - Collections   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Technology Stack Integration

- **Frontend**: React Router 7 with TypeScript
- **Styling**: Tailwind CSS (consistent with existing codebase)
- **State Management**: React hooks (useState, useEffect, useReducer)
- **API Communication**: Fetch API with error handling
- **Database**: MongoDB with connection pooling
- **Validation**: Custom TypeScript interfaces and validation functions

## Components and Interfaces

### Core Components

#### 1. CardSelectionManager (Main Container)
```typescript
interface CardSelectionManagerProps {
  apiEndpoint: string;
  onSaveComplete?: (savedCards: EnhancedCard[]) => void;
  onError?: (error: Error) => void;
}
```

#### 2. CardGrid (Display Component)
```typescript
interface CardGridProps {
  cards: Card[];
  selectedCards: Set<string>;
  onCardSelect: (cardId: string) => void;
  isLoading: boolean;
}
```

#### 3. CardItem (Individual Card)
```typescript
interface CardItemProps {
  card: Card;
  isSelected: boolean;
  onSelect: (cardId: string) => void;
}
```

#### 4. EnhancementEditor (Card Enhancement Interface)
```typescript
interface EnhancementEditorProps {
  selectedCards: Card[];
  onEnhancementsChange: (cardId: string, enhancements: CardEnhancements) => void;
  onSave: () => void;
  isSaving: boolean;
}
```

#### 5. StatusIndicator (Feedback Component)
```typescript
interface StatusIndicatorProps {
  status: 'idle' | 'loading' | 'saving' | 'success' | 'error';
  message?: string;
  onRetry?: () => void;
}
```

## Data Models

### Core Data Types

```typescript
interface Card {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  originalData: Record<string, any>; // Preserve original API response
  createdAt: Date;
}

interface CardEnhancements {
  treatment: string; // e.g., "foil", "non-foil", "etched"
  fullArt: boolean;
  borderless: boolean;
  quantity: number;
  condition: string; // e.g., "mint", "near mint", "lightly played", "moderately played", "heavily played", "damaged"
  purchasePrice: number;
  targetPrice: number;
}

interface EnhancedCard extends Card {
  enhancements: CardEnhancements;
  enhancedAt: Date;
  savedAt?: Date;
}

interface SelectionState {
  selectedCardIds: Set<string>;
  cardEnhancements: Map<string, CardEnhancements>;
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
  successMessage: string | null;
}
```

### API Response Types

```typescript
interface ApiResponse<T> {
  data: T[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
  metadata?: Record<string, any>;
}

interface ApiError {
  message: string;
  code: string;
  details?: Record<string, any>;
}
```

## Service Layer

### API Service

```typescript
class CardApiService {
  private baseUrl: string;
  
  async fetchCards(endpoint: string): Promise<Card[]>;
  async validateApiResponse(response: any): Promise<Card[]>;
  private handleApiError(error: any): ApiError;
}
```

### Database Service

```typescript
class CardDatabaseService {
  private connectionString: string;
  
  async saveCards(cards: EnhancedCard[]): Promise<void>;
  async validateConnection(): Promise<boolean>;
  private sanitizeCardData(card: EnhancedCard): EnhancedCard;
}
```

### State Management Service

```typescript
class SelectionStateManager {
  private state: SelectionState;
  private setState: (state: SelectionState) => void;
  
  toggleCardSelection(cardId: string): void;
  updateCardEnhancements(cardId: string, enhancements: CardEnhancements): void;
  clearSelection(): void;
  getSelectedCards(): Card[];
}
```

## Error Handling

### Error Types and Handling Strategy

1. **API Errors**
   - Network failures: Retry mechanism with exponential backoff
   - Invalid responses: Data validation and sanitization
   - Rate limiting: Queue requests and respect limits

2. **Database Errors**
   - Connection failures: Connection pooling and retry logic
   - Validation errors: Client-side validation before save
   - Duplicate entries: Upsert operations with conflict resolution

3. **User Input Errors**
   - Invalid enhancement values: Real-time validation for prices, quantities, and conditions
   - Missing required fields: Form validation for essential enhancements
   - Type mismatches: TypeScript compile-time checking

### Error Recovery Patterns

```typescript
interface ErrorRecoveryStrategy {
  retryable: boolean;
  maxRetries: number;
  backoffStrategy: 'linear' | 'exponential';
  fallbackAction?: () => void;
}

const errorStrategies: Record<string, ErrorRecoveryStrategy> = {
  NETWORK_ERROR: { retryable: true, maxRetries: 3, backoffStrategy: 'exponential' },
  VALIDATION_ERROR: { retryable: false, maxRetries: 0, backoffStrategy: 'linear' },
  DATABASE_ERROR: { retryable: true, maxRetries: 2, backoffStrategy: 'linear' }
};
```

## Testing Strategy

### Unit Testing
- Component rendering and interaction testing with React Testing Library
- Service layer testing with mocked dependencies
- Utility function testing for validation and data transformation
- Error handling scenario testing

### Integration Testing
- API integration testing with mock servers
- Database integration testing with test database
- End-to-end user workflow testing
- Error recovery testing

### Test Structure
```typescript
describe('CardSelectionManager', () => {
  describe('Card Loading', () => {
    it('should display loading indicator while fetching cards');
    it('should handle API errors gracefully');
    it('should display cards after successful fetch');
  });
  
  describe('Card Selection', () => {
    it('should toggle card selection on click');
    it('should maintain selection state across re-renders');
    it('should allow multiple card selection');
  });
  
  describe('Card Enhancement', () => {
    it('should allow setting treatment, condition, and pricing information');
    it('should validate enhancement values (prices, quantities, conditions)');
    it('should handle boolean flags for fullArt and borderless');
  });
  
  describe('Database Operations', () => {
    it('should save enhanced cards to MongoDB');
    it('should handle save errors with retry option');
    it('should provide success feedback after save');
  });
});
```

## Performance Considerations

### Optimization Strategies

1. **Lazy Loading**: Load cards in batches to handle large datasets
2. **Memoization**: Use React.memo for card components to prevent unnecessary re-renders
3. **Debouncing**: Debounce property input changes to reduce validation calls
4. **Connection Pooling**: Reuse database connections for better performance
5. **Caching**: Cache API responses for repeated requests

### Memory Management

- Implement cleanup in useEffect hooks
- Use WeakMap for temporary data storage
- Implement pagination for large card sets
- Clear selection state on component unmount

## Security Considerations

### Data Validation
- Sanitize all user inputs before database operations
- Validate API responses against expected schemas
- Implement rate limiting for API calls
- Use parameterized queries for database operations

### Error Information Disclosure
- Log detailed errors server-side only
- Provide user-friendly error messages
- Avoid exposing internal system details
- Implement proper error boundaries

## Deployment and Configuration

### Environment Configuration
```typescript
interface Config {
  apiEndpoint: string;
  mongoConnectionString: string;
  maxRetries: number;
  requestTimeout: number;
  batchSize: number;
}
```

### Database Schema
```javascript
// MongoDB Collection: enhanced_cards
{
  _id: ObjectId,
  cardId: String, // Original card ID from API
  name: String,
  description: String,
  imageUrl: String,
  originalData: Object, // Preserve original API response
  enhancements: {
    treatment: String, // "foil", "non-foil", "etched", etc.
    fullArt: Boolean,
    borderless: Boolean,
    quantity: Number,
    condition: String, // "mint", "near mint", "lightly played", etc.
    purchasePrice: Number,
    targetPrice: Number
  },
  createdAt: Date,
  enhancedAt: Date,
  savedAt: Date
}
```

### Integration Points

The Card Selection Manager integrates with the existing React Router 7 application through:
- Route-based navigation for the card management interface
- Shared Tailwind CSS styling system
- Consistent error handling patterns
- TypeScript type safety throughout the application