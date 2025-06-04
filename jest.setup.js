// Importa as extensões do jest-dom
import '@testing-library/jest-dom';

// Silencia os warnings do React 18 relacionados ao act()
// Isso é útil para evitar warnings desnecessários nos testes
global.console = {
  ...console,
  // Desativa warnings específicos do testing library
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
};
