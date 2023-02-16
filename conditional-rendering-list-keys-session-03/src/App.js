import React, {useState} from 'react'
import Header from './components/Header/Header';
import InputGroup from './components/InputGroup/InputGroup';

const App = () => {
    const [todoItem, setTodoItem] = useState()

    const handleInputChange = (event)=>{
        setTodoItem(event.target.value);
    }

    const onTodoItemAddition = ()=>{}

  return (
    <div>
        <Header
        headerText="Todo App"
        subHeaderText="You can even delete the todo item"
        />
        <InputGroup 
        label="Type Your TODO Item"
        type="text"
        value={todoItem}
        onChange={handleInputChange}
        onTodoItemAddition=""
        btnLabel="+ Add Item"
        />
    </div>
  );
}

export default App