import type { ReactNode } from "react";
import { FC } from "react";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../components/common";
import { useLocale } from "../hooks";
import { SEO } from "../components/common";
import "../styles/globals.css";

const Noop: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const isEn = useLocale();
  const Layout = (Component as any).Layout || Noop;

  return (
    <GlobalProvider>
      <SEO />
      <div className={isEn ? "en" : "cn"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </GlobalProvider>
  );
}

export default MyApp;
