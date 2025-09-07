import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from './components/About'
import OurTeam from "./components/OurTeam"
import Faqs from "./components/Faqs"
import Membership from './components/Membership'
import Footer from "./components/Footer"
function App(){
  return(
    <>
      <Navbar />
      <Hero />     
      <About />
      <OurTeam />
      <Faqs />
      <Membership />
      <Footer />
    </>
  )
}
export default App