import React, { useState } from 'react'
import image from "../images/stack.jpg"
import '../css/demo.css';
import axios from 'axios';

function stack() {
  const [stack,setStack] = useState([]);
  const [itemToAdd, setItemToAdd] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(()=>{
    axios.post("")
      .then((response)=>{
        setApiData(response.data);
      })
      .catch((error)=>{
        console.log("Error with Api",error);
      });
  },[]);

  const pushItem = () =>{
    if(itemToAdd.trim() === ""){
        return;
    }
    setStack[stack,itemToAdd];
    setItemToAdd("");
  }

  const popItem = () =>{
    if(stack.length == 0){
      return;
    }
    const newStack = [stack];
    newStack.pop();
    setStack(newStack);
  }
  return (
    <div className='container'>
      <h1>DSA - Stack</h1>
      <br />
      <br />
      <p className='text-justify'>
        <h2>Overview</h2>
        Stack is kind of data structure which allows operations on data only at one end. It allows access to the last inserted data only. 
        Stack is also called LIFO (Last In First Out) data structure and Push and Pop operations are related in such a way that only last item pushed (added to stack) can be popped (removed from the stack)
      </p>
      <br/>
      <h2>Stack Representation</h2>
      <br/>
      <div align="center">
        <img src={image} alt='stack'/>
      </div>
      <br/>
      <h2>Stack Demo</h2>
      <br/>
      <div class="stackDemo">
        <input type="text" placeholder='Enter the item' value={itemToAdd}
        onChange={(e)=>{e.target.value}}/>
        <br/>
        <button onClick={pushItem}>Push</button>
        <br/>
        <button onClick={popItem}>Push</button>
      </div>
    </div>
  )
}

export default stack
