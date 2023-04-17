import { FormEvent, Dispatch, SetStateAction, FunctionComponent, useRef, useEffect, KeyboardEvent } from "react";
import { Regalos } from '../../App'
import { StyledModal } from './styles'

type Props = {
    regalos: Regalos[]
    setRegalos: Dispatch<SetStateAction<Regalos[]>>
    regaloEdit: Regalos | undefined;
    handleCloseModal: () => void;
}

export const Modal: FunctionComponent<Props> = ({ regalos, setRegalos, regaloEdit, handleCloseModal }) => {
    const ref = useRef<HTMLDivElement>(null)

    const closeModal = (ev: Event) => {
        const { key } = ev as unknown as KeyboardEvent<Window>;
        if (key === "Escape") {
            handleCloseModal()
        }
    }
    const closeModalClick = (ev: Event) => {
        const { target } = ev;
        if (target === ref.current) {
            handleCloseModal();
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", closeModal)
        window.addEventListener("click", closeModalClick)
        return () => {
            window.removeEventListener("keydown", closeModal)
            window.removeEventListener("click", closeModalClick)
        }
    }, [])


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
                newFound.count = regaloEdit ? count : newFound.count + count;
                newFound.imagen = imagen;
                newFound.name = regalo;
                newFound.to = to;

                const copyRegalos = [...regalos];

                const index = copyRegalos.findIndex((r) => r.name === newFound.name);

                copyRegalos.splice(index, 1, newFound);

                setRegalos(copyRegalos);

            } else {
                setRegalos([...regalos, { name: regalo, count, imagen, to }])
            }
            handleCloseModal();
        }
        else {

            alert("El regalo que desea agregar ya esta en la lista o el regalo es invalido")
        }
    }


    // console.log(ref.current)

    return <StyledModal ref={ref}>
        <div className="modal">
            <button className="modal__button" onClick={handleCloseModal} aria-label="Cerrar formulario">x</button>
            <form className="modal__form" action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="regalo-input">Escribe tu regalo</label>
                    <input
                        type="text"
                        id="regalo-input"
                        name="regalo"
                        required
                        defaultValue={regaloEdit && regaloEdit.name}
                    />
                </div>
                <div>
                    <label htmlFor="to">Destinatario:</label>
                    <input
                        type="text"
                        id="to"
                        name="to"
                        required
                        defaultValue={regaloEdit && regaloEdit.to}
                    />
                </div>
                <div>
                    <label htmlFor="imagen">Imagen</label>
                    <input
                        type="text"
                        id="imagen"
                        name="imagen"
                        defaultValue={regaloEdit && regaloEdit.imagen}
                    />
                </div>
                <div>
                    <label htmlFor="count">Cantidad:</label>
                    <input
                        type="number"
                        id="count"
                        min={1}
                        name="count"
                        required
                        defaultValue={regaloEdit ? regaloEdit.count : 1}
                    />
                </div>
                <button className="modal__form-button">{regaloEdit ? "Guardar" : "Agregar"}</button>
            </form>
        </div>
    </StyledModal>
}


