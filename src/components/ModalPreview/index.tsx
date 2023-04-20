import { Dispatch, FunctionComponent, useEffect, useRef } from "react";
import { Regalos } from "../../App";
import { StyleModalPreview } from "./styles"

type Props = {
    regalos: Regalos[];
    setModalPreview: Dispatch<React.SetStateAction<boolean>>;
}

export const ModalPreview: FunctionComponent<Props> = ({ regalos, setModalPreview }) => {
    const ref = useRef(null);

    const closeModalEscape = (ev: KeyboardEvent) => {
        if (ev.key === "Escape") setModalPreview(false);
    }
    const closeModalClick = (ev: MouseEvent) => {
        if (ev.target === ref.current) setModalPreview(false);
    }

    useEffect(() => {
        window.addEventListener("keydown", closeModalEscape)
        window.addEventListener("click", closeModalClick)
        return () => {
            window.removeEventListener("keydown", closeModalEscape)
            window.removeEventListener("click", closeModalClick)
        }
    }, [])

    return (
        <StyleModalPreview ref={ref}>
            <div className="modal">
                <button className="modal__button" onClick={() => setModalPreview(false)}>X</button>
                <ul>
                    {regalos.map((regalo) => {
                        return (
                            <li key={regalo.id}>
                                <img src={regalo.imagen} alt={regalo.name} />
                                <p>{regalo.name}</p>
                                <p>{regalo.count}</p>
                                <p>{regalo.to}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </StyleModalPreview>
    )
}
