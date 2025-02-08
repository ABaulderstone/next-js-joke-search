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

#### Dynamic Route

`/jokes/[id]` is a **dynamic route**. This works exactly like

```jsx
<Route path="/jokes/:id" />
```

would work in React Router

### Server Components

A traditional React Single Page Application runs **entirely** on the client (in the user's browser). This means we don't need to deploy a server, we can host our SPA anywhere that can serve a static site; all requests lead to the `index.html` and the entire application loads in the user's browser. There are some downsides to this approach:

- the entire javascript payload needs to run before things appear in the DOM; leading to a slower user experience
- Metadata on page load is limited to whatever we put into `index.html`; meaning SEO is limited
- A webcrawler cannot follow the links on our page; leading to worse SEO
  This may not matter if we're building internal tools, or some kind of b2b saas product. But it is certainly a problem for e-commerce, portfolios, public facing applications etc.
  Next addresses this issue by using `Server Components`. These components are converted to HTML **on the server** and then the HTML is sent to the client.

#### Benefits

There are several benefits to server components

- The server generated HTML is streamed to the client, with a minimal JS payload; decreasing the time to load
- The code for these components is not inlcuded in the React bundle; decreasing overall app footprint
- Server resources (databases, protected APIs etc) can be accessed and not exposed to the client.

#### Downsides

However there are also some downsides:

- React hooks (useState, useEffect) etc cannot be used in server components
- Browser APIs (such as alert) cannot be used
- React synthetic events (onClick, onSubmit) cannot be used
- Harder to test
  - Can't use Reacting Testling Library for server generated components
  - Mocking network calls is more complicated as it happens on the server

### Client Components

Of course even with server rendered html pages, we still want the interactive, smooth UI that we've come to expect from Single Page applications. We can achieve this by using `Client Components`. If we add the `'use client'` directive, Next will recognize our component as a Client Component

```jsx
'use client';

const MyComponent = () => {
  // some jsx
};
export default MyComponent;
```

This gives us all the functionality we are used to getting from React code
However it's important to remember that **all code included in client components ends up in the front end** so make sure to protect secrets, API keys etc

### Hydration

The process of hydration is what makes Next a "best of both worlds" framework. The server renders HTML, which is streamed to the client - giving us good SEO, and faster initial renders - and then React takes over and "hydrates" the page, creating the interactive UI we have come to expect.
If we had a server component like this

```jsx
export default function ServerComponent() {
  return (
    <div>
      <h1>Server Content</h1>
      <ClientComponent initialCount={5} />
    </div>
  );
}
```

that rendered this Client Component

```jsx
'use client';
const ClientComponent = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
export default ClientComponent;
```

The client would get this HTML

```html
<div>
  <h1>Server Content</h1>
  <button>Count: 5</button>
</div>
```

which renders quickly. Then React **hydrates** the page by setting up the useState hook, and attaches the event listener to the button.

Or in this example application you can see client components (like the search form) being hydrated with functionality.

### Navigation

Much like React Router, Next "takes over" navigation in the browser.
