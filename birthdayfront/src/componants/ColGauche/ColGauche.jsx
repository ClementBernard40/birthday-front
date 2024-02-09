import React from 'react'
import './ColGauche.scss'

import rond from '../../assets/rond.png'

function ColGauche() {
  return (
    <div class="bodyG">
        <div class='divImg'>
            <img class="img" src={rond} alt="hb qui tourne" />  
        </div>
        <div class="txtNom">
            NOM PRENOM
        </div>
        
    </div>
  )
}

export default ColGauche
