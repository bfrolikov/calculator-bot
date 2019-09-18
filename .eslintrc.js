module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-underscore-dangle': 0,
    'comma-dangle': ["error", "only-multiline"],
    'no-console': 'off',
    'curly': ["error", "multi", "consistent"],
    'nonblock-statement-body-position': ["error", "below"]
  },
};
