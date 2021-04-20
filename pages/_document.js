/**
 * Este archivo es un template base de HTML
 * Lo que agreguemos aca en el Head se aplicara a todas las páginas
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument