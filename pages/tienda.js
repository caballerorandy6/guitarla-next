import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css";

export default function Tienda({ guitarras }) {
  //console.log(guitarras);

  return (
    <>
      <Layout
        title={"Tienda Virtual"}
        description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>

          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

//Consultar una API con getStaticProps ===> Generacion Estatica
// export async function getStaticProps() {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitars?populate=image`
//   );
//   const { data: guitarras } = await respuesta.json();

//   //console.log(guitarras);

//   return {
//     props: { guitarras },
//   };
// }

//Consultar una API con getServerSideProps ===> Generacion Dinamica
export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitars?populate=image`
  );
  const { data: guitarras } = await respuesta.json(); // nombrando data como guitarras

  //console.log(guitarras);

  return {
    props: { guitarras },
  };
}
