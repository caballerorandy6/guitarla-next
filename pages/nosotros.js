import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

function Nosotros() {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description="Sobre nosotros, guitarLA, tienda de música"
      >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image
              priority
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="Imagen sobre nosotros"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget massa nec nibh porttitor fringilla. In vestibulum blandit
                accumsan. Nunc eu felis condimentum, feugiat quam eleifend,
                feugiat erat. Pellentesque nunc elit, viverra ac convallis eget,
                efficitur quis est. Pellentesque vel augue mattis risus
                fermentum accumsan eget interdum elit.
              </p>
              <p>
                Mauris facilisis vitae mauris eu congue. Vivamus aliquam
                ultricies faucibus. Nullam et finibus ligula, non viverra magna.
                Ut tincidunt arcu ac risus tristique vulputate. Morbi et dui vel
                sapien mollis ultrices id id velit. Suspendisse convallis, massa
                accumsan iaculis rhoncus, nunc velit commodo odio, luctus
                euismod dui libero vel nunc.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Nosotros;
