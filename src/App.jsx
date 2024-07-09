
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import Home from './Pages/Home'
import Qoutes from './Pages/Qoutes'
import Foods from './Pages/Foods'
import Restaurents from './Pages/Restaurents'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='qoutes' element={<Qoutes />} />
          <Route element={<Restaurents />} />
          <Route exact path="foods" element={<Foods />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
