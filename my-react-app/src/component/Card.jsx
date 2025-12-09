import githubpic from "../assets/github.png"
import styles from './Component.module.css'

function Card(props) {

    


    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={props.image} alt={props.title} />
            
            <div className={styles.txt}>
                <h2 className={styles.cardTitle}>{props.title}</h2>
                <p className={styles.cardText}>{props.desc}</p>
            </div>
            <div className={styles.buttonContainer}>
            <button onClick={() => window.location.href = props.link} className={styles.cardButtons}>Visit</button>
            </div>
        </div>
    );
}

export default Card;
