import styles from "./Chat.module.css";
import ChatForm from "./ChatForm/ChatForm";
import ChatPresentacion from "./ChatPresentacion/ChatPresentacion";
import ChatTop from "./ChatTop/ChatTop";
import MessageItem from "./MessageItem/MessageItem";
const Chat = ({idchat}) => {
    if(idchat){
        return (
            <div className={styles.chat}>
                <ChatTop settings={true} />
                <div className={styles.ListMessages}>
                    <MessageItem prop={{ autor: 'system', date: '2023-10-01', text: 'Mensaje del sistema' }} />
                    <MessageItem prop={{ autor: 'user', date: '2023-10-01', text: 'Commodo esse ex dolore sunt cillum est proident veniam. Ipsum fugiat ullamco ipsum excepteur minim ad fugiat adipisicing. Deserunt nulla est culpa tempor anim id dolore proident est et. Aute deserunt voluptate consectetur ullamco exercitation. Amet irure enim ea duis commodo non Lorem aliquip cillum excepteur. Ea sit reprehenderit irure deserunt nulla mollit ea aliqua sunt labore id nulla esse do.', name: 'Juan' }} />
                    <MessageItem prop={{ autor: 'system', date: '2023-10-01', text: 'Mensaje del sistema' }} />
                    <MessageItem prop={{ autor: 'user', date: '2023-10-01', text: 'Commodo esse ex dolore sunt cillum est proident veniam. Ipsum fugiat ullamco ipsum excepteur minim ad fugiat adipisicing. Deserunt nulla est culpa tempor anim id dolore proident est et. Aute deserunt voluptate consectetur ullamco exercitation. Amet irure enim ea duis commodo non Lorem aliquip cillum excepteur. Ea sit reprehenderit irure deserunt nulla mollit ea aliqua sunt labore id nulla esse do.', name: 'Juan' }} />
                    <MessageItem prop={{ autor: 'system', date: '2023-10-01', text: 'Mensaje del sistema' }} />
                    <MessageItem prop={{ autor: 'user', date: '2023-10-01', text: 'Commodo esse ex dolore sunt cillum est proident veniam. Ipsum fugiat ullamco ipsum excepteur minim ad fugiat adipisicing. Deserunt nulla est culpa tempor anim id dolore proident est et. Aute deserunt voluptate consectetur ullamco exercitation. Amet irure enim ea duis commodo non Lorem aliquip cillum excepteur. Ea sit reprehenderit irure deserunt nulla mollit ea aliqua sunt labore id nulla esse do.', name: 'Juan' }} />
                    <MessageItem prop={{ autor: 'system', date: '2023-10-01', text: 'Mensaje del sistema' }} />
                    <MessageItem prop={{ autor: 'user', date: '2023-10-01', text: 'Commodo esse ex dolore sunt cillum est proident veniam. Ipsum fugiat ullamco ipsum excepteur minim ad fugiat adipisicing. Deserunt nulla est culpa tempor anim id dolore proident est et. Aute deserunt voluptate consectetur ullamco exercitation. Amet irure enim ea duis commodo non Lorem aliquip cillum excepteur. Ea sit reprehenderit irure deserunt nulla mollit ea aliqua sunt labore id nulla esse do.', name: 'Juan' }} />
                    <MessageItem prop={{ autor: 'system', date: '2023-10-01', text: 'Mensaje del sistema' }} />
                    <MessageItem prop={{ autor: 'user', date: '2023-10-01', text: 'Commodo esse ex dolore sunt cillum est proident veniam. Ipsum fugiat ullamco ipsum excepteur minim ad fugiat adipisicing. Deserunt nulla est culpa tempor anim id dolore proident est et. Aute deserunt voluptate consectetur ullamco exercitation. Amet irure enim ea duis commodo non Lorem aliquip cillum excepteur. Ea sit reprehenderit irure deserunt nulla mollit ea aliqua sunt labore id nulla esse do.', name: 'Juan' }} />
                    <MessageItem prop={{ autor: 'system', date: '2023-10-01', text: 'Mensaje del sistema' }} />
                    <MessageItem prop={{ autor: 'user', date: '2023-10-01', text: 'Commodo esse ex dolore sunt cillum est proident veniam. Ipsum fugiat ullamco ipsum excepteur minim ad fugiat adipisicing. Deserunt nulla est culpa tempor anim id dolore proident est et. Aute deserunt voluptate consectetur ullamco exercitation. Amet irure enim ea duis commodo non Lorem aliquip cillum excepteur. Ea sit reprehenderit irure deserunt nulla mollit ea aliqua sunt labore id nulla esse do.', name: 'Juan' }} />
                </div>
                <div className={styles.formContainer}>
                    <ChatForm loading={false}/>
                </div>
            </div>
        );
    }else{
        return (
            <div className={styles.chat}>
                <ChatTop settings={false} />
                <div className={styles.ListMessages}>
                    <ChatPresentacion />
                </div>
                
            </div>
        );
    }
};
export default Chat;