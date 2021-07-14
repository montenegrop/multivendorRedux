const config = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/jest/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/fileMock.js",
  },
  setupFiles: ["./jest/setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
}

module.exports = config
