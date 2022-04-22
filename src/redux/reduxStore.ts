import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { getUsersWatcher } from "./sagas";
import UsersReducer from "./usersReducer";

let rootReducer = combineReducers({
    usersState: UsersReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const sagaMiddleWare = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(getUsersWatcher);

export default store;