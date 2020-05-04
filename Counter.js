import React from "react";
import {connect} from "react-redux";
import {add} from "./redux"

function Counter({count,add}){
  return (
    <div>
    <p>counter - {count}</p>
    <button onClick={add}>increment</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add : () => dispatch(add())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);