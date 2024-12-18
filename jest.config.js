const nextJest = require('next/jest');

// Cria a configuração do Jest com base nas configurações do Next.js
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Ambiente de teste para DOM
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Arquivo de configuração adicional
  moduleNameMapper: {
    // Mapear imports de estilos ou arquivos estáticos
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], // Ignorar pastas específicas
};

module.exports = createJestConfig(customJestConfig);
