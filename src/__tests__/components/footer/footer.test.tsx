import { render, screen } from '@testing-library/react';
import { Footer } from '@/app/components/footer/footer';

// Mock do componente Container para isolar o teste
jest.mock('@/app/components/ui/Container', () => ({
  Container: ({ children }: { children: React.ReactNode }) => <div data-testid="container-mock">{children}</div>,
}));

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/2025/)).toBeInTheDocument();
  });

  it('renders author link', () => {
    render(<Footer />);
    const authorLink = screen.getByText('Wenderson Junior');
    expect(authorLink).toBeInTheDocument();
    expect(authorLink.tagName).toBe('A');
    expect(authorLink).toHaveAttribute('href', 'https://github.com/wendersonjunior');
    expect(authorLink).toHaveAttribute('target', '_blank');
  });

  it('uses Container component', () => {
    render(<Footer />);
    expect(screen.getByTestId('container-mock')).toBeInTheDocument();
  });
});
