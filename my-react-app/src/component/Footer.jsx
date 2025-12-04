import styles from './Component.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.contactCol}>
                    <h3 className={styles.sectionTitle}>Contact</h3>
                    <ul className={styles.contactList}>
                        <li><a href="https://www.linkedin.com/in/candra-wijaya-c2005/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/candraww" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><img src="/src/assets/react.svg" alt="react logo" className={styles.footerIcon}/> candra.wijaya002@binus.ac.id</li>
                    </ul>
                </div>
                <div className={styles.copyCol}>
                    <p className={styles.copy}>Copyright © {new Date().getFullYear()} Candra Wijaya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer