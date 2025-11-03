import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { t } from 'i18next'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'

export default function Modal() {

    const {editedNote, descEditNote, openModal, close, add} = useContext(Context)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const hasTitle = clsx('modal__input', { hasTitle: title.trim() })
    const hasContent = clsx('modal__input', { hasContent: text.trim() })

    const modalTitle = descEditNote ? t("editNotes") : t("addNotes")
    const modalBtn = descEditNote ? t("edit") : t("add")

    const addNote = () => {
        if (title.length >= 3 && text.length >= 3) {
            const note = {
                id: editedNote ? editedNote.id : crypto.randomUUID(),
                title,
                text,
                date: new Date().toLocaleDateString()
            }
            add(note)
            closeModal();
        }
    }

    useEffect(() => {
      if (editedNote && descEditNote) {
        setTitle(editedNote.title)
        setText(editedNote.text)
      } else {
        setTitle("")
        setText("")
      }
    }, [editedNote, descEditNote])
    

    const stop = (e) => {
        e.stopPropagation()
    }

    const closeModal = () => {
        close();
        setTitle('');
        setText('');
    }

    return (
        <>
            <AnimatePresence>
                {openModal && <div className="modal" onClick={close}>
                    <motion.div 
                    className="modal__block" 
                    onClick={stop}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    >
                        <h3 className="modal__title">{modalTitle}</h3>
                        <div className="modal__lables">
                            <label className='modal__label'>
                                <input className={hasTitle} type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                                <span className="modal__span">{t("title")}</span>
                            </label>
                            <label className='modal__label'>
                                <input className={hasContent} type="text" onChange={(e) => setText(e.target.value)} value={text} />
                                <span className="modal__span">{t("content")}</span>
                            </label>
                        </div>
                        <div className="modal__btns">
                            <button className='btn del' onClick={closeModal}>{t("cancel")}</button>
                            <button className='btn edit' onClick={addNote}>{modalBtn}</button>
                        </div>
                    </motion.div>
                </div>
                }
            </AnimatePresence>
        </>
    )
}
