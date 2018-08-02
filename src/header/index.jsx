import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {
        nav: '',
        list: [
          {name: 'xiaokui', age: 89},
          {name: 'xiaoming', age: 19}
        ]
      }
      // this.handleState = this.handleState.bind(this);
  }

  handleState() {
    this.setState({
      nav: '我是一条导航'
    })
  }

  render() {
    return (
      <div>
        我是头部，我的标题名称是 <h1 onClick={this.handleState.bind(this)}>{this.props.navTitle.title}</h1>
        <p>{this.state.nav}</p>
        <ul>
        {
          this.state.list.map( (item, index) => (
              item.age > 20 ? null : <li key={index}>{item.name}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}

export default Header;
