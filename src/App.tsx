import React, { useState,} from 'react';
import './App.css';
import UserInput from "./Components/UserInput"


export type Item = {
  id:string,
  name:string,
  done:boolean
}

function App(): React.JSX.Element {
  const [items,setItems] = useState<Item[]>([])

  return (
    <div className="bg-gray-200 min-h-screen">
      <UserInput items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
