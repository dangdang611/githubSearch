// 创建“外壳”组件APP
import React,{Component} from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import List from "./components/List"
import "./App.css"

export default class App extends Component{
  state = {
    todos:[{
      id:"001",
      name:"吃饭",
      done:false,
    },{
      id:"002",
      name:"睡觉",
      done:true,
    },{
      id:"003",
      name:"打豆豆",
      done:false,
    }]
  }

  addTodo=(todo)=>{
    this.setState({todos:[todo,...this.state.todos]})
  }

  changeTodo = (id,done)=>{
    const newTodos = this.state.todos.map((todo)=>{
      if(todo.id === id) return {...todo,done}
      else return todo;
    })

    this.setState({todos:newTodos})
  }

  deleteTodo = (id)=>{
    const newTodos = this.state.todos.filter((todo)=>{
      return todo.id !== id
    })

    this.setState({todos:newTodos})
  }

  changeAllTodo=(done)=>{
    const newTodos = this.state.todos.map((todo)=>{
     return {...todo,done}
    })
    this.setState({todos:newTodos})
  }

  clearAllDone=()=>{
    const newTodos = this.state.todos.filter((todo)=>{
      return !todo.done;
    })

    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state;
    return ( 
    <div className="box"> 
     <Header add={this.addTodo}/>
     <List todos={todos} change={this.changeTodo} deleteT = {this.deleteTodo}/>
     <Footer todos={todos} changeAllTodo = {this.changeAllTodo} clearAllDone = {this.clearAllDone}/>
    </div>)
  }
}

// 暴露App组件

