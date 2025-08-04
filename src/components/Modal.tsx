import Modal from "react-modal";
import "../modules/Modal.css";
import { useEffect, useState } from "react";
import {BsBackspaceReverse} from "react-icons/bs";

Modal.setAppElement("#root");

export default function Modal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        setModalIsOpen(true);
    }, []);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="modalGames"
            className="modal"
            overlayClassName="modal-overlay"
        >
            <h1>Hallo</h1>
            <p className="output">
                Entdecke viele verschiedene Spiele und habe Spaß 😊
            </p>
            <button className="popup-close-btn" onClick={() => setModalIsOpen(false)}>
                <BsBackspaceReverse size = {20}/>
            </button>
        </Modal>
    );
}
