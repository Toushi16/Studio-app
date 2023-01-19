import styles from './index.module.scss';
import news1 from '../../img/desktop/01_novita_01.jpg'
import news2 from '../../img/desktop/02_novita_02.jpg'
import news3 from '../../img/desktop/03_novita_03.jpg'

const News = () => {
    return (
        <div className={styles.News}>
            <div className={styles.container}>
                <div className={styles.News_title}>
                    <h1>Novità 2022</h1>
                    <h2>guarda tutte le novità</h2>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src={news1} alt="news-img" />
                        <h1>Lorem ipsum sit dolor</h1>
                        <h2>by Studio Design</h2>
                    </div>
                    <div className={styles.card}>
                        <img src={news2} alt="news-img" />
                        <h1>Amet neque exit</h1>
                        <h2>by Emanuel Kant</h2>
                    </div>
                    <div className={styles.card}>
                        <img src={news3} alt="news-img" />
                        <h1>Amet neque exit</h1>
                        <h2>by Emanuel Kant</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;