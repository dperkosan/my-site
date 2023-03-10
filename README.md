This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Comments

- `app` is the folder where we will put all our pages
- `api` directory will be used for backend API routes
- every page need a folder with a `page.tsx` file in it. If you need another segment, you will create new folder inside of it.
- when creating new project in Next.js, install prettier and create `.prettierrc` file:

```bash
npm install --save-dev prettier
```

- dynamic pages are added as `[slug]` this folder template
- catching every possible slug (with `/` also, like: `/title-1/custom/title`) is done with folder name: `[...slug]`
- route grouping is done when the folder is called for example: `app/(marketing)/home/page.tsx`, now the URL is: `/home`
- we can create layout files in every route. If we use route grouping we could use multiple root layouts.
- navigation: link component `<Link>` -> it doesn't re-render everything
- all components of Next.js are by default server components. `'use client'` is used to tell that it is client component. Programmatic routing works only on client components (because them you have access to the `window`)
- server component != server side rendering
- big components need to be server components and small ones client components
- server components never leave server. It doesn't keep track of the state. JS is not shipped to the client. It is streamed to the client
- SSR - renders on server and HTML and serialized data is sent to the browser. Client picks it up and re-render the same thing.
- you should always use server components until you need client side interaction or 3rd party lib
- if component need hooks (useState useEffect) then you need to use client components
