import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cv from './Components/CV/Cv'
import Home from './Components/Home/Home'
import Footer from './Components/Shared/Footer/Footer' 
import Header from './Components/Shared/Header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cv' element={<Cv />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
