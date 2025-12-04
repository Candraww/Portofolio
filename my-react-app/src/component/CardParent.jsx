import styles from './Component.module.css'
import githubpic from "../assets/github.png"
import Card from "./Card.jsx"
import profilepic from "../assets/profile.png"
import { Link } from 'react-router-dom'

function CardParent(props) {
    return (
        <div className={styles.homeCard}>
            <div className={styles.leftSide}>
                <div className={styles.leftCard}>
                    <div className={styles.ptxt}>
                        <h2 className={styles.cardTitle}>{props.ptitle}</h2>
                        <p className={styles.cardText}>{props.pdesc}</p> 
                    </div>
                                
                    <div className={styles.photoOverlay}>
                        <img className={styles.pcardImage} src={props.pimage} alt={props.ptitle} />
                    </div>
                     <Link to="/about">
                    <button className={styles.cardButton} >About Me</button>
                    </Link>
                </div>

            </div>
                
            <div className={styles.rightSide}>
                
                <div className={styles.rightCard}>
                    
                    <div className={styles.firstRcard}>
                         <a
                        href="https://www.linkedin.com/in/candra-wijaya-c2005/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.noStyleLink}
                        >
                        <img className={styles.rcardImage} src={props.limage} alt={props.ltitle} />
                                
                        <div className={styles.rtxt}>
                            <h2 className={styles.rcardTitle}>{props.ltitle}</h2>
                            <p className={styles.rcardText}>{props.ldesc}</p> 
                        </div>
                        </a>    
                    </div>

                    <div className={styles.secondRcard} >
                       <a
                        href="https://www.linkedin.com/in/candra-wijaya-c2005/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.noStyleLink}
                        >
                        <img className={styles.rcardImage} src={props.rimage} alt={props.rtitle} />
                                
                        <div className={styles.rtxt}>
                            <h2 className={styles.rcardTitle}>{props.rtitle}</h2>
                            <p className={styles.rcardText}>{props.rdesc}</p> 
                        </div>    
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}   
export default CardParent