import { render, screen } from '@testing-library/react';
import { Header } from '@/app/components/header/header';

// Mock do componente Container para isolar o teste
jest.mock('@/app/components/ui/Container', () => ({
  Container: ({ children }: { children: React.ReactNode }) => <div data-testid="container-mock">{children}</div>,
}));

describe('Header', () => {
  it('renders the logo correctly', () => {
    render(<Header />);
    expect(screen.getByText('<WJR />')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('uses Container component', () => {
    render(<Header />);
    expect(screen.getByTestId('container-mock')).toBeInTheDocument();
  });
});
