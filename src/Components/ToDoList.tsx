import { useState, Dispatch,SetStateAction } from "react";
import ToDoItem from "./ToDoItem";
import { Item } from "../App";


type ToDoListProps = {
    items: Item[],
    setItems: Dispatch<SetStateAction<Item[]>>
}

export default function ToDoList({
  items,
  setItems,
}: ToDoListProps): React.JSX.Element {

const[taskRender,setTaskRender] = useState(false)

  return (
    <>
      {/* <ItemStatus items={items} /> */}
      <div className="m-auto w-1/4">
        <table className=" table-auto m-auto w-full  mt-4">
          <tbody className="">
            {items.map((item) => {
              return (
                <ToDoItem
                  item={item}
                  items={items}
                  setItems={setItems}
                  key={item.id}
                  taskRender={taskRender}
                  setTaskRender={setTaskRender}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}