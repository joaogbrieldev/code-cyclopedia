module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/apps/**/src/**/*.ts',
    '<rootDir>/libs/shared/src/**/*.ts',
    '!<rootDir>/apps/**/src/**/*.module.ts',
    '!<rootDir>/libs/shared/src/**/*.module.ts',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/apps/code_cyclopedia/', '<rootDir>/libs/'],
  moduleNameMapper: {
    '^libs/shared(|/.*)$': '<rootDir>/libs/shared/src/$1',
    '^libs/testing(|/.*)$': '<rootDir>/libs/shared/testing/$1',
    '^@code_cyclopedia/testing(|/.*)$':
      '<rootDir>/apps/code_cyclopedia/testing/$1',
    '^@code_cyclopedia/(.+)': '<rootDir>/apps/code_cyclopedia/src/$1',
  },
};
