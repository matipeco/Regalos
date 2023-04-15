import { FC } from "react"
import { Regalos } from '../../App'
import { StyledRegalo } from './styles'

type Props = {
    regalo: Regalos;
    handleDelete: (regalo: string) => void;
}

export const Regalo: FC<Props> = ({ regalo, handleDelete }) => {
    return <StyledRegalo>
        {regalo.imagen && <img src={regalo.imagen} width="30" height="30" />}
        <p>Regalo: <span>{regalo.name}</span></p>
        <p>Para: <span>{regalo.to}</span></p>
        <p>Cantidad: <span>{regalo.count}</span></p>
        <button onClick={() => handleDelete(regalo.name)}>x</button>
    </StyledRegalo>
}