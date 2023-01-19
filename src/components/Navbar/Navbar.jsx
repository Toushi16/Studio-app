import styles from './index.module.scss';
import logo from '../../logo.svg';
import lens from '../../icons/search.svg';
import user from '../../icons/user.svg';
import cart from '../../icons/cart.svg';
import menu from '../../icons/menu.svg';
import { useState } from 'react';
import HmbrgModal from '../HmbgrModal/HmbgrModal';

const Navbar = () => {
    const [modalVisib, setModalVisib] = useState(false);

    const onHandleClick = () => {
        setModalVisib(!modalVisib)
    };

    return (
<>
        <div className={styles.Navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.nav_links_wrapper}>
                <ul className={styles.nav_links}>
                    <li>prodotti</li>
                    <li>collezioni</li>
                    <li>progetti</li>
                    <li>inspiration</li>
                    <li>designer</li>
                    <li><img src={lens} alt="search-lens" /></li>
                    <li><img src={user} alt="user" /></li>
                    <li><img src={cart} alt="cart" /></li>
                </ul>
                <div className={styles.nav_links_hmbrg}>
                    <div className={styles.icons_hmbrg}>
                        <ul>
                            <li><img src={lens} alt="search-lens" /></li>
                            <li><img src={user} alt="user" /></li>
                            <li><img src={cart} alt="cart" /></li>
                        </ul>
                    </div>
                    <div onClick={onHandleClick} className={styles.menu_hmbrg}>
                        <img src={menu} alt="menu" />
                    </div>
                </div>
            </div>
        </div>
        {
            modalVisib && <HmbrgModal setModalVisib={setModalVisib} />
        }
</>
    )
}

export default Navbar;