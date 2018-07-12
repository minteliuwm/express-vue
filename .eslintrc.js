// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  globals: {
    XMLHttpRequest: false,
    WeixinJSBridge: false,
    document: false
  },
  // add your custom rules here
  rules: {
    'no-console': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
    'space-before-function-paren': 0,
    'no-useless-escape': 0,
    'no-undef': 0,
    'no-unused-vars': 0
  }
}