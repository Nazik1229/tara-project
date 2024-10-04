import React from 'react'
import { Link  } from 'react-router-dom' 

export default function Header({ shouldShowPresentation }) {
  return (
    <>
      <header>
        <div className='container1'>
          <div className='header_nav'>
            <div className='header_left'>
              <span> BRAWL STARS </span>
            </div>          
            <ul className='header_right'>
                <Link to='/bio'>Биография</Link>
                <Link to='/power'>Суперсилы</Link>
                <Link to='/skins'>Скины</Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
