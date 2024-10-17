import {} from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default App