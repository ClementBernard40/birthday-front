import React, { useState }  from 'react'
import './Header.scss'



function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

const Header = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div>
      <div class="header">
        <div>
          CITATION ET ANNIVERSAIRE
        </div>
        <div>
          {currentDate}
        </div>
      </div>
    </div>


    
  )
}

export default Header
