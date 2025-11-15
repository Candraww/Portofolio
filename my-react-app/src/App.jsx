import Header  from "./component/Header.jsx"  
import Footer from "./component/Footer.jsx"
import Language from "./component/Language.jsx"
import Card from "./component/Card.jsx"
import githubpic from "./assets/github.png"
import images from "./assets/image.png"
function App() {
  return (
    <>
    <Header/>
    <Card title ="git" desc="git is a distributed version control system."
     image={githubpic}
    />
    <Card
    title ="git" desc="git is a distributed version control system."
     image={images}/>
    <Card title ="git" desc="git is a distributed version control system."
     image={githubpic}
    />
    <Card title ="git" desc="git is a distributed version control system."
     image={githubpic}
    />
    <Card title ="git" desc="git is a distributed version control system."
     image={githubpic}
    />
    <Language/>
    <Footer/>
    </>
  )
}

export default App
