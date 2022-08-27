import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./index.css"

export default class Footer extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    changeAllTodo:PropTypes.func.isRequired,
    clearAllDone:PropTypes.func.isRequired,
  }

  changeAll=(event)=>{
    this.props.changeAllTodo(event.target.checked)
  }

  render() {
    const {todos}  = this.props;
    const doneCount =  todos.reduce((pre,current)=>pre+(current.done?1:0),0)
  
    return (
        <div className="footer">
        <input type="checkbox"  checked={doneCount===todos.length && todos.length}  onChange={this.changeAll}/> 已完成 {doneCount} / 全部 {todos.length}
        <button onClick={this.props.clearAllDone}>删除已完成的任务</button>
      </div>
    )
  }
}
