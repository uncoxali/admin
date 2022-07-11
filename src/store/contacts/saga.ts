import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { ContactTypes } from "./actionTypes"

import {
  getUsersSuccess,
  getUsersFail,
  getUserProfileSuccess,
  getUserProfileFail,
  addUserFail,
  addUserSuccess,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  deleteUserFail,
} from "./actions"

//Include Both Helper File with needed methods
import { getUsers, getUserProfile, addNewUser, updateUser, deleteUser } from "../../helpers/fakebackend_helper"

function* fetchUsers() {
  try {
    const response : Promise<any> = yield call(getUsers)
    yield put(getUsersSuccess(response))
  } catch (error) {
    yield put(getUsersFail(error))
  }
}

function* fetchUserProfile() {
  try {
    const response : Promise<any> = yield call(getUserProfile)
    yield put(getUserProfileSuccess(response))
  } catch (error) {
    yield put(getUserProfileFail(error))
  }
}

function* onUpdateUser({ payload: user } : any) {
  try {
    const response : Promise<any> = yield call(updateUser, user)
    yield put(updateUserSuccess(response))
  } catch (error) {
    yield put(updateUserFail(error))
  }
}

function* onDeleteUser({ payload: user } : any) {
  try {
    const response : Promise<any> = yield call(deleteUser, user)
    yield put(deleteUserSuccess(response))
  } catch (error) {
    yield put(deleteUserFail(error))
  }
}

function* onAddNewUser({ payload: user } : any) {

  try {
    const response : Promise<any> = yield call(addNewUser, user)

    yield put(addUserSuccess(response))
  } catch (error) {

    yield put(addUserFail(error))
  }
}

function* contactsSaga() {
  yield takeEvery(ContactTypes.GET_USERS, fetchUsers)
  yield takeEvery(ContactTypes.GET_USER_PROFILE, fetchUserProfile)
  yield takeEvery(ContactTypes.ADD_NEW_USER, onAddNewUser)
  yield takeEvery(ContactTypes.UPDATE_USER, onUpdateUser)
  yield takeEvery(ContactTypes.DELETE_USER, onDeleteUser)
}

export default contactsSaga;
