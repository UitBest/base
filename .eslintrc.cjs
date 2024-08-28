module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-recommended', 'plugin:prettier-vue/recommended'],

    globals: {
        axios: true,
        _: true,
        api: true,
        dateTime: true,
        '@': true,
    },

    settings: {
        'prettier-vue': {
            SFCBlocks: {
                template: true,
                script: true,
                style: false,
                customBlocks: {
                    docs: { lang: 'markdown' },
                    config: { lang: 'json' },
                    module: { lang: 'js' },
                    comments: false,
                },
            },
            usePrettierrc: true,
            fileInfoOptions: {
                ignorePath: '.testignore',
                withNodeModules: false,
            },
        },
    },

    rules: {
        'vue/multi-word-component-names': 'off',
        'quotes': ['error', 'single', { allowTemplateLiterals: true }],
        'quote-props': ['error', 'as-needed'],
        'vue/attributes-order': ['warn', { alphabetical: true }],
        'vue/component-name-in-template-casing': 'error',
        'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
        'vue/padding-line-between-blocks': 'error',
        'prettier-vue/prettier': [
            'warn',
            {
                printWidth: 121,
                singleQuote: true,
                semi: true,
                trailingComma: 'es5',
                singleAttributePerLine: true,
                vueIndentScriptAndStyle: true,
            },
        ],
    },

    overrides: [
        {
            files: ['*.vue', '*.js'],
            rules: {
                indent: 'off',
            }
        },
    ],
};
