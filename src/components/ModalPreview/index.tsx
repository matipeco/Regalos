import { Dispatch, FunctionComponent, useEffect, useRef } from "react";
import { Regalos } from "../../App";
import { StyleModalPreview } from "./styles";

type Props = {
  regalos: Regalos[];
  setModalPreview: Dispatch<React.SetStateAction<boolean>>;
};

export const ModalPreview: FunctionComponent<Props> = ({
  regalos,
  setModalPreview,
}) => {
  const ref = useRef(null);

  const closeModalEscape = (ev: KeyboardEvent) => {
    if (ev.key === "Escape") setModalPreview(false);
  };
  const closeModalClick = (ev: MouseEvent) => {
    if (ev.target === ref.current) setModalPreview(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", closeModalEscape);
    window.addEventListener("click", closeModalClick);
    return () => {
      window.removeEventListener("keydown", closeModalEscape);
      window.removeEventListener("click", closeModalClick);
    };
  }, []);

  return (
    <StyleModalPreview ref={ref}>
      <div className="modal">
        <button
          className="modal__button"
          onClick={() => setModalPreview(false)}
        >
          X
        </button>
        <ul>
          {regalos.map((regalo) => {
            return (
              <li key={regalo.id}>
                <img src={regalo.imagen} alt={regalo.name} />
                <div className="modal__container-p">
                  <p>
                    <span className="span">Regalo: </span>
                    {regalo.name}
                  </p>
                  <p>
                    <span className="span">Para: </span>
                    {regalo.to}
                  </p>
                  <p>
                    <span className="span"> Cantidad: </span>
                    {regalo.count}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </StyleModalPreview>
  );
};
