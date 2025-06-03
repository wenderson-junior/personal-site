import { Container } from "@/app/components/ui/Container";

export function Header() {
  return (
    <header className="w-full h-17">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-bold dark:text-white">
              {"<WJR />"}
            </h3>
          </div>
          <nav className="hidden sm:flex items-center space-x-8">
            <a href="#" className="dark:text-gray-300 dark:hover:text-white">Home</a>
            <a href="#" className="dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="#" className="dark:text-gray-300 dark:hover:text-white">Projects</a>
            <a href="#" className="dark:text-gray-300 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
