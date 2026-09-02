# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`dtaylorbrown` is a personal website built with Astro 7 and TypeScript. It is intentionally tiny: a single page (`src/pages/index.astro`) rendered through one shared layout (`src/layouts/Layout.astro`). There is no test suite, no linter/formatter config, no CI, and no deployment config in the repo.

## Commands

Yarn v1 is the package manager (`yarn.lock` is the committed lockfile — do not introduce `package-lock.json`).

- `yarn` — install dependencies
- `yarn dev` (or `yarn start`) — dev server at http://localhost:4321
- `yarn build` — runs `astro check` (TypeScript + `.astro` diagnostics) then `astro build` into `dist/`
- `yarn preview` — serve the built `dist/` output
- `yarn astro <cmd>` — any other Astro CLI command, e.g. `yarn astro check`

Type checking is only reachable through `astro check` (bundled via `@astrojs/check`); there is no standalone `tsc` script. Run `yarn astro check` for a fast check without a full build.

## Architecture

`astro.config.mjs` is an empty `defineConfig({})`, so everything is Astro defaults: static output, file-based routing from `src/pages/`, no integrations or adapters.

`Layout.astro` owns the entire HTML document (`<head>`, meta tags, favicon link) and takes a single required `title` prop typed via a local `interface Props`. It also carries the only global stylesheet — a `<style is:global>` block defining the `--accent*` CSS custom properties and the dark `#13151a` page background. Page-specific styles live in scoped `<style>` blocks in the page itself. Any new page should render inside `Layout` and pass a `title`; global design tokens belong in `Layout.astro`, not in pages.

`tsconfig.json` extends `astro/tsconfigs/strict`, so strict mode is on and new code is expected to type-check cleanly under it.

## Dependency notes

`package.json` pins `resolutions.rolldown` to `1.2.6`. Astro 7 → vite 8 requires rolldown `~1.2.4`, which resolves to 1.2.7, but 1.2.7's `@rolldown/binding-*` platform packages were never published. npm tolerates the missing optional deps; yarn v1 aborts the install. Remove this pin once 1.2.7 bindings ship upstream.

TypeScript is held at `^6` (not 7) because `@astrojs/check` 0.9.10 declares a peer range of `^5.0.0 || ^6.0.0`.
