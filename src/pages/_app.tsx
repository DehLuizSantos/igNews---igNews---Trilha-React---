import { AppProps } from "next/app";
import "../styles/global.scss";

// Pagina que fica em volta de tudo (é reexecutado sempre que o usuário trocar de tala)
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
