import styles from "./MessageItem.module.css";
/**
 * Componente MessageItem
 * 
 * Este componente renderiza un mensaje en función del autor del mismo. 
 * Dependiendo de si el autor es el sistema o un usuario, se muestra un diseño diferente.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.prop - El objeto que contiene la información del mensaje.
 * @param {string} props.prop.autor - El autor del mensaje, puede ser 'system' o 'user'.
 * @param {string} props.prop.date - La fecha del mensaje.
 * @param {string} props.prop.text - El contenido del mensaje.
 * @param {string} [props.prop.name] - El nombre del usuario, solo se usa si el autor es 'user'.
 * 
 * @example
 * // Mensaje del sistema
 * <MessageItem prop={{ autor: 'system', date: '2023-10-01', text: 'Mensaje del sistema' }} />
 * 
 * @example
 * // Mensaje de un usuario
 * <MessageItem prop={{ autor: 'user', date: '2023-10-01', text: 'Mensaje del usuario', name: 'Juan' }} />
 * 
 * @returns {JSX.Element} Un elemento JSX que representa el mensaje.
 */
const MessageItem = ({ prop }) => {
    if (prop?.autor === 'system') {
        return (
            <div className={`${styles.container} ${styles.system}`}>
                <img src="../src/icons/logo.svg" alt="Logo del Sistema" />
                <div className={styles.content}>
                    <div>
                        <span className={styles.name}>Ciphy.io</span>
                        <span>{prop.date}</span>
                    </div> 
                    <p>{prop.text}</p> 
                </div>
            </div>
        );
    } else if (prop?.autor === 'user') {
        return (
            <div className={`${styles.container} ${styles.user}`}>
                <img src="../src/icons/avatar.svg" alt="Logo de avatar" />
                <div className={styles.content}>
                    <div>
                        <span className={styles.name}>{prop.name}</span>
                        <span>{prop.date}</span>
                    </div> 
                    <p>{prop.text}</p>
                </div>
            </div>
        );
    } else {
        return (
            <h1>Falto Configurar</h1>
        );
    }
}
export default MessageItem;