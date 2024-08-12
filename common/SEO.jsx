import Head from "next/head";

const SEO = ({ pageTitle, description }) => (
  <>
    <Head>
      <title>
        {pageTitle ? pageTitle : "Lumenta Digital"}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={description} />
      {/* <meta name="robots" content="noindex, follow" /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/logo.png" />
    </Head>
  </>
);

export default SEO;