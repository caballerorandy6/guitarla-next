import Image from "next/image";
import styles from "../styles/curso.module.css";

function Curso({ curso }) {
  const { description, image, title } = curso;
  return (
    <section className={`${styles.curso} curso`}>
      <style jsx>{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${image?.data?.attributes?.url});
        }
      `}</style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h1 className="heading">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default Curso;
