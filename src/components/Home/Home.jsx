import styles from './index.module.scss';
import Navbar from '../Navbar/Navbar.jsx';

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.Hero_bg}>
                <Navbar />
                <div className={styles.Hero}>
                    <h1 className={styles.Hero_title}>Lorem ipsum sit</h1>
                    <h2 className={styles.Hero_description}>Eiusdem loci, <br /> sit dolor amet neque</h2>
                    <button className={styles.Hero_btn}>
                        <span>scopri la collezione</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;