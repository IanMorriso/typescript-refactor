import { ScrollHeader, ScrollSidebars } from './components/ScrollHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ScrollHeader />
            <ScrollSidebars />
            <main>
                {children}
            </main>
        </>
    );
} 