module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/public/**/__tests__/*.test.js",
  ],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
