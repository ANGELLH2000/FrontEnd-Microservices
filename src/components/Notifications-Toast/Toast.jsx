import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Toast.module.css';
import { GlobalContext } from '../../context/Context';
import useToast from '../../hooks/useToast';
const Toast = () => {
    const { newToats, consultaToast ,setConsultaToast } = useContext(GlobalContext)
    const hook = useToast();
    const toastRef = useRef(null);
    const [myToast, setmyToast] = useState();
    const [toastLoad, setToastLoad] = useState(false);

    useEffect(() => {
        const ListToast = hook.cargarToast();
        if (ListToast.length > 0 && !toastLoad) {
            setToastLoad(true)
            setmyToast(ListToast[0]);
            setTimeout(() => {
                toastRef.current.classList.add(styles.fade);
                hook.deleteToast();
                setToastLoad(false)
                setTimeout(() => {
                    setConsultaToast(prev => !prev);
                }, 2000);
            }, 3000);
        }
    }, [consultaToast]);


    return (
        <div className={styles.toast}>
            <button onClick={() => newToats('wrong', 'Este es un error')}>Rojo</button>
            <button onClick={() => newToats('info', 'Este es un info')}>Ama</button>
            <button onClick={() => newToats('check', 'Este es un check')}>Verde</button>

            {
                myToast &&
                <div ref={toastRef} className={`${styles.container} ${styles[myToast.type]} `} >
                    <img src={`/icons/${myToast.type}.svg`} alt="Ícono de la notificación" />
                    <p>{myToast.message}</p>
                </div>
            }
        </div>
    );
};
export default Toast;