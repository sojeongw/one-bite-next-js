import { Html, Head, Main, NextScript } from "next/document";

// 모든 페이지에 설정할 html 태그를 관리한다.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
