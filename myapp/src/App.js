import React, { useState , useEffect} from "react";
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from "./Todo";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
// import "./Todo.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log(input);

  // when the app loads , we need to listen to the database and fet new todos as they get added/removed

  useEffect (() => {
    // this code here .. fires when the app.js loads 
    db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})));
    })
  },[]);

  const addTodo = (event) =>{
    event.preventDefault();
    db.collection("todos").add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos,input]);
    setInput("");
  }

  return (
    <div className="App">
    
      <h1 className="title">To Do App </h1>
      <h4> - By Ankit Rikame </h4>
      <form>

        <FormControl >
          <InputLabel className="form"> Write a ToDo here... </InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button className="form1" disabled={!input} type="submit" onClick={addTodo}
         variant="contained" color="primary">
            Add ToDo
        </Button>
        
        {/* <button type="submit" onClick={addTodo}> Add ToDo </button> */}
      </form>

      <ul className="list">
        {todos.map((todo) => (
          <Todo todo = {todo}/>
          // <li> {todo} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

