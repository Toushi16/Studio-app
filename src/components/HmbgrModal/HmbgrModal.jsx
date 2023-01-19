import styles from './index.module.scss';

const HmbrgModal = ({setModalVisib}) => {
    const onHandleClick = () => {
        setModalVisib(false)
    }

    return (
        <div className={styles.HmbrgModal}>
            <ul>
                <li onClick={onHandleClick}>prodotti</li>
                <li onClick={onHandleClick}>collezioni</li>
                <li onClick={onHandleClick}>progetti</li>
                <li onClick={onHandleClick}>inspiration</li>
                <li onClick={onHandleClick}>designer</li>
            </ul>
        </div>
    )
}

export default HmbrgModal;