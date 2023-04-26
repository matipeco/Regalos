import { FC } from "react";
import { Regalos } from "../../App";
import { StyledRegalo } from "./styles";
import { ModalType } from "../../App";

type Props = {
  regalo: Regalos;
  handleDelete: (regalo: string) => void;
  openModal: (type: ModalType, regalo: Regalos) => void;
};

export const Regalo: FC<Props> = ({ regalo, handleDelete, openModal }) => {
  return (
    <StyledRegalo>
      {regalo.imagen && <img src={regalo.imagen} alt={regalo.name} />}
      <div className="container-text">
        <p>
          Regalo: <span>{regalo.name}</span>
        </p>
        <p>
          Precio: <span>${regalo.price}</span>
        </p>
        <p>
          Para: <span>{regalo.to}</span>
        </p>
        <p>
          Cantidad: <span>{regalo.count}</span>
        </p>
      </div>
      <div className="container-buttons">
        <button
          className="button-edit"
          onClick={() => openModal("edit", regalo)}
        >
          Editar
        </button>
        <button
          className="button-dupl"
          onClick={() => openModal("duplicate", regalo)}
        >
          Duplicar
        </button>
        <button
          className="button-delete"
          onClick={() => handleDelete(regalo.name)}
          aria-label={`Eliminar regalo: ${regalo.name}`}
        >
          Eliminar
        </button>
      </div>
    </StyledRegalo>
  );
};
