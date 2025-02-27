import { Link } from "react-router";
import LinkItem from "./LinkItem/LinkItem.jsx";
import styles from "./SideBar.module.css";
import { useRef } from "react";
const SideBar = () => {
    const SB_Button = useRef(null);
    const mostrarSB = () => {
        if (SB_Button.current) {
            if (SB_Button.current.classList.contains(styles.showSB)) {
                SB_Button.current.classList.add(styles.noshowSB);
                setTimeout(() => {
                    SB_Button.current.classList.remove(styles.showSB);
                    SB_Button.current.classList.remove(styles.noshowSB);
                }, 800);
            } else {
                SB_Button.current.classList.add(styles.showSB);
            }
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.SidebarTop}>
                <Link to={'/'}><img className={styles.logo} src="/icons/logo_top.svg" alt="Logo de la empresa" /></Link>
                <img className={styles.icon} src="/icons/menu.svg" alt="Icono de menu" onClick={mostrarSB} />
            </div>
            <div ref={SB_Button} className={styles.SidebarButton}>
                <div>
                    <LinkItem LinkData={{ type: 'LinkChat', chats: 2 }} chats={3} />
                    <LinkItem LinkData={{ type: 'Link', isActive: true, svg: 'Inicio', link: "/" }} />
                    <LinkItem LinkData={{ type: 'Link', isActive: false, svg: 'Lib', link: "google.com" }} />
                </div>
                <div>
                    <LinkItem LinkData={{ type: 'Title', text: "Chats" }} />
                    <LinkItem LinkData={{ type: 'Chat', id: "6ss2xsyj", link: "/chat/62bbbd3822" }} />
                    <LinkItem LinkData={{ type: 'Chat', id: "0is2lqym", link: "/chat/62bbbd3821" }} />
                </div>
            </div>
        </div>
    );
}
export default SideBar;