# Welcome to 'Lint like a Pro with [Astro](https://astro.build)'

![https://camo.githubusercontent.com/390dedd43a50362a2922b5b79519aa17d4cec48af43d31220e99501a70cda565/68747470733a2f2f62616467656e2e6e65742f62616467652f72656e6f766174652f656e61626c65642f677265656e3f63616368653d333030](https://renovatebot.com/)
![https://badgen.net/badge/icon/vercel?icon=vercel&label](https://vercel.app/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/advanced-astro/astro-lintlapro)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/advanced-astro/astro-lintlapro)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .editorconfig
├── .gitignore
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                             |
| :---------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
<https://medium.com/tbc-engineering/why-and-how-to-lint-like-a-pro-173fc4a73899>

## Installation

`pnpm dlx create-astro@latest <foldername>`

```bash
pnpm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-plugin-prettier eslint-plugin-import husky lint-staged prettier stylelint stylelint stylelint-config-standard stylelint-config-recommended-scss stylelint-prettier stylelint-config-prettier
```

### Prettier

`pnpm i -D prettier`

```javascript
[.prettierrc.js]

module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ],
    singleQuote: true,
    semi: false,
    trailingComma: 'none'
}
```

### Husky

`pnpm i -D husky`
`pnpm dlx husky add .husky/pre-commit "pnpm dlx prettier --cache --write --plugin-search-dir=. ."`

### Lint-Staged

`pnpm i -D lint-staged`
`pnpm dlx lint-staged`

### ESLint

`pnpm i -D eslint`

And now for tssupport

`pnpm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin`

```javascript
[.eslintrc.js]

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
        'prettier/prettier': 'warn',
      },
    },
  ],
};
```

### Stylelint

`pnpm i -D stylelint stylelint-config-standard`

For SCSS `stylelint-config-recommended-scss`

and for Prettier `npm i -D stylelint-prettier stylelint-config-prettier`

```javascript
[.stylelintrc.js]

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
};
```

### package.json

```json
"lint-staged": {
  "*.{js,ts}": "eslint --fix",
  "*.{css,scss}": "stylelint --fix"
}
Since we no longer use Prettier in lint-staged, we don't get formatted html and json files, so we have to add this line:

"*.{html,json}": "prettier --write"
```
