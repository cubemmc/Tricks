module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': 0,
    'vue/no-unused-vars': 0,
    'eqeqeq': 0,
    'no-useless-return': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
