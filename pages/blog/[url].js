import Layout from "../../components/layout";
import Image from "next/image";

import { formatearFecha } from "../../utils/helpers";
import styles from "../../styles/blog.module.css";

function BlogURL({ post }) {
  //console.log(post);

  const { title, content, image, publishedAt } = post[0].attributes;

  return (
    <Layout title={title}>
      <div>
        <article className={`${styles.post} ${styles["mt-3"]}`}>
          <Image
            src={image.data.attributes.url}
            width={1000}
            height={400}
            alt={`Imagen Blog ${title}`}
          />

          <div className={styles.contenido}>
            <h3>{title}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{content}</p>
          </div>
        </article>
      </div>
    </Layout>
  );
}

//Routing Dinamico, getServerSideProps
export async function getServerSideProps({ query: { url } }) {
  console.log(url);

  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );
  const { data: post } = await respuesta.json();

  console.log(post);

  return {
    props: { post },
  };
}

export default BlogURL;
