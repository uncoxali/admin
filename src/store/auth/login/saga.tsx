import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LoginTypes } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";
import { Base64 } from "js-base64";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";

const fireBaseBackend = getFirebaseBackend();
const tokens = localStorage.getItem("authUser");

function* loginUser({ payload: { history, user } }: any) {
  let a: Promise<any> = yield call(postFakeLogin, user);
  console.log(a);
  // try {
  //   const response: Promise<any> = yield call(postFakeLogin, user);
  //   yield put({ type: LoginTypes.LOGIN_USER, payload: response });
  //   yield put(loginSuccess(response));
  //   console.log(response);
  //   localStorage.setItem("authUser", JSON.stringify(response));
  // } catch (error) {
  //   console.log(error);
  // }

  // try {
  //   if (tokens == "") {
  //     const response: Promise<any> = yield call(
  //       fireBaseBackend.loginUser,
  //       user.email,
  //       user.password
  //     );
  //     yield put(loginSuccess(response));
  //   } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
  //     const response: Promise<any> = yield call(postJwtLogin, user);
  //     localStorage.setItem("authUser", JSON.stringify(response));
  //     yield put(loginSuccess(response));
  //   } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
  //     const response: Promise<any> = yield call(postFakeLogin, user);
  //     localStorage.setItem("authUser", JSON.stringify(response));
  //     yield put(loginSuccess(response));
  //   }
  //   history.push("/Overview");
  // } catch (error) {
  //   yield put(apiError(error));
  // }
}

function* logoutUser({ payload: { history } }: any) {
  try {
    localStorage.removeItem("authUser");

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response: Promise<any> = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(response));
    }
    history.push("/adminv2/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* socialLogin({ payload: { data, history, type } }: any) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response: Promise<any> = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type
      );
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      const response: Promise<any> = yield call(postSocialLogin, data);
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history.push("/adminv2/Overview");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LoginTypes.LOGIN_USER, loginUser);
  yield takeLatest(LoginTypes.SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LoginTypes.LOGOUT_USER, logoutUser);
}

export default authSaga;
