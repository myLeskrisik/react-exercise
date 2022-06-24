import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  let list = {
    "Do dishes": "There are many dishes in the sink it is a mess",
    "Make bed": "A messy bed makes the room look much cleaner",
    "Play Minecraft": "Gotta keep up on the world",
    "Make dinner": "I think I will make curry for dinner",
  };
  let res = [];
  Object.entries(list).forEach(([cont, desc]) => {
    res.push(<ToDoItem content={cont} details={desc} />);
  });

  return (
    <>
      <ul>{res}</ul>
    </>
  );
};

export default ToDoList;
