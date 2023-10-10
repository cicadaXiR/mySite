import React from 'react'
import image from "../images/stack.jpg"
function stack() {
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
      
    </div>
  )
}

export default stack
