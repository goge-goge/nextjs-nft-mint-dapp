import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-gray-900 text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
