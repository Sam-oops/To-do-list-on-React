import { useContext, useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import edit from "./assets/edit.svg"
import { Context } from "./context/context";

export default function App() {
  const {openModal, open} = useContext(Context)

  return (
    <>
      <Navbar />
      <Cards />
      <Modal />
      {!openModal && <button className="newModal" onClick={open}>
        <img src={edit} />
      </button>}
    </>
  )
}
