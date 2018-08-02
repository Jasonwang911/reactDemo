import React, {Component} from 'react';
import { NavLink as Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <h1>我是首页</h1>
                <br />
                <Link to="/list">跳转到列表页</Link>
                <br />
                <Link to="/index">跳转到详情页</Link>
            </div>
        )
    }
}