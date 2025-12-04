import styles from './Component.module.css'

function Language(){
    const skills = {
        'Programming Languages': ['Java', 'C/C++', 'Python', 'JavaScript', 'SQL'],
        'Frameworks & Libraries': ['React.js', 'Tailwind CSS', 'Node.js', 'Android SDK'],
        'Tools & Platforms': ['Git', 'GitHub', 'Figma', 'MySQL', 'Postman'],
        'Concepts': ['REST API Integration', 'Agile Methodologies (Scrum)', 'Data Structures & Algorithms', 'UI/UX Design']
    }

    return(
        <section className={styles.languageSection} aria-label="Skills">
            <h1>Skills</h1>
            <div className={styles.skillGrid}>
                {Object.entries(skills).map(([category, items]) => (
                    <div className={styles.skillCategory} key={category}>
                        <h3 className={styles.skillHeading}>{category}</h3>
                        <ul className={styles.skillItems}>
                            {items.map(i => <li key={i} className={styles.skillItem}>{i}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Language

