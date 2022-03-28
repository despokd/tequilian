# [Tequilian](https://tequilian.de)

Personal website for fun and sharing

![social preview](static/social-preview.png)

## TODO

- [ ] general styling
- [ ] a11y improvements
- [ ] blog excerpt
- [ ] blog meta tags
- [x] blog titles
- [ ] blog preview images
- [ ] link previews
- [ ] fetch github projects
- [ ] add target blank and rel noopener to external links to snippets

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
