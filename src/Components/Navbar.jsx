import React, { useContext, useState } from 'react'
import search from '../assets/search_icon.svg'
import back from '../assets/back.svg'
import clear from '../assets/clear.svg'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Context } from '../context/context'


export default function Navbar() {

  const { searchText, setSearchText } = useContext(Context)

  const [navSearch, setNavSearch] = useState(false)

  const changeNav = clsx(`nav`, { active: navSearch })

  const { i18n, t } = useTranslation()

  const changeLang = () => {

    const newLang = i18n.language === 'ru' ? 'en' : 'ru'

    i18n.changeLanguage(newLang)

    localStorage.setItem('lang', newLang)
  }

  return (
    <>
      <nav className={changeNav}>
        <button onClick={changeLang} className="lang">{i18n.language}</button>
        <h2 className="nav__title">{t("Notes")}</h2>
        <button className="nav__search" onClick={() => setNavSearch(true)}><img src={search} alt="" /></button>
      </nav>
      <nav className={changeNav} >
        <button className="nav__left" onClick={() => setNavSearch(false)}>
          <img src={back} alt="" />
        </button>
        <input type="text" className='nav__input' autoFocus placeholder={t("search")} onChange={(e) => setSearchText(e.target.value)} value={searchText} />

        <button className="nav__btn" onClick={() => setSearchText('')}>
          <img src={clear} alt="" />
        </button>
      </nav>
    </>
  )
}
