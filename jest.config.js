// jest.config.js
// Sync object

module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(css|sass|scss|svg)$': '<rootDir>/__mocks__/styleMock.js',
    electron: '<rootDir>/__mocks__/electronMock.js',
  },
  // transform: {
  //   '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  // },
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
};
