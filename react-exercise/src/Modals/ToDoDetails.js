const style = {
  mainHeader: {
    fontSize: "30px",
  },
};

const ToDoDetails = ({ setOpen, details }) => {
  return (
    <>
      <button onClick={() => setOpen(false)}>Close</button>
      <h1 style={style.mainHeader}>Details</h1>
      <p>{details}</p>
    </>
  );
};

export default ToDoDetails;
