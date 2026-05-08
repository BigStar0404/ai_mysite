import './App.css'

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-primary" />
        <div className="hero-glow hero-glow-secondary" />

        <div className="hero-content">
          <p className="hero-kicker">Personal Portfolio</p>
          <h1 id="hero-title">AI Native Developer</h1>
          <p className="hero-subtitle">Building with AI, WSL and Cloud</p>
          <a className="hero-button" href="#projects">
            View Projects
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
