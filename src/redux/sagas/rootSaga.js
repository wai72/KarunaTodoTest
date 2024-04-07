import {all, fork} from 'redux-saga/effects';
import sagas from './handlers';

function* rootSaga() {
  yield all(sagas.map(s => fork(s)));
}

export default rootSaga;