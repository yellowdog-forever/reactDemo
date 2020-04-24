// 如何使用connect的例子
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
const store = createStore(counter)

function Counter(props) {
  return (
    <div>
      <span>{props.value}</span>
      <button onClick={props.onIncreaseClick}>Increase</button>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
const increaseAction = { type: 'increase' }

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
