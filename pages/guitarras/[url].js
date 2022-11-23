import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";
import FormError from "../../components/formError";

export default function GuitarraURL({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const [formError, setFormError] = useState(false);
  const { name, description, image, price } = guitarra[0].attributes;
  //console.log(guitarra[0].attributes);

  //Validacion del Formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      setFormError(true);
      return;
    }
    setFormError(false);

    //Guitarra seleccionada
    const guitarraSelecionada = {
      id: guitarra[0].id,
      image: image.data.attributes.url,
      name,
      price,
      cantidad,
    };

    //Pasando la informacion al Context
    agregarCarrito(guitarraSelecionada);
  };

  return (
    <Layout title={`Guitarra ${name}`}>
      <div className={styles.guitarra}>
        <Image
          src={image.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen Guitarra ${name}`}
          priority
        />

        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>{price}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="canidad">Cantidad:</label>

            <select
              onChange={(e) => setCantidad(+e.target.value)}
              id="cantidad"
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            {formError && <FormError>Cantidad no válida</FormError>}

            <input
              type="submit"
              value="Agregar al carrito"
              className={styles.form_input}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}

//Routing Dinamico, getStaticPaths
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await respuesta.json();

  const paths = data?.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  //console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

//Routing dinamico getStaticProps
export async function getStaticProps({ params: { url } }) {
  //console.log(url);

  const respuesta = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitarra } = await respuesta.json();

  //console.log(guitarra);

  return {
    props: { guitarra },
  };
}

//Routing Dinamico, getServerSideProps
// export async function getServerSideProps({ query: { url } }) {
//   //console.log(url);

//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitars?filters[url]=${url}&populate=imagen`
//   );
//   const { data: guitarra } = await respuesta.json();

//   //console.log(guitarra);

//   return {
//     props: { guitarra },
//   };
// }
