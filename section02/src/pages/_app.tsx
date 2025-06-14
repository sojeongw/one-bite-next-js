import "@/styles/globals.css";
import type { AppProps } from "next/app";

// root 컴포넌트의 역할을 한다.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
