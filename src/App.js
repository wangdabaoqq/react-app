import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>sss</div>
        <Wangda wa='wa'></Wangda>
      </div>
    );
  }
}

class Wangda extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ddd: ['1', '2', '3']
    }
  }
  clicks () {
    this.setState({
      ddd: [...this.state.ddd, '111']
    })
  }
  render() {
    return (
      <div>
      <div>vvv, {this.props.wa}</div>
      <button onClick={()=>this.clicks()}></button>
      <div>
        {this.state.ddd.map((e) => {
          return <li key={e}>{e}</li>
        })}
      </div>
      </div>
    );
  }
}
export default App;
