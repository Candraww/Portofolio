import styles from './Component.module.css'
import Card from './Card.jsx'

function Project(props) {
  const projects = props.projects || []

  return (
    <section style={{backgroundColor: '#0f1419', padding: '20px', borderRadius: '8px', marginTop: '20px'}}>
      <h2 className={styles.sectionTitle} style={{marginBottom: 12}}>Project</h2>
      <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20}}>
        {projects.map((project, idx) => (
          <Card 
            key={idx}
            title={project.title} 
            desc={project.desc} 
            image={project.image} 
          />
        ))}
      </div>
    </section>
  )
}

export default Project
