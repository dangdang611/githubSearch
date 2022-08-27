import React, { Component } from 'react';
import axios from "axios"
import "./index.css"

export default class Search extends Component {
    searchUser=()=>{
        const keyword = this.searchInput.value;
        this.props.updateData({isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            (value) => {
                this.props.updateData({users:value.data.items,isLoading:false})
            },
            (reason) => {
              this.props.updateData({err:reason.message,isLoading:false})
            }
          );
    }

  render() {
    return (
        <div className='search'>
        <h2>Search Github Users</h2>
        <input
          type="text"
          placeholder="enter name you search"
          ref={c=>this.searchInput= c}
        />
        <button onClick={this.searchUser}>Search</button>
      </div>
    )
  }
}
