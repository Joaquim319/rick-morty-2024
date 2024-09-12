import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Character from './pages/Character List'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/chars' element={<Character />} />
    </Routes>
    <Footer />
    </>
  )
}