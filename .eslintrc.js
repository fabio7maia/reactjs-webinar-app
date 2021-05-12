module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  plugins: ['spellcheck', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 11, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true // Enables Jest variables scoping
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords: ['dict', 'utils'],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+/[-\\w\\.]+$' //For MIME Types
        ],
        skipWordIfMatch: [
          // '^foobar.*$' // words that begin with foobar will not be checked
        ],
        minLength: 3
      }
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Use our .prettierrc file as source
  }
};
