const RULE = {
  OFF: 'off',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': RULE.OFF,
    'import/no-unresolved': RULE.OFF,
    'import/extensions': RULE.OFF,
    'no-underscore-dangle': RULE.OFF,
    'newline-before-return': RULE.ERROR,
    'space-in-parens': [ RULE.ERROR, 'always', { exceptions: ['()'] }],
    'no-console': [ RULE.ERROR, { allow: [ 'warn', 'error' ] }],
    'array-bracket-spacing': [ 'error', 'always', { singleValue: false, objectsInArrays: false }],
    'max-len': 160,
    // TYPESCRIPT
    '@typescript-eslint/no-explicit-any': RULE.OFF,
    'no-unused-vars': [ RULE.ERROR, { argsIgnorePattern: '^_' }],
    // REACT
    'react/jsx-filename-extension': [ RULE.ERROR, { extensions: [ '.jsx', '.tsx' ] }],
    'react/react-in-jsx-scope': RULE.OFF,
    'react/jsx-curly-spacing': [ RULE.ERROR, 'always', { allowMultiline: true }],
    'react/button-has-type': RULE.OFF,
  },
};
