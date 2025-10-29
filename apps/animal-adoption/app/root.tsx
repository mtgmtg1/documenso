import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import './app.css';

import type { Route } from './+types/root';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function meta(_args: Route.MetaArgs) {
  return [
    { title: 'Animal Adoption Contract System' },
    {
      name: 'description',
      content: 'Secure animal adoption contracts with legal protections',
    },
  ];
}

export default function Root() {
  return <Outlet />;
}
