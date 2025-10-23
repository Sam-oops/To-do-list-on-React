import { useState } from 'react'
import list from '../assets/list.svg'
import grid from '../assets/grid.svg'
import NoteItem from './NoteItem';
import clsx from 'clsx';

export default function Cards({ notes, delNote, editNote }) {

    const [view, setView] = useState(false);

    const changeList = clsx(`cards__bottom`, { active: view })

    return (
        <div className="cards">
            <div className="container">
                <div className="cards__top">
                    <h3 className="cards__top-title">Все заметки</h3>
                    <button onClick={() => setView(!view)} className="cards__top-btn">
                        <img src={view ? grid : list} alt="" />
                        <p>{view ? "Сетка" : "Список"}</p>
                    </button>
                </div>
                <div className={changeList}>
                    {notes.map((note) => (
                        <NoteItem editNote={editNote} delNote={delNote} note={note} view={view} key={note.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
