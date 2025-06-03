import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Container({ children, className = '', fullWidth = false }: ContainerProps) {
  return (
    <div className={`w-full ${fullWidth ? '' : 'px-4 sm:px-6 lg:px-8 mx-auto max-w-[1280px]'} ${className}`}>
      {children}
    </div>
  );
}
