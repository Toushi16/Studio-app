import styles from './index.module.scss';
import collectionImg from '../../img/desktop/04_collezioni.jpg'
import inspirationImg from '../../img/desktop/05_inspirations.jpg'

const Collections = () => {
    return (
        <div className={styles.Collections}>
                <div className={styles.Collections_card}>
                    <h1>Collezioni</h1>
                    <h2>scopri</h2>
                    <img src={collectionImg} alt="collection-img" />
                </div>
                <div className={styles.Inspirations_card}>
                    <img src={inspirationImg} alt="collection-img" />
                    <h1>Inspirations</h1>
                    <h2>lasciati ispirare</h2>
                </div>
        </div>
    )
}

export default Collections;