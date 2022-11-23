import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/carrito.module.css";

function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {
  const [total, setTotal] = useState(0);

  //Total a pagar
  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, guitarraActual) =>
        total + guitarraActual.cantidad * guitarraActual.price,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout title="Carrito de Compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>

            {carrito.length === 0
              ? "Carrito Vacio"
              : carrito?.map((guitarra) => (
                  <div key={guitarra.id} className={styles.producto}>
                    <div>
                      <Image
                        priority
                        width={250}
                        height={480}
                        src={guitarra.image}
                        alt={guitarra.name}
                      />
                    </div>

                    <div>
                      <p className={styles.nombre}>{guitarra.name}</p>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          onChange={(e) =>
                            actualizarCantidad({
                              id: guitarra.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={guitarra.cantidad}
                          className={styles.select}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.precio}>
                        $<span>{guitarra.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{guitarra.cantidad * guitarra.price}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => eliminarProducto(guitarra.id)}
                      type="button"
                      className={styles.eliminar}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a Pagar:$ {total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

export default Carrito;
