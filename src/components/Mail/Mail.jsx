import styles from './index.module.scss';

const Mail = () => {
    return (
        <div className={styles.Mail}>
            <h1>Rimani informato</h1>
            <h2>Iscriviti alla newsletter e ricevi aggiornamenti su prodotti, eventi e ispirazioni.</h2>
            <div className={styles.Mail_input}>
                <input type="text" name="e-mail" placeholder='Indirizzo e-mail' />
                <button>iscriviti</button>
            </div>
            <div className={styles.Mail_info}>
                <input type="checkbox" name="checkbox" id="" />
                <p>Acconsento al trattamento dei dati personali come da informativa</p>
            </div>
        </div>
    )
}

export default Mail;