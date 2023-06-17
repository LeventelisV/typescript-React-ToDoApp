import {Dispatch} from "react"


type Item = {
    id:string,
    name:string,
    done:boolean
  }

  type UserInputProps = {
    items: Item[],
    // setItems: Dispatch<React.SetStateAction<Item[]>>
}