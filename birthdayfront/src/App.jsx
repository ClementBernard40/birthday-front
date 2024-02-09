import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componants/header/Header'
import './App.css'


import './assets/font/bison.ttf'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div>
      <div>
        <ColGauche />
      </div>
      <div>
        <ColDroite />
      </div>
    </div>
    </>
  )
}

export default App
