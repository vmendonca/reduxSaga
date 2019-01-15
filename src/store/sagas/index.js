import {delay} from "redux-saga";
import { takeLatest, put, call } from "redux-saga/effects";

function apiGet(){
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {
      resolve([
        { id: 1, text: "Fazer café 1"},
        { id: 2, text: "Fazer café 2"},
        { id: 3, text: "Fazer café 3"},
        { id: 4, text: "Fazer café 4"},
      ]);
    },2000)
  });
}

function* asyncAddTodo(action) {

  try {
    const response = yield call(apiGet);
    yield put({type: "SUCESS_TODO_LIST", payload: {data: response}});

  } catch (error) {
    yield put({type: "FAILURE_TODO_LIST", payload: {data: []}});
  }
}

export default function* root() {
  yield[
    takeLatest("REQUEST_TODO_LIST", asyncAddTodo)
  ]
}
