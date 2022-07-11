import { takeEvery, fork, put, all, call } from "redux-saga/effects"

//Account Redux states
import { RegisterTypes } from "./actionTypes"
import { registerUserSuccessful, registerUserFailed } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakeRegister,
  postJwtRegister,
} from "../../../helpers/fakebackend_helper"

// initialize relavant method of both Auth
const fireBaseBackend = getFirebaseBackend()

// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } } : any) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response: Promise<any>  = yield call(
        fireBaseBackend.registerUser,
        user.email,
        user.password
      )
      yield put(registerUserSuccessful(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response: Promise<any>  = yield call(postJwtRegister, "/post-jwt-register", user)
      yield put(registerUserSuccessful(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      const response: Promise<any>  = yield call(postFakeRegister, user)
      yield put(registerUserSuccessful(response))
    }
  } catch (error) {
    yield put(registerUserFailed(error))
  }
}

export function* watchUserRegister() {
  yield takeEvery(RegisterTypes.REGISTER_USER, registerUser)
}

function* registerSaga() {
  yield all([fork(watchUserRegister)])
}

export default registerSaga
