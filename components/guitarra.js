import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

function Guitarra({ guitarra }) {
  console.log(guitarra);

  const { description, image, name, price, url } = guitarra;

  return (
    <div className={styles.guitarra}>
      <Image
        src={image?.data?.attributes?.formats?.small?.url}
        width={600}
        height={400}
        alt={`Imagen guitarra ${name}`}
        priority
      />

      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>{price}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>
          Ver Productos
        </Link>
      </div>
    </div>
  );
}

export default Guitarra;
