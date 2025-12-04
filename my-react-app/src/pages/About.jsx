import React from 'react'
import styles from './About.module.css'
import profile from '../assets/binusprofile.png'

function About(){
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <img src={profile} alt="Candra Wijaya" className={styles.avatar} />

        <div className={styles.content}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.lead}>
            Hi I'm <strong>Candra Wijaya</strong>, Computer Science student at BINUS University with strong skills in Java, C/C++, and web technologies such as HTML, CSS, 
            React.js, and Tailwind CSS. Experienced in building responsive applications using React.js and Android (Java), supported by 
            solid MySQL knowledge and UI/UX proficiency through Figma. Equipped with strong problem-solving abilities from competitive 
            programming and capable of working effectively in teams and managing time well. 
          </p>

          <h2 className={styles.subtitle}>Experience</h2>
          <p className={styles.lead}>3+ years building web and mobile apps — freelance and university projects, focusing on React, Node.js and Android.</p>

          <h2 className={styles.subtitle}>Key Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <strong>Programming Languages</strong>
              <ul className={styles.skillItems}>
                <li className={styles.skillItem}>Java</li>
                <li className={styles.skillItem}>C / C++</li>
                <li className={styles.skillItem}>Python</li>
                <li className={styles.skillItem}>JavaScript</li>
                <li className={styles.skillItem}>SQL</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <strong>Frameworks & Libraries</strong>
              <ul className={styles.skillItems}>
                <li className={styles.skillItem}>React.js</li>
                <li className={styles.skillItem}>Tailwind CSS</li>
                <li className={styles.skillItem}>Node.js</li>
                <li className={styles.skillItem}>Android SDK</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <strong>Tools & Platforms</strong>
              <ul className={styles.skillItems}>
                <li className={styles.skillItem}>Git</li>
                <li className={styles.skillItem}>GitHub</li>
                <li className={styles.skillItem}>Figma</li>
                <li className={styles.skillItem}>MySQL</li>
                <li className={styles.skillItem}>Postman</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <strong>Concepts</strong>
              <ul className={styles.skillItems}>
                <li className={styles.skillItem}>REST API Integration</li>
                <li className={styles.skillItem}>Agile (Scrum)</li>
                <li className={styles.skillItem}>Data Structures & Algorithms</li>
                <li className={styles.skillItem}>UI/UX Design</li>
              </ul>
            </div>
          </div>

          <h2 className={styles.subtitle}>Contact</h2>
          <p className={styles.contact}><a href="mailto:candra.wijaya002@binus.ac.id">candra.wijaya002@binus.ac.id</a> • <a href="https://github.com/candraww" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
      </section>
    </main>
  )
}

export default About
