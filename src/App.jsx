import { useEffect, useState } from 'react';
import './index.css';
import Lenis from 'lenis'
import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import ClickSpark from './components/ClickSpark'
import ScrollProgressBar from './components/ScrollProgressBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(false)

  function toggleDark() {
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '')
  }

  useEffect(() => {
    // Fast & Snappy Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Scroll Reveal Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => {
      lenis.destroy()
      observer.disconnect()
    }
  }, [])

  return (
    <ClickSpark
      sparkColor="#9c6644"
      sparkSize={14}
      sparkRadius={25}
      sparkCount={10}
      duration={400}
    >
      <ScrollProgressBar />
      <Background />
      <CustomCursor />
      <Nav dark={dark} onToggle={toggleDark} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ClickSpark>
  )
}

export default App
