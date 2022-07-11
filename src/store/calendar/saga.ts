import { takeEvery, put, call, all, fork } from "redux-saga/effects"

// Calender Redux States
import {CalendarTypes} from "./actionTypes"
import {
  apiSuccess, apiFail,
  updateEventSuccess,
  updateEventFail,
  deleteEventSuccess,
  deleteEventFail,
  getCategoriesSuccess,
  getCategoriesFail,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getEvents,
  addNewEvent,
  updateEvent,
  deleteEvent,
  getCategories,
} from "../../helpers/fakebackend_helper"

function* fetchEvents() {
  try {
    const response : Promise<any> = yield call(getEvents);
    yield put(apiSuccess(CalendarTypes.GET_EVENTS, response));
  } catch (error) {
    yield put(apiFail(CalendarTypes.GET_EVENTS, error));
  }
}

function* onAddNewEvent({ payload: event } : any) {
  try {
    const response : Promise<any> = yield call(addNewEvent, event);
    yield put(apiSuccess(CalendarTypes.ADD_NEW_EVENT, {...response}))
  } catch (error) {
    yield put(apiFail(CalendarTypes.ADD_NEW_EVENT, error))
  }
}

function* onUpdateEvent({ payload: event } : any) {
  try {
    const response : Promise<any> = yield call(updateEvent, event)
    yield put(updateEventSuccess(response))
  } catch (error) {
    yield put(updateEventFail(error))
  }
}

function* onDeleteEvent({ payload: event } : any) {
  try {
    const response : Promise<any> = yield call(deleteEvent, event)
    yield put(deleteEventSuccess(response))
  } catch (error) {
    yield put(deleteEventFail(error))
  }
}

function* onGetCategories() {
  try {
    const response : Promise<any> = yield call(getCategories)
    yield put(getCategoriesSuccess(response))
  } catch (error) {
    yield put(getCategoriesFail(error))
  }
}

export function* watchFetchEvents() {
  yield takeEvery(CalendarTypes.GET_EVENTS, fetchEvents);
}

export function* watchOnAddNewEvent() {
  yield takeEvery(CalendarTypes.ADD_NEW_EVENT, onAddNewEvent);
}

export function* watchOnUpdateEvent() {
  yield takeEvery(CalendarTypes.UPDATE_EVENT, onUpdateEvent);
}
export function* watchOnDeleteEvent() {
  yield takeEvery(CalendarTypes.DELETE_EVENT, onDeleteEvent);
}
export function* watchOnGetCategories() {
  yield takeEvery(CalendarTypes.GET_CATEGORIES, onGetCategories);
}

function* calendarSaga() {
  yield all([fork(watchFetchEvents)]);
  yield all([fork(watchOnAddNewEvent)]);
  yield all([fork(watchOnUpdateEvent)]);
  yield all([fork(watchOnDeleteEvent)]);
  yield all([fork(watchOnGetCategories)]);
}

export default calendarSaga
