import { FC } from "react"
import { Regalos } from '../../App'
import { StyledRegalo } from './styles'
import { ModalType } from '../../App'

type Props = {
    regalo: Regalos;
    handleDelete: (regalo: string) => void;
    openModal: (type: ModalType, regalo: Regalos) => void;
}

export const Regalo: FC<Props> = ({ regalo, handleDelete, openModal }) => {

    return <StyledRegalo>
        {regalo.imagen && <img src={regalo.imagen} width="30" height="30" alt="" />}
        <p>Regalo: <span>{regalo.name}</span></p>
        <p>Precio: <span>${regalo.price}</span></p>
        <p>Para: <span>{regalo.to}</span></p>
        <p>Cantidad: <span>{regalo.count}</span></p>
        <button onClick={() => openModal("edit", regalo)}>Editar</button>
        <button onClick={() => openModal("duplicate", regalo)}>Duplicar</button>
        <button onClick={() => handleDelete(regalo.name)} aria-label={`Eliminar regalo: ${regalo.name}`}>X</button>
    </StyledRegalo>
}