import Button from "../../Button/Button";
import styles from "./ChatPresentacion.module.css";
const ChatPresentacion = () => {
    return(
        <div className={styles.container}>
            <h1>Ciphy.io</h1>
            <p>Hola, bienvenido a Chat IA. Te ayudaré a encontrar el libro que mejor se ajuste a tus gustos. Todos están disponibles en Libreria.com.
            <br />Haz clic en Iniciar chat para iniciar con tu recomendación. 📚✨</p>
            <Button prop={{ type: 'submit', text: 'Iniciar Chat' }} /> 
        </div>
    );
}
export default ChatPresentacion;