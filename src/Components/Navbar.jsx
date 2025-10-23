import React from 'react'
import search from '../assets/search_icon.svg'

export default function Navbar() {
  return (
    <nav className="nav">
        <p className="lang">EN</p>
        <h2 className="nav__title">Заметки</h2>
        <button className="nav__search"><img src={search} alt="" /></button>
    </nav>
  )
}
