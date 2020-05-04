import {Increment} from "./ActionTypes";

const initialState = {
  count : 10,
}

const reducer = (state = initialState, action ) => {
  switch(action.type){
    case Increment : return {
      ...state,
      count : state.count + 1
    }
    default : return state
  }
}

export default reducer