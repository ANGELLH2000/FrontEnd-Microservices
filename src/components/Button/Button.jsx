import styles from "./Button.module.css";
const Button = ({prop}) => {
    if(prop?.type === 'submit'){
        return <button className={`${styles.btn} ${styles.submit} flex-row`} type="submit"><img src="../src/icons/send.svg" alt="Logo de enviar" />{prop.text}</button>
    }else if(prop?.type === 'link'){
        return <button className={`${styles.btn} ${styles.link} flex-row`} type="submit"><img src="../src/icons/book.svg" alt="Logo de libro" />{prop.text}</button>
    }else{
        return <h1>Falta Configurar</h1>
    }
}
export default Button;