import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

const containerStyle = {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
  color: 'white',
  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
}

const navStyle = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem 1.25rem',
  marginTop: '2rem',
  background: 'rgba(255,255,255,0.15)',
  borderRadius: '9999px',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.25)'
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 600,
  padding: '0.5rem 0.9rem',
  borderRadius: '9999px',
}

const pageStyle = {
  marginTop: '3rem',
  background: 'rgba(255,255,255,0.15)',
  border: '1px solid rgba(255,255,255,0.25)',
  padding: '2rem',
  borderRadius: '16px',
  width: 'min(800px, 92vw)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
}

const Home = () => (
  <div style={pageStyle}>
    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Home</h2>
    <p>Welcome to the routing demo. Use the navigation above to switch pages.</p>
  </div>
)

const About = () => (
  <div style={pageStyle}>
    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>About</h2>
    <p>This site demonstrates client-side routing using React Router.</p>
  </div>
)

const Contact = () => (
  <div style={pageStyle}>
    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Contact</h2>
    <p>Reach out via yashigoyal72@gmail.com for more information.</p>
  </div>
)

export default function App() {
  return (
    <div style={containerStyle}>
      <h1 style={{ marginTop: '2rem', fontSize: '2rem', fontWeight: 800 }}>Routing Demo</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
