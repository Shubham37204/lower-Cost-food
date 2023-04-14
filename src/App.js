import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Landing from "./components/Landing"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Navbar from "./Reuse/Navbar"
import Footer from "./Reuse/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;