import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>나만의 꿀팁저장소</title>
      </Head>
      <body>
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
