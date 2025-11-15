import styles from './Component.module.css'
function Header(){

    return(
        <header>
            <h1>Candra Wijaya

            </h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portofolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <button className={styles.cvBtn}>Download CV</button>
                    <hr></hr>
                </ul>
            </nav>
        </header>


    )
}

export default Header