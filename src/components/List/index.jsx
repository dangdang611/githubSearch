import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./index.css"

import Item from "../Item"
export default class List extends Component {
  static propsTypes = {
    todos:PropTypes.array.isRequired,
    change:PropTypes.func.isRequired,
    deleteT:PropTypes.func.isRequired
  }

  render() {
    const {todos,change,deleteT} = this.props;

    return (
      <div className='list'>
        <ul>
      <transition-group name="todo" appear>
        {
          todos.map((todo)=>{
            return <Item key={todo.id} item={todo} change={change} deleteT={deleteT}/>
          })
        }
      </transition-group>
    </ul>
    </div>
    )
  }
}
