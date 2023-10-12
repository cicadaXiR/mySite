import React, { useState } from 'react'
import queueImg from '../images/queue.jpg';

function Queue() {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState('');

  const enQueue = () =>{
    if(input.trim() !== ''){
      setQueue([...queue, input]);
      setInput('');
    }
  };

  const deQueue = () =>{
    if(queue.length === 0){
      return;
    }
    const newQueue = [...queue];
    newQueue.shift();
    setQueue(newQueue);
  };

  return (
    <div>
      <h1>DSA - Queue</h1>
      <br />
      <br />
      <span className='text-justify'>
        <h2>Overview</h2>
        Queue, like Stack, is also an abstract data structure.
        The thing that makes queue different from stack is that a queue is open at both its ends.
        Hence, it follows FIFO (First-In-First-Out) structure, i.e. the data item inserted first will also be accessed first.
        The data is inserted into the queue through one end and deleted from it using the other end.
      </span>
      <br />
      <h2>Queue Representation</h2>
      <br />
      <div align="center">
        <img src={queueImg} alt='stack' />
      </div>
      <br />
      <h2>Queue Demo</h2>
      <br />
      <div className='queueDemo'>
        <input type="text" placeholder='Enter the item' value={input}
          onChange={(e) => setInput(e.target.value)} required/>
        &nbsp; &nbsp; &nbsp;
        <button className='btn btn-success' onClick={enQueue}>Enqueue</button>
        &nbsp; &nbsp;
        <button className='btn btn-danger' onClick={deQueue}>Dequeue</button>
        <div>
          <strong>Queue:</strong>
          <table className='table table-dark'>
            <tbody>
              {queue.map((item, index) => (
                <tr className='col'>
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

export default Queue;