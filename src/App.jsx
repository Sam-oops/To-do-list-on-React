import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import edit from "./assets/edit.svg"

export default function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes') || []))
  const [openModal, setOpenModal] = useState(false)
  const [descEditNote, setDescEditNote] = useState(false)
  const [editedNote, setEditedNote] = useState(null)

  const add = (note) => {
    if (editedNote) {
      setNotes(notes.map((current) => current.id === note.id ? note : current))
    } else {
      setNotes([...notes, note])
    }
  }

  const delNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const changeNotes = (note) => {
    open()
    setDescEditNote(true)
    setEditedNote(note)
}
  
  const open = () => {
    setEditedNote(null)
    setOpenModal(true)
    setDescEditNote(false)
  };

  const close = () => setOpenModal(false)

  return (
    <>
      <Navbar />
      <Cards changeNotes={changeNotes} notes={notes} delNote={delNote} />
      <Modal editedNote={editedNote} descEditNote={descEditNote} openModal={openModal} close={close} add={add} />
      {!openModal && <button className="newModal" onClick={open}>
        <img src={edit} />
      </button>}
    </>
  )
}
