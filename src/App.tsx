// import regalos from '../regalos.json'
import "./App.css"
import { useState, useEffect } from 'react'
import { Modal } from './components/Modal'
import { Regalo } from './components/Regalo'


export type Regalos = {
  name: string
  count: number
  imagen: string
  to: string
}

function App() {

  const [regalos, setRegalos] = useState<Regalos[]>(() => (
    JSON.parse(localStorage.getItem("regalos") || "[]")
  ))
  const [showModal, setShowModal] = useState(false)

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
  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleEdit = (regalo: Regalos) => {
    const regaloEdit = regalos.find((r) => r.name === regalo.name)
    setRegaloEdit(regaloEdit)
    setShowModal(true)
  }
  // console.log(regaloEdit)
  const handleCloseModal = () => {
    setRegaloEdit(undefined)
    setShowModal(false);

  }


  return (
    <div className="container">
      <h1 className="titulo-regalos">Regalos</h1>
      {regalos.length !== 0 && <button onClick={handleClear} className="boton-todos">Borrar todos</button>}
      <button onClick={handleShowModal}>Agregar Regalos</button>

      {regalos.length === 0 ? <p>No hay regalos</p> : <ul>
        {regalos.map((regalo) => {

          return <Regalo regalo={regalo} handleDelete={handleDelete} handleEdit={handleEdit} key={regalo.name} />

        })}
      </ul>}

      {showModal && <Modal handleCloseModal={handleCloseModal} regaloEdit={regaloEdit} regalos={regalos} setRegalos={setRegalos} />}

    </div>
  )
}

export default App
