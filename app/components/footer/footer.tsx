export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <p className="text-blue-gray-500 font-normal">
        &copy; 2025 Material Tailwind
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a
            href="#"
            className="text-blue-gray-500 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-blue-gray-500 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-blue-gray-500 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-blue-gray-500 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
}