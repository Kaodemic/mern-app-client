module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.config.{js,json}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/config/**',
    '!**/pages/_app.js',
    '!**/__test__/__fixtures__/*.fixtures.{js,jsx,ts,tsx}',
    '!**/utils/request.js',
    '!**/pages/index.js',
    '!.stylelintrc.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};
