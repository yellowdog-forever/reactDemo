import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const store = createStore(reducer)

// reducer 接受一个state和一个action返回一个state
function reducer(state = {count: 0}, action) {
  const count = state.count;
  switch(action.type) {
    case "add":
      return {count: count + 1};
    default:
      return state
  }
}
// 函数组件，props是通过参数传入
function countUI(props) {
  return <div>
    <h1>{props.count}</h1>
    <button onClick={props.handleIncrease}>click</button>
  </div>
}

function mapStateToProps(state) {
  return {
    count: state.count
    // 传递给props的属性: state上要传递给props的属性
  }
}

const actionType = {type: 'add'}
function mapDispatchToProps(dispatch) {
  return {
    handleIncrease: () => dispatch(actionType)
    // props方法: props方法要触发的action
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(countUI)


ReactDOM.render(
  // React-Redux 提供Provider组件，可以让容器组件拿到state
  // 原理是React组件的context属性
  /*
    nextStep: 
    1.了解provider 和 react中的context
    2.connect的原理是什么
  */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)