import { render, screen } from '@testing-library/react';
import { Container } from '@/app/components/ui/Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default max-width and padding classes', () => {
    const { container } = render(<Container>Test content</Container>);
    const divElement = container.firstChild as HTMLElement;
    
    expect(divElement).toHaveClass('max-w-[1280px]');
    expect(divElement).toHaveClass('px-4');
    expect(divElement).toHaveClass('sm:px-6');
    expect(divElement).toHaveClass('lg:px-8');
  });

  it('does not apply max-width when fullWidth is true', () => {
    const { container } = render(<Container fullWidth>Test content</Container>);
    const divElement = container.firstChild as HTMLElement;
    
    expect(divElement).not.toHaveClass('max-w-[1280px]');
    expect(divElement).not.toHaveClass('px-4');
  });

  it('applies additional className when provided', () => {
    const { container } = render(<Container className="test-class">Test content</Container>);
    const divElement = container.firstChild as HTMLElement;
    
    expect(divElement).toHaveClass('test-class');
  });
});
