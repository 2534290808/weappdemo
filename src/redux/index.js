/**
 * 创建应用store
 */
import {combineReducers} from 'redux';
import configStore from './createStore';
import rootSaga from '../sagas/';
import TestRedux from './TextRedux';
export default ()=>{
  //合并reducer
  const rootReducer=combineReducers({
    test:TestRedux.reducer,
  });
  //返回创建的store
  return configStore(rootReducer,rootSaga);
}
