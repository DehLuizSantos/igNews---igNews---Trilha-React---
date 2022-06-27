import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";
import { SessionProvider as NextAuthProvider } from 'next-auth/react'

// Pagina que fica em volta de tudo (é reexecutado sempre que o usuário trocar de tala)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>

    </>
  )
}

export default MyApp;
