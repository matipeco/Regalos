// import regalos from '../regalos.json'
import "./App.css"
import { useState, useEffect } from 'react'
import { Modal } from './components/Modal'
import { Regalo } from './components/Regalo'
import { ModalPreview } from "./components/ModalPreview"

export type Regalos = {
  id: string
  name: string
  count: number
  imagen: string
  to: string
  price: number
}

export type ModalType = "create" | "edit" | "duplicate";

type Modal = {
  show: boolean
  type: ModalType;
}

function App() {

  const [regalos, setRegalos] = useState<Regalos[]>(() => (
    JSON.parse(localStorage.getItem("regalos") || "[]")
  ))
  const [modal, setModal] = useState<Modal>({
    show: false,
    type: "create"
  })

  const [modalPreview, setModalPreview] = useState(false);

  const [regaloEdit, setRegaloEdit] = useState<Regalos>();

  useEffect(() => {
    localStorage.setItem("regalos", JSON.stringify(regalos));
  }, [regalos])

  const handleDelete = (regalo: string) => {
    const updateRegalos = regalos.filter((r) => r.name !== regalo);
    setRegalos(updateRegalos);
  }

  const handleClear = () => {
    setRegalos([]);
  }

  const handleCloseModal = () => {
    setRegaloEdit(undefined)
    setModal({
      show: false,
      type: "create"
    });
  }

  const openModal = (type: ModalType, regalo?: Regalos) => {

    setRegaloEdit(regalo)
    setModal({
      show: true,
      type: type
    })
  }

  const openModalPreview = () => {
    setModalPreview(true)
  }

  const TOTAL_PRICE = regalos.reduce((acc, current) => {
    return acc + current.price;
  }, 0)

  return (
    <div className="container">
      <h1 className="titulo-regalos">Regalos</h1>
      {regalos.length !== 0 && <button onClick={handleClear} className="boton-todos">Borrar todos</button>}
      <button onClick={() => openModal("create")}>Agregar Regalos</button>

      {regalos.length === 0 ? <p>No hay regalos</p> : <ul>
        {regalos.map((regalo) => {
          return (
            <Regalo
              regalo={regalo}
              handleDelete={handleDelete}
              openModal={openModal}
              key={regalo.id}
            />
          )
        })}
      </ul>}
      <p>Total: $ {TOTAL_PRICE} </p>
      {regalos.length > 0 && <button onClick={openModalPreview}>Previsualizar</button>}
      {modal.show && (
        <Modal
          handleCloseModal={handleCloseModal}
          regaloEdit={regaloEdit}
          regalos={regalos}
          setRegalos={setRegalos}
          type={modal.type}
        />
      )}
      {modalPreview && <ModalPreview regalos={regalos} setModalPreview={setModalPreview} />}

    </div>
  )
}

export default App
