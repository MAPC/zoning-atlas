import react from "eslint-plugin-react";
import stylisticJs from "@stylistic/eslint-plugin-js";

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:storybook/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: {
    react: react,
    "@stylistic/js": stylisticJs,
  },
  rules: {
    "react/prop-types": "off",
    "@stylistic/js/indent": ["error", 2],
    "@stylistic/js/object-curly-spacing": ["always"],
    "linebreak-style": ["error", "unix", "windows"],
    // quotes: ["error", "double"],
    // semi: ['error', 'always'],
    "block-scoped-var": "error",
    camelcase: ["warn", {ignoreDestructuring: true}],
    "max-len": [160, 2],
    curly: "error",
    "default-case": "error",
    "default-param-last": "error",
    eqeqeq: ["error", "smart"],
    "func-style": ["error", "expression"],
  },
};
