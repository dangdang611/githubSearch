import React, { Component } from 'react';
import PropTypes from "prop-types"
import {nanoid} from 'nanoid';

import "./index.css"

class Header extends Component {
    static propTypes = {
        add:PropTypes.func.isRequired
    }

    saveItem =(event)=>{
      const {keyCode,target} = event;
      if(keyCode===13){
        if(target.value.trim() === ""){
            alert("输入不能为空")
            return;
        }
        let message = {
            id:nanoid(),
            name:target.value,
            done:false
        }
        this.props.add(message);
        target.value = "";
      }
    }
    
    render() {
        return (
            <div className='header'>
                <input type="text" placeholder="请输入你的任务名称，按回车确认" onKeyUp={this.saveItem}/>
            </div>
        );
    }
}

export default Header;
