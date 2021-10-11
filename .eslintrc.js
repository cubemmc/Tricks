module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-multiple-empty-lines": 0,
    "eol-last": 0,
    "no-trailing-spaces": 0,
    "no-unused-vars": "warn",
    "vue/no-unused-vars": "warn",
    eqeqeq: 0,
    "no-useless-return": 0,
    quotes: [1, "single"],
    singleQuote: true,
    semi: false,
    // "space-before-function-paren": [0, "always"],
  },
  parserOptions: {
    // parser: 'babel-eslint'
  },
};
