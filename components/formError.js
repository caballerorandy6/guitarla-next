import style from "../styles/formError.module.css";

function FormError({ children }) {
  return <div className={style.formError}>{children}</div>;
}

export default FormError;
