
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 为什么用类的方法来写就要用this.state呢
// 为什么只有在constructor里面可以用this.state = xxx 呢

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
      cloneCount: 0
    };
  }
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000);

    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // setTimeout(() => {
      this.setState((state) => ({
        count:state.count + 1
      }))
      this.setState((state) => ({
        count:state.count + 1
      }))
      this.setState((state) => ({
        count:state.count + 1
      }))
    // }, 1000)

    setTimeout(() => {
      this.setState((state) => ({
        cloneCount:state.cloneCount + 1
      }))
    }, 2000)

  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>count {this.state.count}, {this.state.cloneCount}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  // <Clock />,
  <input value="" />,
  document.getElementById('root')
);
// 控制着用户输入过程中表单发生的操作（受控组件）

// es6的动态属性名
// let param = 'size'
// let config = {
//   [param]: 12,
//   ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
// }

// 将共享状态提升到最近的共同的父组件中

// 父组件通过props传递方法给子组件，vue通过emmit方法发送到父组件
// 组合和vue中的插槽很相似