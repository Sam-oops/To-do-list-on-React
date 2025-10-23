import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import edit from "./assets/edit.svg"
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes') || []))
  const [openModal, setopenModal] = useState(false)

  const add = (note) => {
    setNotes([...notes, note])
  }

  const delNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  
  const open = () => setopenModal(true);
  const close = () => setopenModal(false)

  return (
    <>
      <Navbar />
      <Cards editNote={editNote} notes={notes} delNote={delNote} />
      <Modal openModal={openModal} setopenModal={setopenModal} close={close} add={add} />
      {!openModal && <button className="newModal" onClick={open}>
        <img src={edit} />
      </button>}
    </>
  )
}
