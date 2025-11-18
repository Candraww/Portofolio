import styles from './Component.module.css'
import githubpic from "../assets/github.png"
import Card from "./Card.jsx"
function CardParent(props) {
    return (
        <div className={styles.homeCard}>
            <div className={styles.leftSide}>
                <div className={styles.leftCard}>
                    <img className={styles.pcardImage} src={props.pimage} alt={props.ptitle} />
                                
                    <div className={styles.ptxt}>
                        <h2 className={styles.cardTitle}>{props.ptitle}</h2>
                        <p className={styles.cardText}>{props.pdesc}</p> 
                    </div>
                </div>

            </div>
                
            <div className={styles.rightSide}>
                <div className={styles.rightCard}>
                    <div className={styles.firstRcard}>
                        <img className={styles.rcardImage} src={props.limage} alt={props.ltitle} />
                                
                        <div className={styles.rtxt}>
                            <h2 className={styles.rcardTitle}>{props.ltitle}</h2>
                            <p className={styles.rcardText}>{props.ldesc}</p> 
                        </div>    
                    </div>

                    <div className={styles.secondRcard}>
                        <img className={styles.rcardImage} src={props.rimage} alt={props.rtitle} />
                                
                        <div className={styles.rtxt}>
                            <h2 className={styles.rcardTitle}>{props.rtitle}</h2>
                            <p className={styles.rcardText}>{props.rdesc}</p> 
                        </div>    
                    </div>
                </div>
            </div>
            
        </div>
    );
}   
export default CardParent