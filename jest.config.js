import { createJestConfig } from 'next/jest';

const nextJestConfig = createJestConfig({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases (if you have them in tsconfig.json)
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
  },
};

// Export the combined Jest config
export default nextJestConfig(customJestConfig);
