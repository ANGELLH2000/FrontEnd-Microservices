import { Link } from 'react-router';
import styles from './LinkItem.module.css';


/**
 * Componente LinkItem
 * 
 * Este componente renderiza diferentes tipos de elementos de lista basados en la propiedad `type` de `LinkData`.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.LinkData - Los datos del enlace.
 * @param {string} props.LinkData.type - El tipo de enlace. Puede ser 'LinkChat', 'Link', 'Chat' o 'Title'.
 * @param {number} [props.LinkData.chats] - El número de chats (solo para 'LinkChat').
 * @param {boolean} [props.LinkData.isActive] - Indica si el enlace está activo.
 * @param {string} [props.LinkData.svg] - El tipo de icono a mostrar (solo para 'Link').
 * @param {string} [props.LinkData.link] - La URL del enlace (solo para 'Link').
 * @param {string} [props.LinkData.text] - El texto del título (solo para 'Title').
 * @param {string} [props.LinkData.id] - El ID del chat (solo para 'Chat').
 * 
 * @example
 * // Ejemplo de uso para 'LinkChat'
 * <LinkItem LinkData={{ type: 'LinkChat', chats: 5 }} />
 * 
 * @example
 * // Ejemplo de uso para 'Link'
 * <LinkItem LinkData={{ type: 'Link', svg: 'Inicio', link: '/home', isActive: true }} />
 * 
 * @example
 * // Ejemplo de uso para 'Title'
 * <LinkItem LinkData={{ type: 'Title', text: 'Mi Título', isActive: false }} />
 * 
 * @example
 * // Ejemplo de uso para 'Chat'
 * <LinkItem LinkData={{ type: 'Chat', id: '12345', isActive: true }} />
 * 
 * @returns {JSX.Element} El elemento de lista correspondiente al tipo de enlace.
 */
const LinkItem = ({ LinkData}) => {
    //Type: LinkChat / Link / Chat / Title

    // Verifica si linkData existe antes de acceder a sus propiedades 'Link?'
    if (LinkData?.type === 'LinkChat') {
        return (
            <li className={styles.container}>
                <img src="/icons/chat.svg" alt="Icono de Link item" />
                <span>Chats</span>
                {LinkData.chats > 0 && <p className='flex-row'>{LinkData.chats}</p>}
            </li>
        )
    } else if (LinkData?.type === 'Link') {
        return (
            <li className={`${styles.container} ${LinkData.isActive === true ? styles.active : ''}`}>
                {LinkData.svg === 'Inicio' && <><img src="/icons/home.svg" alt="Icono de Home item" /><Link to={LinkData.link}>Inicio</Link></>}
                {LinkData.svg === 'Lib' && <><img src="/icons/book.svg" alt="Icono de Lib item" /><Link to={LinkData.link}>Librería</Link></>}
            </li>
        );
    } else if (LinkData?.type === 'Title') {
        return (
            <li className={`${styles.container} ${LinkData.isActive === true ? styles.active : ''}`}>
                <h3 className={styles.title}>{LinkData.text}</h3>
            </li>
        );
    }
    else if (LinkData?.type === 'Chat') {
        return (
            <li className={`${styles.container} ${LinkData.isActive === true ? styles.active : ''}`}>
                <Link to={LinkData.link}><h3 className={styles.chat}>ID: {LinkData.id}</h3></Link>
            </li>
        );
    }else{
        return (
            <h1>DEFINA LAS PROPIEDADES CORRECTAS</h1>
        );
    }

}
export default LinkItem;