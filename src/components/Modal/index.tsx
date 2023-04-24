import {
  FormEvent,
  Dispatch,
  SetStateAction,
  FunctionComponent,
  useRef,
  useEffect,
  KeyboardEvent,
  useState,
  ChangeEvent,
} from "react";
import { ModalType, Regalos } from "../../App";
import { StyledModal } from "./styles";
import { transformEntries } from "./utils";
import { v4 } from "uuid";

type Props = {
  regalos: Regalos[];
  setRegalos: Dispatch<SetStateAction<Regalos[]>>;
  regaloEdit: Regalos | undefined;
  type: ModalType;
  handleCloseModal: () => void;
};

const REGALOS_RANDOM = [
  "boxer",
  "desodorante",
  "clarinete",
  "destornillador",
  "raqueta",
];

export const Modal: FunctionComponent<Props> = ({
  regalos,
  setRegalos,
  regaloEdit,
  handleCloseModal,
  type,
}) => {
  const [inputValue, setInputValue] = useState(regaloEdit && regaloEdit.name);
  const ref = useRef<HTMLDivElement>(null);

  const closeModal = (ev: Event) => {
    const { key } = ev as unknown as KeyboardEvent<Window>;
    if (key === "Escape") {
      handleCloseModal();
    }
  };
  const closeModalClick = (ev: Event) => {
    const { target } = ev;
    if (target === ref.current) {
      handleCloseModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    window.addEventListener("click", closeModalClick);
    return () => {
      window.removeEventListener("keydown", closeModal);
      window.removeEventListener("click", closeModalClick);
    };
  }, []);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // 3 MANERAS DE OBTENER LOS DATOS DE MIS INPUTS
    // crear el estado y toda la bola
    // console.log("elements:" + ev.currentTarget.elements.item(0))
    // console.log(Object.fromEntries(dataForm.entries()).regalo)

    const dataForm = new FormData(ev.currentTarget);
    const entries = Object.fromEntries(dataForm.entries());

    const regalo = transformEntries(entries);

    if (type === "create" || type === "duplicate") {
      setRegalos([...regalos, { ...regalo, id: v4() }]);
    } else {
      //Busca el indide del elemento a reemplazar
      const index = regalos.findIndex((r) => r.id === regaloEdit!.id);
      //Nos hacemos copia por el splice
      const copiaRegalos = [...regalos];
      //reemplazamos y agregamos el id que ya tenia el regalo
      copiaRegalos.splice(index, 1, { ...regalo, id: regaloEdit!.id });
      setRegalos(copiaRegalos);
    }
    handleCloseModal();
  };

  const handleRandom = () => {
    const indexRandom = Math.ceil(Math.random() * (REGALOS_RANDOM.length - 1));
    const regaloFound = REGALOS_RANDOM[indexRandom];
    setInputValue(regaloFound);
  };
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };

  return (
    <StyledModal ref={ref}>
      <div className="modal">
        <button
          className="modal__button"
          onClick={handleCloseModal}
          aria-label="Cerrar formulario"
        >
          x
        </button>
        <button
          type="button"
          className="modal__form-buttonSorprendeme"
          onClick={handleRandom}
        >
          🎁 ¡Sorpréndeme! 🎁
        </button>
        <form className="modal__form" action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="regalo-input" className="modal__form-labels">
              Nombre del regalo
            </label>
            <input
              type="text"
              id="regalo-input"
              name="regalo"
              required
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="to" className="modal__form-labels">
              Destinatario
            </label>
            <input
              type="text"
              id="to"
              name="to"
              required
              defaultValue={regaloEdit && regaloEdit.to}
            />
          </div>
          <div>
            <label htmlFor="price" className="modal__form-labels">
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              defaultValue={regaloEdit && regaloEdit.price}
            />
          </div>
          <div>
            <label htmlFor="imagen" className="modal__form-labels">
              Imagen
            </label>
            <input
              type="text"
              id="imagen"
              name="imagen"
              defaultValue={regaloEdit && regaloEdit.imagen}
            />
          </div>
          <div>
            <label htmlFor="count" className="modal__form-labels">
              Cantidad
            </label>
            <input
              type="number"
              id="count"
              min={1}
              name="count"
              required
              defaultValue={regaloEdit ? regaloEdit.count : 1}
            />
          </div>
          <button className="modal__form-button">
            {regaloEdit ? "Guardar" : "Agregar"}
          </button>
        </form>
      </div>
    </StyledModal>
  );
};
