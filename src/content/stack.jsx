import React, { useState } from 'react'
import image from "../images/stack.jpg"
import '../css/demo.css';
import axios from 'axios';

function Stack() {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');

  const pushItem = () => {
    if (input.trim() !== '') {
      axios.post('http://localhost:8080/stack/push', { value: input })
        .then(() => {
          setStack([...stack, input]);
          setInput('');
        });
    }
  };

  const popItem = () => {
    axios.delete('http://localhost:8080/stack/pop').then(() => {
      if (stack.length === 0) {
        return;
      }
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
    });
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
        <button className='btn btn-success' onClick={pushItem}>Push</button>
        &nbsp; &nbsp;
        <button className='btn btn-danger' onClick={popItem}>Pop</button>
        <div>
          <strong>Stack:</strong>
          <table class='table table-dark'>
            <tbody>
              {stack.map((item, index) => (
                <tr class='col'>
                  <td key={index}>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Stack
