
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));
// vue可以在组件上面绑定click方法

class A extends React.Component{
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      ref: React.createRef()
    }
  }
  
  handleClick() {
    console.log(">>>>>>>>>>>>>>>", this.state.ref)
  }
  render() {
    return <div onClick={this.handleClick}><FancyButton ref={this.state.ref}>ddd</FancyButton></div>
  }
}

// 你可以直接获取 DOM button 的 ref：

ReactDOM.render(
  <A></A>,
  document.getElementById('root')
);