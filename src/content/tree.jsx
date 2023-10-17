import React from 'react'
import treeImg from "../images/tree.jpg"
import TreeNode from '..content/TreeNode';

function tree() {
  const treeData = {
    label: 'Root',
    children: [
      {
        label: 'Node 1',
        children: [
          {
            label: 'leaf 1.1',
          },
          {
            label: 'leaf 1.2',
          },
        ],
      },
      {
        label: 'Node2',
        children: [
          {
            label: 'leaf 2.1',
          },
        ],
      },
    ],
  };
  const renderTree = (data) =>{
        <TreeNode label= {data.label}>
          {data.children && data.children.map((child) =>renderTree(child))}
        </TreeNode>
  }
  return (
    <div>
      <h1>DSA - Tree</h1>
      <br />
      <br />
      <span className='text-justify'>
        <h2>Overview</h2>
        <p>A tree is a non-linear abstract data type with a hierarchy-based structure.
          It consists of nodes (where the data is stored) that are connected via links.
          The tree data structure stems from a single node called a root node and has subtrees connected to the root.</p>
      </span>
      <br />
      <h2>Tree Representation</h2>
      <br />
      <div align="center">
        <img src={treeImg} alt='stack' />
      </div>
      <br />
      <h2>Tree Demo</h2>
      <div>
        {renderTree(treeData)}
      </div>
    </div>
  )
}

export default tree
