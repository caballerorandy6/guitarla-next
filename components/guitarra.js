import Image from "next/image";
import Link from "next/link";

function Guitarra({ guitarra }) {
  //console.log(guitarra);

  const { descrption, image, name, price, url } = guitarra;

  return (
    <div>
      <Image
        src={image.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen guitarra ${name}`}
      />

      <div>
        <h3>{name}</h3>
        <p>{descrption}</p>
        <p>{price}</p>
        <Link href={`/guitarras/${url}`}>Ver Productos</Link>
      </div>
    </div>
  );
}

export default Guitarra;
