import type { ReactNode } from "react";
import { FC } from "react";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../components/common";
import { useRouter } from "next/router";
import { SEO } from "../components/common";
import "../styles/globals.css";

const Noop: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const Layout = (Component as any).Layout || Noop;

  return (
    <GlobalProvider>
      <SEO />
      <div className={router.locale === "cn" ? "cn" : "en"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </GlobalProvider>
  );
}

export default MyApp;
