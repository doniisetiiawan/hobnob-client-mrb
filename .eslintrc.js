module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/destructuring-assignment": "off",
    "no-console": "off",
    "react/no-unescaped-entities": "off"
  }
};
