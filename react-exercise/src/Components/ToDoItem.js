import ToDoDetails from "../Modals/ToDoDetails";
import Modal from "react-modal";
import { useState } from "react";

const style = {
  modal: {
    content: {
      margin: "auto",
      marginTop: "5%",
      width: "60%",
      height: "50%",
      backgroundColor: "#9684ba",
    },
  },
  liText: {
    fontSize: "40px",
  },
  li: {
    listStyle: "none",
    backgroundColor: "#fd9300",
    width: "25%",
    padding: "10px 25px 10px 25px",
    borderRadius: "20px",
    margin: "20px 0px 20px 0px",
  },
};

const ToDoItem = ({ content, details }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li onClick={() => setOpen(true)} style={style.li} key={details}>
        <p style={style.liText}>{content}</p>
      </li>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={style.modal}
      >
        <ToDoDetails setOpen={setOpen} details={details}></ToDoDetails>
      </Modal>
    </>
  );
};

export default ToDoItem;
