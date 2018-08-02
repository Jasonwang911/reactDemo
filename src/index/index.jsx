import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from '../header'
import Nav from './../nav'
import './index.css'

@inject('appState')
@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: {
        title: '我是首页',
        showTitle: false
      }
    }
    this.changeName = this.changeName.bind(this);
    this.handleCount = this.handleCount.bind(this);
    this.handleCountObj = this.handleCountObj.bind(this);
  }

  changeName(event) {
    this.props.appState.changeName(event.target.value)
  }

  handleCount() {
    this.props.appState.add();
  }

  handleCountObj() {
    this.props.appState.addObj();
  }

  render() {
    return (
      <div>
        <Header navTitle={this.state.msg} />
        <input type="text" onChange={this.changeName} />
        <span>{this.props.appState.msg}</span>
        <div onClick={this.handleCount}>count加1</div>
        <div onClick={this.handleCountObj}>countObj对象加1</div>
        <h3>{this.props.appState.getObj}</h3>
        {/* <Nav /> */}
      </div>
    );
  }
}

export default Index;
