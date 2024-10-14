module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        'airbnb',
        'airbnb-typescript',
        "plugin:react/jsx-runtime"
    ],
    overrides: [
        {
          files: ['*.ts', '*.tsx'],
          extends: [
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
          ],
          parserOptions: {
            project: ['./tsconfig.json'],
          },
        },
      ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "project": './tsconfig.json',
        "tsconfigRootDir": __dirname

    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "linebreak-style": 0,
        "max-len": "off",
        "react/function-component-definition": [2, {"namedComponents": "arrow-function",  "unnamedComponents": "arrow-function"}],
        "import/no-cycle":'off',
        "no-nested-ternary": 'off',
        "import/prefer-default-export": "off",
        "react/forbid-prop-types": 0,
        "@typescript-eslint/no-unsafe-return": 'off',
    }
}