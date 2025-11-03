import { useContext, useState } from 'react'
import list from '../assets/list.svg'
import grid from '../assets/grid.svg'
import NoteItem from './NoteItem';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next'
import { Context } from '../context/context';

export default function Cards() {

    const { filteredNotes } = useContext(Context)

    const [view, setView] = useState(false);
    const { t } = useTranslation()
    const changeList = clsx(`cards__bottom`, { active: view })


    return (
        <div className="cards">
            <div className="container">
                <div className="cards__top">
                    <h3 className="cards__top-title">{t("allNotes")}</h3>
                    <button onClick={() => setView(!view)} className="cards__top-btn">
                        <img src={view ? grid : list} alt="" />
                        <p>{view ? t("grid") : t("List")}</p>
                    </button>
                </div>
                <div className={changeList}>
                    {filteredNotes.map((note) => (
                        <NoteItem
                            note={note}
                            view={view}
                            key={note.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}