/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    return (
      <div className="list">
        <ul>
          {isFirst ? (
            <h2>Welcome for use......</h2>
          ) : isLoading ? (
            <h2>Loading......Please wait a moment</h2>
          ) : err ? (
            <h2>{err}</h2>
          ) : (
            users.map((user) => {
              return (
                <li>
                  <a rel="noreferrer" href={user.html_url} target="_blank">
                    <img alt="加载中" src={user.avatar_url} />
                  </a>
                  <span>{user.login}</span>
                </li>
              );
            })
          )}
        </ul>
      </div>
    );
  }
}
