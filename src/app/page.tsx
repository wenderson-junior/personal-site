import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Container } from "./components/ui/Container";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8">
        <Container>
          Content
        </Container>
      </main>
      <Footer />
    </div>
  );
}
