import About from './components/About/About'
import Contact from './components/contact/Contact'
import Courses from './components/Course/Courses'
import Footer from './components/footer/Footer'
import HomePage from './components/HomePage/HomePage'
import Testimonials from './components/Testimonial/Testimonials'
import './App.css'

function App() {

  return (
    <div className='overflow-hidden'>
      <HomePage/>
      <Courses/>
      <Testimonials/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
