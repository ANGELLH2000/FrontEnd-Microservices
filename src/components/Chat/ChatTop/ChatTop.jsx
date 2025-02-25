import styles from "./ChatTop.module.css";
const ChatTop = ({settings=false}) => {
    return(
        <div className={styles.container}>
            <h3>ChatTop</h3>
            <div className={`${styles.icons} flex-row ${settings===false ? styles.hidden : ''}` }>
                <img src="../src/icons/config.svg" alt="Icono de Configuración" />
                <img src="../src/icons/delete.svg" alt="Icono de Elimniar" />
            </div>
        </div>     
    );
}
export default ChatTop;