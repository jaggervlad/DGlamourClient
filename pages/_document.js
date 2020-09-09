import Document, { Head, Main, NextScript } from 'next/document';
import logo from '../images/logo.jpg';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href={logo} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);

  return { ...initialProps };
};
