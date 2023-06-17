import { ChangeEvent, PropsWithChildren, useState, Dispatch } from "react";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../App";

type UserInputProps = {
  items: Item[];
  setItems: Dispatch<React.SetStateAction<Item[]>>;
};

export default function UserInput({
  items,
  setItems,
}: UserInputProps){
  const [userInput, setUserInput] = useState("");

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const buttonClicked = () => {
    if (userInput !== "") {
      const uid = uuidv4();

      let item = { id: uid, name: userInput, done: false };
      setItems([item, ...items]);
      setUserInput("");
    }
  };

  console.log(items,"items")
  return (
      <form
        className="mt-20 mb-44 text-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="toDoItem">Add toDo:</label>

        <input
          className="border border-black rounded"
          onChange={inputChange}
          value={userInput}
          type="text"
          id="toDoItem"
          aria-label="user-input"
          name="toDoItem"
        />
        <button
          className="bg-yellow-500 px-2 rounded ml-2"
          onClick={buttonClicked}
        >
          Add
        </button>
      </form>
  );
}
