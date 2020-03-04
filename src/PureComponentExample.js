import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <Title title='计数器'></Title>
        <span>
          { this.state.count }
        </span>
        <button
          onClick={this.handleClick}>
          +1
        </button>
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    // 检查是否多次打印
    console.log('Title render')
    return (
      <p>{this.props.title}</p>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'))