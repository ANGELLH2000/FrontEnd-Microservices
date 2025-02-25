import Button from "../../Button/Button";
import styles from "./ChatForm.module.css";
const ChatForm = () => {
    return (
        <div className={styles.container}>
            <textarea name="" id="" placeholder="Cuéntame algo sobre lo que te gustaría leer" rows={2}></textarea>
            <hr />
            <div className={styles.bottomForm}>
                <Button prop={{type:'link' , text:"Librería"}}/>
                <Button prop={{type:'submit' , text:"Enviar"}}/>

            </div>
        </div>
    );
}
export default ChatForm;