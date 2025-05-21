import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/card"
function App() {
  return (
    <>
     <Navbar/>
     <div className="cards">
      <Card title='Python' desc="this is python course" />
      <Card title='Java'desc='This is java course ' />
      <Card title='React' desc='This is react course ' />
      <Card/>
      <Card/>
     </div>
     <Footer/>
    </>
  )
}

export default App
