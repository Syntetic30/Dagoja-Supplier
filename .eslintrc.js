module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb-base',
    ],
    env: {
        browser: true,
        es6: true,
        node: true,
        'react-native/react-native': true,
    },
    plugins: ['react', 'react-native'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
    rules: {
        indent: ['warn', 4],
        'linebreak-style': 0,
        quotes: ['warn', 'single'],
        semi: ['error', 'always'],
        'prettier/prettier': 0,
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
    },
};
