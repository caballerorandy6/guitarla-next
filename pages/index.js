import Link from "next/link";
import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import Post from "../components/post";
import Curso from "../components/curso";
import styles from "../styles/grid.module.css";

export default function Home({ guitarras, posts, curso }) {
  //console.log(guitarras);
  //console.log(posts);
  //console.log(curso);

  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de Música, venta de guitarras y más"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>

        <section>
          <h1 className="heading"></h1>

          <div>
            <Curso curso={curso.attributes} />
          </div>
        </section>

        <section className="contenedor">
          <h1 className="heading">Blog</h1>

          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = await fetch(
    `http://127.0.0.1:1337/api/guitars?populate=image`
  );
  const urlPosts = await fetch(
    `http://127.0.0.1:1337/api/posts?populate=image`
  );
  const urlCourse = await fetch(
    `http://127.0.0.1:1337/api/course?populate=image`
  );

  const { data: guitarras } = await urlGuitarras.json();
  const { data: posts } = await urlPosts.json();
  const { data: curso } = await urlCourse.json();

  //console.log(guitarras);
  //console.log(posts);
  //console.log(curso);

  return {
    props: { guitarras, posts, curso },
  };
}
