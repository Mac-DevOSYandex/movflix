# Next.js + Tailwind CSS Example

```log
warn  - Fast Refresh had to perform a full reload. Read more: https://nextjs.org/docs/basic-features/fast-refresh#how-it-works
```

```bash
pnpm add redux redux-thunk next-redux-wrapper react-redux
```
This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
# or
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

---

### Semantic Versioning

Conventional Commit matches SemVer through type in the commit message. Automated versioning tooling also relies on it to decide the new version for source code. With the following convention:

fix: a commit of the (bug)fix type is equal to PATCH in the SemVer.
feat: a commit of type feature is equal to MINOR in the SemVer.
Also, the keyword BREAKING CHANGE in the body section of the commit message will imply that this commit has a modification that makes the code no longer compatible with the previous version. Like changing the response structure of an API, the handle response part of the previous structure will of course no longer be accurate, and now we need to create an entirely new version by bumping MAJOR SemVer version.
Some common type uses include:

- feat: a new feature for the user, not a new feature for a script
- `build` After a build
- `fix`: bug fix for the user, not a fix to a build scripts
- `refactor`: refactoring production code
- `revert`: Revert to previous version...
- `chore`: updating gulp tasks etc.; no production code change
- 'ci': Continuous integration
- `docs`: changes to documentation
- `style`: formatting, missing semicolons, etc.; no code change
- `perf`: code improved in terms of processing performance
- `vendor`: update version for dependencies, packages.
- `test`: adding missing tests, refactoring tests; no production code change
- `up` upgrade to latest version and/or including code change

While these are the most common types that you're going to see in the wild, nothing is stopping you from creating your own types of commits.

### Problems

The following rules are considered problems for @commitlint/config-conventional and will yield a non-zero exit code when not met.

## Consult docs/rules for a list of available rules.

# Supabase

---

```bash
pnpm add @supabase/supabase-js
```

> leeron.io-main - Next.js Gallery with supabase backend
```json
{
  "private": true,
  "license": "MIT",
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "start": "next start",
    "lint": "next lint",
    "sanity-start": "sanity start"
  },
  "dependencies": {
    "@prisma/client": "^4.0.0",
    "@sanity/image-url": "^1.0.1",
    "@sanity/webhook": "^2.0.0",
    "@tailwindcss/typography": "0.5.3",
    "classnames": "^2.3.1",
    "date-fns": "2.28.0",
    "googleapis": "48.0.0",
    "motion": "^10.12.0",
    "next": "12.2.2",
    "next-auth": "4.9.0",
    "next-mdx-remote": "^4.0.3",
    "next-sanity": "^0.6.0",
    "next-themes": "^0.2.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "sanity": "dev-preview",
    "sanity-plugin-markdown": "^3.0.0-v3-studio.0",
    "styled-components": "^5.2.0",
    "swr": "1.3.0",
    "tailwindcss": "3.1.5",
    "use-delayed-render": "^0.0.7"
  },
  "devDependencies": {
    "@types/react": "^18.0.15",
    "autoprefixer": "10.4.7",
    "eslint": "8.19.0",
    "eslint-config-next": "12.2.2",
    "globby": "13.1.2",
    "postcss": "^8.4.13",
    "prettier": "2.7.1",
    "prisma": "4.0.0",
    "reading-time": "^1.4.0",
    "rehype": "12.0.1",
    "rehype-autolink-headings": "6.1.1",
    "rehype-code-titles": "1.1.0",
    "rehype-prism-plus": "^1.4.2",
    "rehype-slug": "5.0.1",
    "remark-gfm": "^3.0.1",
    "rss": "1.2.2",
    "typescript": "^4.7.3"
  },
  "prettier": {
    "arrowParens": "always",
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "none"
  }
}

```


```log
ReferenceError: document is not defined
    at Module.<anonymous> (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:68697)
    at o (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:110)
    at /Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:902
    at Object.<anonymous> (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:913)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
error - ReferenceError: document is not defined
    at Module.<anonymous> (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:68697)
    at o (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:110)
    at /Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:902
    at Object.<anonymous> (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:913)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18) {
  page: '/'
}
ReferenceError: document is not defined
    at Module.<anonymous> (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:68697)
    at o (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:110)
    at /Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:902
    at Object.<anonymous> (/Users/gio/Dev/netflix-clone/node_modules/.pnpm/tw-elements@1.0.0-alpha12/node_modules/tw-elements/dist/js/index.min.js:1:913)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
```


> Redux 

```
pnpm add next-redux-wrapper react-redux redux redux-devtools-extension redux-thunk
```