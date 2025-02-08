# This Guide

This app is intented as a **quick** overview to help you get accustomed to [Next.Js](https://nextjs.org/) patterns.
Because I want to expose you to as many features as possible this does not neccesarily reflect a consistent or best practice approach. This is also an opinionated guide, you will likely encounter different folder structures, methods for handling errors, etc as you work on a variety of different projects

It's also worth noting that this guide was made in early 2025 using Next v15. This information could become outdated, and you will need to consult the most up to date documentation if anything here is broken.

## Next Js

Next.Js is a framework built on top of React, many of the features that have been available for some time in Next are experimental React features that will likely become avialble in React 19 (still in beta as of early 2025). In fact some of the biggest focuses of this guide will be React features:

- Server Components
- Suspense Boundaries
- use hook

Nest also includes additional functionality like:

- File Based routing
- API routes
- Middleware

### Routes

One of the biggest differences from React is the way Next handles routes. Instead of using something like [React Router](https://reactrouter.com/) Next has **folder based** routing enabled by default.
(This guide uses the app folder based routing approach)
Inside `/app` you'll notice a `layout.tsx` and a `page.tsx`
You can think of this like the `App` component in a React application `layout.tsx` handles the things we might want to appear everywhere in our application:

- Navigation
- Footer
- Global styling
  and `page.tsx` handles the 'page' we want to appear at the root route `/`
  Inside `/app` there are some nested folders. A folder **only** becomes a route if there is a `page.tsx` file inside that folder.
  Looking at the structure inside the app folder

```
├── favicon.ico
├── globals.css
├── jokes
│   ├── [id]
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── page.tsx
│   ├── random
│   │   ├── actions.ts
│   │   ├── page.tsx
│   │   └── sub-components
│   │       ├── client
│   │       │   └── Joke.tsx
│   │       └── server
│   │           └── JokeLoader.tsx
│   ├── search
│   │   ├── page.tsx
│   │   └── sub-components
│   │       ├── client
│   │       │   ├── JokeSearchForm.tsx
│   │       │   ├── JokeSearchWrapper.tsx
│   │       │   └── PaginationWrapper.tsx
│   │       └── server
│   │           ├── JokeResults.tsx
│   │           └── JokeResultsSkeleton.tsx
│   └── sub-components
│       └── client
│           └── AllJokesPaginationWrapper.tsx
├── layout.tsx
└── page.tsx
```

We can infer that there is a `/` route, as well as `/jokes` `/jokes/random` `/jokes/search` and `/jokes/[id]`

### Dynamic Route

`/jokes/[id]` is a **dynamic route**. This works exactly like

```jsx
<Route path="/jokes/:id" />
```

would work in React Router
