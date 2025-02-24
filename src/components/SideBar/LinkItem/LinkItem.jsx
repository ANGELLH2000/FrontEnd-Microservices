import styles from './LinkItem.module.css';
const LinkItem = ({ LinkData, link, isActive, chats, img }) => {
    //Type: LinkChat / Link / Chat / Title

    // Verifica si linkData existe antes de acceder a sus propiedades 'Link?'
    if (LinkData?.type === 'LinkChat') {
        return (
            <li className={styles.container}>
                <img src="../src/icons/chat.svg" alt="Icono de Link item" />
                <span>Chats</span>
                {LinkData.chats > 0 && <p className='flex-row'>{LinkData.chats}</p>}
            </li>
        )
    } else if (LinkData?.type === 'Link') {
        return (
            <li className={`${styles.container} ${LinkData.isActive === true ? styles.active : ''}`}>
                {LinkData.svg === 'Inicio' && <><img src="../src/icons/home.svg" alt="Icono de Home item" /><a href={LinkData.link}>Inicio</a></>}
                {LinkData.svg === 'Lib' && <><img src="../src/icons/book.svg" alt="Icono de Lib item" /><a href={LinkData.link}>Librería</a></>}
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
                <a href=""><h3 className={styles.chat}>ID: {LinkData.id}</h3></a>
            </li>
        );
    }else{
        return (
            <h1>DEFINA LAS PROPIEDADES CORRECTAS</h1>
        );
    }

}
export default LinkItem;