/**
 *使用redux-saga创造store的函数
 */
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from "redux-saga";

export default (rootReducer,rootSaga)=>{
  //中间件数组
  const middleware = [];
  //enhancer数组
  const enhancers = [];
  //创建saga中间件
  const sagaMiddleware=createSagaMiddleware({sagaMonitor:null});
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  //使用createStore创建store
  const store=createStore(rootReducer,compose(...enhancers));
  //动态启用saga
  sagaMiddleware.run(rootSaga);
  return store;
}
