# Next.js + Tailwind CSS Example

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

Consult docs/rules for a list of available rules.
