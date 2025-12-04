import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header  from "./component/Header.jsx"
import Footer from "./component/Footer.jsx"
import Language from "./component/Language.jsx"
import Card from "./component/Card.jsx"
import Project from "./component/Project.jsx"
import styles from './component/Component.module.css'
import githubpic from "./assets/github.png"
import images from "./assets/image.png"
import CardParent from "./component/CardParent.jsx"
import About from './pages/About.jsx'
import profilepic from "./assets/profile.png"
import banner from "./assets/banner.jpg"
import linkedinpic from "./assets/linkedinprofile.png"
import githubpics from "./assets/githubprofile.png"

function Home(){
  return (
    <main style={{padding: '28px 16px'}}>
      <div style={{maxWidth: 1100, margin: '0 auto'}}>
        <CardParent 
          ptitle="Profile"
          pdesc="Hi I'm Candra Wijaya, Computer Science student at BINUS University "
          pimage={profilepic}
          limage={linkedinpic}
          rimage={githubpics}
          ltitle="LinkedIn" ldesc="My LinkedIn profile to connect and network."
          rtitle="Github" rdesc="My Github profile to see my projects."
        />
        <Language/>

        <Project 
          projects={[
            {title: "git", desc: "git is a distributed version control system.", image: githubpic},
            {title: "git", desc: "git is a distributed version control system.", image: images},
            {title: "git", desc: "git is a distributed version control system.", image: githubpic},
            {title: "git", desc: "git is a distributed version control system.", image: githubpic},
            {title: "git", desc: "git is a distributed version control system.", image: githubpic}
          ]}
        />

        
        
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
