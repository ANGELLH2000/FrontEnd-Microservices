import styles from "./Button.module.css";
/**
 * Componente Button que renderiza un botón basado en el tipo de propiedad proporcionada.
 *
 * @param {Object} prop - Objeto de propiedades para el botón.
 * @param {string} prop.type - Tipo de botón, puede ser 'submit' o 'link'.
 * @param {string} prop.text - Texto que se mostrará dentro del botón.
 *
 * @returns {JSX.Element} - Un botón configurado según el tipo proporcionado o un mensaje de configuración faltante.
 *
 * @example
 * // Ejemplo de uso:
 * <Button prop={{ type: 'submit', text: 'Enviar' }} />
 * <Button prop={{ type: 'link', text: 'Leer más' }} />
 */
const Button = ({prop}) => {
    if(prop?.type === 'submit'){
        return <button className={`${styles.btn} ${styles.submit} flex-row`} type="submit"><img src="/icons/send.svg" alt="Logo de enviar" />{prop.text}</button>
    }else if(prop?.type === 'link'){
        return <button className={`${styles.btn} ${styles.link} flex-row`} type="submit"><img src="/icons/book.svg" alt="Logo de libro" />{prop.text}</button>
    }else{
        return <h1>Falta Configurar</h1>
    }
}
export default Button;