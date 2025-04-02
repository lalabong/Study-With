module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'camelcase': ['error', { properties: 'never' }],
    'max-len': ['error', { 
      code: 100,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'prefer-template': 'error',
    'require-await': 'error',
    'no-await-in-loop': 'warn',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-unused-expressions': 'error',
    'no-useless-catch': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'prefer-promise-reject-errors': 'error',
    'require-atomic-updates': 'error',
    'require-unicode-regexp': 'error',
    'valid-jsdoc': 'warn'
  },
  plugins: ['prettier'],
}; 