import { Container } from "@/app/components/ui/Container";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 | Coded with ❤️️ by <a href="https://github.com/wendersonjunior" target="_blank">Wenderson Junior</a>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
