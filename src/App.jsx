import { Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Properties from './pages/Properties'
// import PropertyDetails from './pages/PropertyDetails'
import Agents from './pages/Agents'
// import AgentProfile from './pages/AgentProfile'
import Contact from './pages/Contact'
import ListProperty from './pages/ListProperty'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        {/* <HashRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/properties" element={<Properties />} />
          {/* <Route path="/properties/:id" element={<PropertyDetails />} /> */}
          <Route path="/agents" element={<Agents />} />
          {/* <Route path="/agents/:id" element={<AgentProfile />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/list-property" element={<ListProperty />} />
        </Routes>
          {/* </HashRouter> */}
      </main>

      <Footer />
    </>
  )
}

export default App