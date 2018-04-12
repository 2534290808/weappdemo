import {createReducer,createActions} from 'reduxsauce';
import Immutable from "seamless-immutable";
const {Types,Creators}=createActions({
  updateNum:['num'],
  updateAsyncNum:['asyncNum']
})

export const TextTypes=Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  num:0,
  asyncNum:1,
})
export const updateNum=(state,{num})=>state.merge({num});
export const updateAsyncNum=(state,{asyncNum})=>state.merge({asyncNum});

export const reducer=createReducer(INITIAL_STATE,{
  [Types.UPDATE_NUM]:updateNum,
  [Types.UPDATE_ASYNCNUM]:updateAsyncNum,
})


