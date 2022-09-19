import React, { Fragment } from "react";
import Head from "next/head";
import config from "./seo_meta.json";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const base_url_sorted = base_url ? `https://${base_url}` : null;

interface OgImage {
  url?: string;
  width?: string;
  height?: string;
  alt?: string;
}

const ogImage = ({ url, width, height, alt }: OgImage, index: number) => {
  const imgUrl = base_url_sorted
    ? new URL(url!, base_url_sorted).toString()
    : url;
  //generate full og url, based on base url and relateive url.
  return (
    <Fragment key={`og:image:${index}`}>
      <meta
        key={`og:image:url:${index}`}
        property="og:image"
        content={imgUrl}
      />
      <meta
        key={`og:image:width:${index}`}
        property="og:image:width"
        content={width}
      />
      <meta
        key={`og:image:height:${index}`}
        property="og:image:height"
        content={height}
      />
      <meta
        key={`og:image:alt:${index}`}
        property="og:image:alt"
        content={alt}
      />
    </Fragment>
  );
};

const SEO = () => {
  return (
    <Head>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <title key="title">{config.title}</title>
      <meta key="description" name="description" content={config.description} />
      {/* open graph */}
      <meta key="og:type" property="og:type" content={config.openGraph.type} />
      <meta
        key="og:title"
        property="og:title"
        content={config.openGraph.title}
      />
      <meta
        key="og:description"
        property="og:description"
        content={config.openGraph.description}
      />
      <meta
        key="og:site_name"
        property="og:site_name"
        content={config.openGraph.site_name}
      />
      <meta
        key="og:url"
        property="og:url"
        content={config.openGraph.url}
      ></meta>
      {ogImage(config.openGraph.images[0], 0)}
      {/* twitter */}
      {config.twitter.cardType && (
        <meta
          key="twitter:card"
          name="twitter:card"
          content={config.twitter.cardType}
        />
      )}
      {config.twitter.site && (
        <meta
          key="twitter:site"
          name="twitter:site"
          content={config.twitter.site}
        />
      )}
      {config.twitter.handle && (
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={config.twitter.handle}
        />
      )}
    </Head>
  );
};

export default SEO;
