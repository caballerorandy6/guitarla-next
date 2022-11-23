import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/grid.module.css";

function Blog({ posts }) {
  //console.log(posts);

  return (
    <>
      <Layout
        title={"Blog"}
        description="Blog de musica, venta de guitarras, consejos, GuitarLA"
      >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

//Consultar una API con getStaticProps ===> Generacion Estatica
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=image`);
  const { data: posts } = await respuesta.json();

  //console.log(posts);

  return {
    props: { posts },
  };
}

export default Blog;
