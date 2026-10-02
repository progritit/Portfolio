export default {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleNameMapper: {
    "\\.css$": "<rootDir>/tests/styleMock.cjs",
  },
};
