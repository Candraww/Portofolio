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
                    <li><Link to="https://drive.google.com/file/d/1ilvY_J9Ti-q6YdiqZez-NYyy--UfKD28/view?usp=sharing" className={styles.cvBtn}>Download CV</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header