import { useState } from 'react';
import './App.css';
import List from './components/List/List.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  const [todo,setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  const [isEdit, SetIsEdit] = useState(false);
  const [editId,setEditId] = useState(null);


  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!todo){
      alert("Lütfen bir todo girin");
    }
    else if(isEdit){
      setTodoList(todoList.map((item) => {
        if(item.id === editId){
          return {...item, title:todo}
        }

        return item;
      }));

      setTodo("");
      SetIsEdit(false);
      setEditId(null);

    }

    else{
      const newTodo = {id:new Date().getTime().toString(), title: todo};
      setTodoList([...todoList, newTodo]);

      setTodo("");
    }
    
  }

  const editItem = (id)=>{
    const editedItem = todoList.find((item) => item.id === id);
    SetIsEdit(true);
    setEditId(id);
    setTodo(editedItem.title);
  }

  const removeItem = (id) =>{
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  const clearAll = () =>{
    setTodoList([]);
  }

  return (
    <div className="wrapper">
      <header>Todo App</header>
      <form className="inputField" onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(event)=>setTodo(event.target.value)} placeholder="Add your new todo"/>
        <button type="submit">
          <i className={"fas " + (isEdit?"fa-edit":"fa-plus")}></i>
        </button>
      </form>
      <List todoList={todoList} removeItem={removeItem} editItem={editItem}/>
      <div className="footer">
        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
