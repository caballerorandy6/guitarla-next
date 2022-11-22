import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{`GuitarLa - ${title}`}</title>
      </Head>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
