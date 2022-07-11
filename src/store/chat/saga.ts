import { takeEvery, put, call } from "redux-saga/effects"

// Chat Redux States
import {ChatTypes} from "./actionTypes"
import {
  getChatsSuccess,
  getChatsFail,
  getGroupsSuccess,
  getGroupsFail,
  getContactsSuccess,
  getContactsFail,
  getMessagesSuccess,
  getMessagesFail,
  addMessageSuccess,
  addMessageFail,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getChats,
  getGroups,
  getContacts,
  getMessages,
  addMessage,
} from "../../helpers/fakebackend_helper"

function* onGetChats() {
  try {
    const response : Promise<any> = yield call(getChats);
    yield put(getChatsSuccess(response))
  } catch (error) {
    yield put(getChatsFail(error))
  }
}

function* onGetGroups() {
  try {
    const response : Promise<any> = yield call(getGroups)
    yield put(getGroupsSuccess(response))
  } catch (error) {
    yield put(getGroupsFail(error))
  }
}

function* onGetContacts() {
  try {
    const response : Promise<any> = yield call(getContacts)
    yield put(getContactsSuccess(response))
  } catch (error) {
    yield put(getContactsFail(error))
  }
}

function* onGetMessages({ payload: roomId } : any) {
  try {
    const response : Promise<any> = yield call(getMessages, roomId);
    yield put(getMessagesSuccess(response))
  } catch (error) {
    yield put(getMessagesFail(error))
  }
}

function* onAddMessage({ payload: message } : any) {
  try {
    const response : Promise<any> = yield call(addMessage, message)
    yield put(addMessageSuccess(response))
  } catch (error) {
    yield put(addMessageFail(error))
  }
}

function* chatSaga() {
  yield takeEvery(ChatTypes.GET_CHATS, onGetChats)
  yield takeEvery(ChatTypes.GET_GROUPS, onGetGroups)
  yield takeEvery(ChatTypes.GET_CONTACTS, onGetContacts)
  yield takeEvery(ChatTypes.GET_MESSAGES, onGetMessages)
  yield takeEvery(ChatTypes.POST_ADD_MESSAGE, onAddMessage)
}

export default chatSaga
