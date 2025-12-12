import { useEffect, useState } from "react"
import { Context } from "./context"

export const NotesContextProvider = ({ children }) => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes') || '[]'))
    const [openModal, setOpenModal] = useState(false)
    const [descEditNote, setDescEditNote] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [activeSearch, setActiveSearch] = useState(false)
    const [editedNote, setEditedNote] = useState(null)




    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const delNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const add = (note) => {
        if (editedNote) {
            setNotes(notes.map((current) => current.id === note.id ? note : current))
        } else {
            setNotes([...notes, note])
        }
    }

    const open = () => {
        setOpenModal(true)
        setDescEditNote(false)
        setEditedNote(null)
    };

    const close = () => setOpenModal(false)


    const changeNotes = (note) => {
        open()
        setDescEditNote(true)
        setEditedNote(note)
    }

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchText.toLowerCase())
    )


    return (
        <Context.Provider value={{
            notes,
            delNote,
            editedNote,
            add,
            open,
            close,
            changeNotes,
            openModal,
            descEditNote,
            searchText,
            activeSearch,
            setSearchText,
            filteredNotes
        }}>
            {children}
        </Context.Provider>
    )
}