import React from 'react'

/**
 * 
 * @param props // object. Got from <li><TodoListItem label="Drink coffee"/></li>
 * here it is just restructured 
 *  
 */
const TodoListItem = ({label, important = false}) => {
  
  const style = {
    color: important ? 'tomato' : 'black'
  }

  return <span style={style}>{label}</span>
}
export default TodoListItem