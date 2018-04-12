import {put} from 'redux-saga/dist/redux-saga';
import TextReduxActions from '../redux/TextRedux'
export function* updateNum(num){
   yield put(TextReduxActions.updateNum(num))
}
export function* updateAsyncNum(num){
  yield put(TextReduxActions.updateAsyncNum(num))
}
