import styles from './index.module.scss';
import storiesImg1 from '../../img/desktop/07_stories_01.jpg';
import storiesImg2 from '../../img/desktop/08_stories_02.jpg';
import storiesImg3 from '../../img/desktop/09_stories_03.jpg';

const Stories = () => {
    return (
        <div className={styles.Stories}>
            <div className={styles.Stories_titles}>
                <h1>Stories</h1>
                <h2>scopri le stories</h2>
            </div>
            <div className={styles.Stories_cards_wrapper}>
                <div className={styles.card}>
                    <img src={storiesImg1} alt="stories-img" />
                    <h1>Iconic Animus rupestre</h1>
                    <p>Realismo poetico e design senza tempo ispirano ogni collezione.</p>                   
                </div>
                <hr />
                <div className={styles.card}>
                    <img src={storiesImg2} alt="stories-img" />
                    <h1>Lorem ipsum sit dolor amet</h1>
                    <p>Lorem ipsum sit dolor amet neque sumus eiusdem loci.</p>            
                </div>
                <hr />
                <div className={styles.card}>
                    <img src={storiesImg3} alt="stories-img" />
                    <h1>Neque esiudem loci</h1>
                    <p>Lorem ipsum sit dolor amet neque sumus eiusdem loci.</p>            
                </div>
            </div>
        </div>
    )
}

export default Stories;