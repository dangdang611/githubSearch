import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./index.css"

export default class Item extends Component {
  static propTypes = {
    change:PropTypes.func.isRequired,
    deleteT:PropTypes.func.isRequired
  }

  // 高阶函数形式
  changeItem = (id)=>{
      return (event)=>{
       this.props.change(id,event.target.checked);
      }
  }
  // 回调形式
  deleteItem = (id)=>{
    this.props.deleteT(id);
}
  render() {
    const {id,name,done} = this.props.item;
    return (
      <div className='item'> <li>
    <input
      type="checkbox"
      checked={done}
      onChange={this.changeItem(id)}
      />
      {name}
    <input
      type="text"
      className="editText"
      v-show="item.isEdit"
      ref="editText"
      style={{display:"none"}}
    />
    <div className="btn">
      <button>编辑</button>
      <button onClick={()=>{this.deleteItem(id)}}>删除</button>
    </div>
  </li></div>
    )
  }
}
