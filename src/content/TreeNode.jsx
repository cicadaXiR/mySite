import React, { useState } from 'react'

function TreeNode({ label, children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div>
            <span onClick={toggleExpand}>
                {isExpanded ? '[-]' : '[+]'}
                {label}
            </span>
            {isExpanded && children}
        </div>
    )
}

export default TreeNode
