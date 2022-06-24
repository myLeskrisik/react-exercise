import ToDoList from "./Components/ToDoList";

const style = {
  html: {
    backgroundColor: "#573d9d",
    height: "1000px",
    margin: "0",
  },
};

function App() {
  return (
    <>
      <html style={style.html}>
        <head>
          <meta charSet="UTF-8" />
        </head>
        <body>
          <ToDoList />
        </body>
      </html>
    </>
  );
}

export default App;
