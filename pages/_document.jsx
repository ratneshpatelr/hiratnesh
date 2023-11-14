import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="scroll-smooth"
      prefix="https://ogp.me/ns/website#"
      lang="en"
    >
      <Head>
        {/* <title>Ratnesh ✦ web designer</title> */}
        <meta name="title" content="Ratnesh ✦ web developer" />
        <meta name="description" content="Developer // Designer // Programmer" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Ratnesh ✦ web developer" />
        <meta
          property="og:description"
          content="Developer // Designer // Weeb"
        />
        <meta
          property="og:image"
          content=""
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://hiratnesh.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Ratnesh ✦ web developer"
        />
        <meta
          property="twitter:description"
          content="Developer // Designer "
        />
        <meta
          property="twitter:image"
          content="/"
        />

        {/* whatsapp */}
        <meta property="og:site_name" content="Ratnesh ✦ web developer" />
        <meta property="og:title" content="Ratnesh ✦ web developer" />
        <meta
          property="og:description"
          content="Developer // Designer "
        />
        <meta
          property="og:image"
          itemprop="image"
          content="/"
        />
        <meta property="og:type" content="website" />

        {/* canonical links */}
        <link rel="canonical" href="https://hiratnesh.vercel.app/" />
        <link
          rel="search"
          href="/opensearch.xml"
          type="application/opensearchdescription+xml"
          title="Ratnesh ✦ web developer"
        />
        <link rel="preconnect" href="/" />
        <link
          rel="preconnect"
          href="/"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Quicksand:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="back font-out  bg-[#fffdfd] dark:bg-[#242424] overflow-x-hidden lg:transform-gpu ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
