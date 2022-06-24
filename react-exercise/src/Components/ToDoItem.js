import ToDoDetails from "../Modals/ToDoDetails";
import Modal from "react-modal";
import { useState } from "react";

const ToDoItem = ({ content, details }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li
        onClick={() => {
          setOpen(false);
        }}
        key={details}
      >
        {content}
      </li>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        <button onClick={() => setOpen(false)}>
          <p>{details}</p>
        </button>
      </Modal>
    </>
  );
};

export default ToDoItem;
