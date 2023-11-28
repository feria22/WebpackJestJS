
module.exports = {
  roots: ["../__tests__", "../src"],
  moduleDirectories: ["../node_modules", "../src"],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: 'babel.test.config.js',
      },
    ],
  },
  testEnvironment: "jsdom"
};

