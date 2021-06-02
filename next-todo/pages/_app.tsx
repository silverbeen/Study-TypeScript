import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./components/header/Header";
import { TodoList } from "./components/list/style";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
