
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import test from "./test.js"

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
    console.log(">>>>>>>>>>>>>>>cherry pick", this.state.ref)
  }
  render() {
    return <div onClick={this.handleClick}><FancyButton ref={this.state.ref}>ddd</FancyButton></div>
  }
}
// 你可以直接获取 DOM button 的 ref：

function Hooktest() {
  console.log(test)

  const [name, setName] = useState("lila");
  useEffect(() => console.log("age++++", age))
  const [age, setAge] = useState(19)
  useEffect(() => console.log("name----", name))
  // useEffect(() => console.log(age))
  return test()
}

ReactDOM.render(
  <Hooktest></Hooktest>,
  document.getElementById('root')
);