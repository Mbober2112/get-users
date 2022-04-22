import { getUsersApi } from "../api/api";
import { getUsers, GET_USERS_API } from "./usersReducer";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUsersWorker () {
    const data = yield call(() => getUsersApi());

    yield put(getUsers(data));
}

export function* getUsersWatcher() {
    yield takeEvery(GET_USERS_API, getUsersWorker);
}