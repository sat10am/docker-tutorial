module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readable',
    SharedArrayBuffer: 'readable',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      typescript: {},
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'eslint-plugin-prettier',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'warn',
    'no-return-assign': 'off',
    'no-eq-null': 'error',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['ctx'] },
    ],
    'no-underscore-dangle': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'newline-per-chained-call': 'off',
    'array-element-newline': ['error', 'consistent'],
    'no-shadow': 'warn',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
      },
    ],
    camelcase: 'warn',
    'prefer-destructuring': 'warn',
    'arrow-body-style': 'warn',
    'object-curly-newline': ['warn', { consistent: true }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-uses-react': 'error',
    'no-confusing-arrow': 0,
    'space-infix-ops': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Disabled by duplicated with prettier setting
    quotes: 'off',
    'jsx-quotes': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'arrow-parens': 'off',

    // fix typescript syntax error
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
  },
}
