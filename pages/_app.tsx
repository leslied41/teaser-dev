import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <main className={router.locale === "cn" ? "cn" : "en"}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
