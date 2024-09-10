import { Html, Head, Main, NextScript, } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <title>Host a Nomad</title>
          <link rel="icon" type="image/x-icon" href="/nomad-icon.svg"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
