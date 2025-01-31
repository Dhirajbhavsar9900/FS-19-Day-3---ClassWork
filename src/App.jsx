
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import Home from './Pages/Home'
import Qoutes from './Pages/Qoutes'
import Foods from './Pages/Foods'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import RestaurantsHero from './Components/Restaurents/RestaurentsHero'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='qoute' element={<Qoutes />} />
          <Route exact path='restaurents' element={<RestaurantsHero />} />
          <Route exact path="foods" element={<Foods />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
