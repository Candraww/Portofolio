import styles from './Component.module.css'
import { Link } from 'react-router-dom'

function Header(){

    return(
        <header className={styles.Header}>
            <h1>Candra Wijaya</h1>
            <nav>
                <ul className={styles.menu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="#">Contact</a></li>
                    <li><Link to="/" className={styles.cvBtn}>Download CV</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header