import { combineReducers, applyMiddleware } from "redux";

import todos from "./todoList";

const store = combineReducers({
  todos,
}
);
export default store;
