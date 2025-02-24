import LinkItem from "./LinkItem/LinkItem.jsx";
import styles from "./SideBar.module.css";
const SideBar = () => {
    return (
        <div className={styles.container}>
            SideBar componentes
            <LinkItem LinkData={{ type: 'LinkChat', chats: 2 }} chats={3} />
            <LinkItem LinkData={{ type: 'Link', isActive: true, svg: 'Inicio', link: "google.com" }} />
            <LinkItem LinkData={{ type: 'Link', isActive: false, svg: 'Lib', link: "google.com" }} />
            <LinkItem LinkData={{ type: 'Title', text:"Chats"}} />
            <LinkItem LinkData={{ type: 'Chat', id:"6ss2xsyj"}} />
            <LinkItem LinkData={{ type: 'Chat', id:"0is2lqym"}} />
        </div>
    );
}
export default SideBar;