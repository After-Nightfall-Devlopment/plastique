module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.ts",
        "**/*.tsx"
    ],
    coverageThreshold: {
        global: {
            branches: 85,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
        "/coverage/",
        "/node_modules/",
        "/src/configs",
        "/src/react-app-env.d.ts",
        "externals.d.ts",
        "/src/index.tsx",
        "/src/App.tsx",
        "/src/local-storage/",
        "/src/models",
        "/src/types"
    ],
    globals: {
        window: {},
        "ts-jest": {
            enableTsDiagnostics: true,
        }
    },
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/configs/test-utils/file-mock.ts",
        "\\.(css|scss)$": "<rootDir>/src/configs/test-utils/style-mock.ts"
    },
    rootDir: ".",
    setupFiles: [
        "<rootDir>/src/configs/test-setup/chance-setup.ts"
    ],
    setupFilesAfterEnv: [
        "jest-extended",
        "<rootDir>/src/configs/test-setup/setup-tests.ts"
    ],
    testEnvironment: "jsdom",
    testMatch: [
        "**/*.spec.[jt]s",
        "**/*.test.tsx",
        "**/*.test.ts",
        "!**/dist/**/*"
    ],
    transform: {
        "\\.ts$": "ts-jest",
        "\\.tsx$": "ts-jest"
    },
    verbose: false,
};