import { useState } from 'react'
import teamLogo from './assets/TB_logo.png'
import siteLogo from './assets/Logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://mannixmuir.netlify.app" target="_blank">
          <img src={siteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://thebenchwarmerss.github.io/Benchwarmers_Website/" target="_blank">
          <img src={teamLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Mannix + The Benchwarmers</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  )
}

export default App
