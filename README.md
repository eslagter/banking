# React banking app

Showcase app that includes the following features:

- Dashboard based on design from xxx
- Storyblok integration with some fun content blocks
- Simple authentication flow
- Hono backend

## env properties

Create a `.env.local` file containing the following properties.

```
VITE_STORY_BLOCK_BASE_URL=https://api.storyblok.com/v2/cdn
VITE_STORY_BLOCK_TOKEN=xxxx
```

## Storyblok architectural choices

Storyblok has a JS library, that works fine. The major issue I have with this library is that you've to statically import all your components. [See here](https://github.com/storyblok/storyblok-react-boilerplate/blob/master/src/index.js). That is fine for a small CMS app, but far from optimal, because you are potentially loading tons of extra JS that you don't have to (OR even don't want to) share. I have chosen to not use their library, but to use the REST API to get the CMS data and to use `lazy()` to load CMS Components when they are required.
