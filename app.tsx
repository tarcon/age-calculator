import React, { FC } from "react";

export default function App(
  { Page, pageProps }: { Page: FC; pageProps: Record<string, unknown> },
) {
  return (
    <main>
      <head>
        <title>Fancy Age Calculator</title>
        <link rel="stylesheet" href="style/index.css" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
    </main>
  );
}
