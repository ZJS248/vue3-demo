module.exports = {
  root: true,
  env: {
    "vue/setup-compiler-macros": true,
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  extends: [
    "airbnb-base",
    "@vue/prettier/@typescript-eslint",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {
        compilerOptions: {
          paths: {
            "@/*": ["src/*"],
          },
        },
      },
    },
  },

  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "import/extensions": "off",
  },
  overrides: [
    {
      files: ["*.json"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
    {
      files: ["*.config.*", ".*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
