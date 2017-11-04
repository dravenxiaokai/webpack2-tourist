module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'comma-dangle': [2, 'never'],
        indent: ['error', 4],
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        semi: 0,
        'no-unused-vars': ['warn'],
        'no-console': 0
    }
}