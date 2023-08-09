# rasca

> Creating a new package or project is just a few keystrokes away!

- Preconfigured templates
- Private and public variants
- ESLint/Prettier/EditorConfig

## Getting Started

1. Install CLI tool

```bash
npm install -g rasca
```

2. Call CLI tool

```
rasca
```

Once you call `rasca` it's going to walk you through the whole process which is:

1. Select name
2. Select template
3. Select variant
4. Done

## Motivation

- We work on very diverse projects so we end up working with a lot of different stacks
- We used to spend a lot of time configuring the stacks before we could start working
- We had no way of enforcing standarts and configurations (ESLint/Prettier/etc.)

## Development

You need to install `pnpm` and run `pnpm install`.

To locally test the CLI tool you should run `pnpm build:local` which automatically installs `rasca` as a global package.

You can also run `pnpm dev` which automatically re-builds and re-runs the CLI tool on every change.

Before pushing you should run `pnpm fix` to lint and format the code.

## Roadmap

### Road to v1

- [ ] Move template generation to `rasca new`
- [ ] Check if package already exists in the first step
- [ ] Better error handling
- [ ] More informative instructions after package has been created
- [ ] Add CLI props so we can copy paste different config commands
- [ ] Add Github CI/CD actions for public variants
- [ ] Add CommitLint
- [ ] Make variants support different tech configurations (e.g. React + CSS modules/Tailwind/CSS-in-JS)
- [ ] Add update/migrate feature to keep old generated packages up to date with changes made in the source code of the templates used for generating the packages
- [ ] Support non-JS/TS templates (mainly Ruby on Rails)
- [ ] Tests

### Can be done any time

- [ ] Add more templates
  - [ ] Turborepo
  - [ ] SvelteKit
  - [ ] Cloudflare Workers

## Contributions

Keep in my that this is mainly a custom tool for Rascasone and not a general use tool aimed at everyone so even though it might be useful for you we might not add a feature that you propose simply because we don't need/use it.

So please consult with us first in discussions.
