import React from 'react'
import clsx from 'clsx'

export default function NoteItem({note, view, delNote, editNote }) {

  const changeWidth = clsx(`card__top`, { active: view })

  return (
    <div className="card">
      <div className={changeWidth}>
        <h5 className="card__title">{note.title}</h5>
        <p className="card__date">{note.date}</p>
      </div>
      <p className="card__text">{note.text}</p>
      <div className="card__btns">
        <button className="btn edit" onClick={() => editNote(note.id)}>Редактировать</button>
        <button className="btn del" onClick={() => delNote(note.id)}>Удалить</button>
      </div>
    </div>
  )
}