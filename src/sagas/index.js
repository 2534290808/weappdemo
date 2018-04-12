/**
 * 只有异步操作才会使用saga
 */
import {takeLatest} from "redux-saga/dist/redux-saga";
import {TextTypes} from '../redux/TextRedux';
import {updateNum,updateAsyncNum} from './TestSaga';

export default function* root(){
  yield [
    takeLatest(TextTypes.UPDATE_NUM,updateNum),
    takeLatest(TextTypes.UPDATE_ASYNCNUM,updateAsyncNum)
  ]
}
