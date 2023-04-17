import { FC } from "react"
import { Regalos } from '../../App'
import { StyledRegalo } from './styles'

type Props = {
    regalo: Regalos;
    handleDelete: (regalo: string) => void;
    handleEdit: (regalo: Regalos) => void;
}

export const Regalo: FC<Props> = ({ regalo, handleDelete, handleEdit }) => {

    return <StyledRegalo>
        {regalo.imagen && <img src={regalo.imagen} width="30" height="30" alt="" />}
        <p>Regalo: <span>{regalo.name}</span></p>
        <p>Para: <span>{regalo.to}</span></p>
        <p>Cantidad: <span>{regalo.count}</span></p>
        <button onClick={() => handleEdit(regalo)}>Editar</button>
        <button onClick={() => handleDelete(regalo.name)} aria-label={`Eliminar regalo: ${regalo.name}`}>X</button>
    </StyledRegalo>
}