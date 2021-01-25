import React ,{useState} from 'react';
import "./Todo.css";
import {List, ListItem,ListItemAvatar,ListItemText, Modal,} from '@material-ui/core';
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from "@material-ui/core/styles";

// import Button from "@material-ui/core";

// react functional component with a expo = rfce
// props => properties

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input,setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };


    const updateTodo = () => {
        db.collection("todos").doc(props.todo.id).set({
        todo: input
        },{merge :true});
        setOpen(false);
    }

    return (
        <>
        <Modal 
        open = {open}
        onClose = {e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1> I am a Modal </h1>
                <input placeholder = {props.todo.todo } value = {input} onChange = {event => setInput(event.target.value)} />
                <button onClick = {updateTodo}> Update Todo </button>
            </div>
        </Modal>
         <List>
            <ListItem className="li">
                 <ListItemAvatar>       
                </ListItemAvatar> 
                <ListItemText className="txt" primary={props.todo.todo} secondary = " Deadline Here ...." />
                
            </ListItem> 
            <button class ="btn" onClick = {e => setOpen(true)}> Edit Value </button>
            <DeleteForeverIcon className ="delete" onClick ={event => db.collection("todos").doc(props.todo.id).delete()} />
            {/* <Button onClick ={event => db.collection("todos").doc(props.todo.id).delete()}> Delete Me </Button> */}
        </List>
        </>
    )
}

export default Todo;
