import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import './index.css' 


function App() {
  const [navbar, setNavbar] = useState(true);

  function nav(value){
    setNavbar(value);
  }

  return (
    <div>
     <Header nav={nav} navbar={navbar}/>
     <Home navbar={navbar}/>
    </div>
  )
}

export default App
