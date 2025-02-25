import Chat from "../Chat/Chat";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}><SideBar /></div>
            <div className={styles.chat}><Chat idchat={'S'}/></div>
        </div>
    );
};

export default Layout;