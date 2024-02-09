import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componants/header/Header'
import ColGauche from './componants/ColGauche/ColGauche'
import ColDroite from './componants/ColDroite/ColDroite'


import './App.css'


import './assets/font/bison.ttf'


function App() {

  return (
    <div>
    <Header />
    <div class= "bodyCol">
        <ColGauche />
        <ColDroite />
    </div>
    </div>
  )
}

export default App
