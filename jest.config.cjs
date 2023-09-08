// jest.config.cjs
// jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "\\.(css|less)$": "identity-obj-proxy", // Add this line for CSS mock
  },
  testMatch: ['**/*.test.(ts|tsx|js|jsx)'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
    '!src/**/index.ts',
    '!src/**/*.test.{ts,tsx,js,jsx}',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};


// module.exports = {
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.jsx?$": "babel-jest"
//   },
//   testMatch: [
//     "**/__tests__/**/*.jsx?(x)",
//     "**/?(*.)+(spec|test).jsx?(x)"
//   ],
//   transformIgnorePatterns: [
//     "/node_modules/(?!(module-to-ignore)/)"
//   ],
//   moduleNameMapper: {
//     "\\.(css|less)$": "identity-obj-proxy"
//   }
// };
