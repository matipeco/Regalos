import { FormEvent, Dispatch, SetStateAction, FunctionComponent } from "react";
import { Regalos } from '../../App'
import { StyledModal } from './styles'

type Props = {
    regalos: Regalos[]
    setRegalos: Dispatch<SetStateAction<Regalos[]>>
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const Modal: FunctionComponent<Props> = ({ regalos, setRegalos, setShowModal }) => {
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        // 3 MANERAS DE OBTENER LOS DATOS DE MIS INPUTS
        // crear el estado y toda la bola
        // console.log("elements:" + ev.currentTarget.elements.item(0))
        // console.log(Object.fromEntries(dataForm.entries()).regalo)

        const dataForm = new FormData(ev.currentTarget);
        const entries = Object.fromEntries(dataForm.entries())

        const regalo = entries.regalo.toString().trim();
        const count = Number(entries.count);
        const imagen = entries.imagen.toString();
        const to = entries.to.toString();

        if (regalo) {
            const found = regalos.find((r) => r.name === regalo);
            if (found) {

                const newFound = { ...found };
                newFound.count = newFound.count + count;

                const copyRegalos = [...regalos];

                const index = copyRegalos.findIndex((r) => r.name === newFound.name);

                copyRegalos.splice(index, 1, newFound);

                setRegalos(copyRegalos);

            } else {
                setRegalos([...regalos, { name: regalo, count, imagen, to }])

            }
            setShowModal(false);
        }
        else {

            alert("El regalo que desea agregar ya esta en la lista o el regalo es invalido")
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return <StyledModal>
        <div className="modal">
            <button className="modal__button" onClick={handleCloseModal}>x</button>
            <form className="modal__form" action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="regalo-input">Escribe tu regalo</label>
                    <input type="text" id="regalo-input" name="regalo" required />
                </div>
                <div>
                    <label htmlFor="to">Destinatario:</label>
                    <input type="text" id="to" name="to" required />
                </div>
                <div>
                    <label htmlFor="imagen">Imagen</label>
                    <input type="text" id="imagen" name="imagen" />
                </div>
                <div>
                    <label htmlFor="count">Cantidad:</label>
                    <input type="number" id="count" defaultValue={1} min={1} name="count" required />
                </div>
                <button className="modal__form-button">Agregar</button>
            </form>
        </div>
    </StyledModal>
}


