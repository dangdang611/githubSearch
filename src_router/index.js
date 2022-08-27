// 引入react库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
import './index.css';
// 引入APP组件
import App from './App';
import {
    BrowserRouter
} from 'react-router-dom';


// 渲染APP到页面
ReactDOM.render( < BrowserRouter > < App / > < /BrowserRouter>,document.getElementById('root'))
