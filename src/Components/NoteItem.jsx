import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

export default function NoteItem({note, view, delNote, changeNotes }) {

  const changeWidth = clsx(`card__top`, { active: view })

  const { t } = useTranslation()

  return (
    <div className="card">
      <div className={changeWidth}>
        <h5 className="card__title">{note.title}</h5>
        <p className="card__date">{note.date}</p>
      </div>
      <p className="card__text">{note.text}</p>
      <div className="card__btns">
        <button className="btn edit" onClick={() => changeNotes(note)}>{t("edit")}</button>
        <button className="btn del" onClick={() => delNote(note.id)}>{t("del")}</button>
      </div>
    </div>
  )
}