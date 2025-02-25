import styles from './SideBarTop.module.css';
const SideBarTop = () => {
    return(
        <div className={styles.container}>
            <img className={styles.logo} src="/icons/logo_top.svg" alt="Logo de la empresa" />
            <img className={styles.icon} src="/icons/menu.svg" alt="Icono de menu" />
        </div>
    );
}
export default SideBarTop;