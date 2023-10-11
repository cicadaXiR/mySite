import React, { useState } from 'react'
import image from "../images/stack.jpg"
import '../css/demo.css';

function Stack() {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');

  const pushItem = () => {
    if (input.trim() !== '') {
      setStack([stack, input]);
      setInput('');
    }
  };

  const popItem = () => {
    if (stack.length === 0) {
      return;
    }
    const newStack = [stack];
    newStack.pop();
    setStack(newStack);
  };
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
      <br />
      <h2>Stack Representation</h2>
      <br />
      <div align="center">
        <img src={image} alt='stack' />
      </div>
      <br />
      <h2>Stack Demo</h2>
      <br />
      <div class="stackDemo">
        <input type="text" placeholder='Enter the item' value={input}
          onChange={(e) => setInput(e.target.value)} />
        &nbsp; &nbsp; &nbsp;
        <button className='btn btn-success' onClick={() => pushItem(Math.random())}>Push</button>
        &nbsp; &nbsp;
        <button className='btn btn-danger' onClick={popItem}>Pop</button>
        <div>
          <strong>Stack:</strong>
          <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Stack
