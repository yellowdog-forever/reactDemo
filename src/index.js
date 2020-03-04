import React from 'react';
import ReactDOM from 'react-dom';

class MyPureComponent extends React.Component {
  shouldComponentUpdate(oldProps, oldStates) {
    Object.is(oldProps, this.props) && Object.is(oldStates, this.state)
    return false
  }
}

class Counter extends MyPureComponent {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({count: state.count++}))
  }
  render() {
  return (<div onClick={this.handleClick}>点我{this.count}</div>)
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'))