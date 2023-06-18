import { Dispatch, SetStateAction, JSX, ChangeEvent } from "react"
import {TrashIcon} from "@heroicons/react/24/solid"
import {Item} from "../App"

type ToDoItemProps = {
    item: Item,
    items: Item[],
    setItems: Dispatch<SetStateAction<Item[]>>,
    taskRender: boolean,
    setTaskRender: Dispatch<SetStateAction<boolean>>,
}


export default function ToDoItem ({item,items,setItems,taskRender,setTaskRender}: ToDoItemProps): JSX.Element{
    const itemTextClasses = "text-left break-all text-lg";
    console.log(item,"item")

  const checkBoxClicked = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      item.done = true;
      return setTaskRender(!taskRender);
    }
    item.done = false;
    return setTaskRender(!taskRender);
  };

  const deleteTask = () => {
    let newItems = [...items];
    let index = newItems.indexOf(item);
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <tr className="h-12">
      <td
        className={
          item.done ? "line-through " + itemTextClasses : itemTextClasses
        }
      >
        {item.name}
      </td>
      <td>
        <input
          className="w-4 h-4"
          type="checkbox"
          id={item.id}
          onChange={checkBoxClicked}
          checked={item.done}
        />
      </td>
      <td className="text-right mr-2">
        <button onClick={deleteTask}>
          <TrashIcon className="w-6 h-6" />
        </button>
      </td>
    </tr>
  );
}