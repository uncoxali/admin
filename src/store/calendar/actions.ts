import {CalendarTypes} from "./actionTypes";

export const getEvents = () => ({
  type: CalendarTypes.GET_EVENTS,
});

export const apiSuccess = (actionType : any, data : any) => ({
  type: CalendarTypes.API_SUCCESS,
  payload: { actionType, data },
});

export const apiFail = (actionType : any, error : any) => ({
  type: CalendarTypes.API_FAIL,
  payload: { actionType, error },
});

export const addNewEvent = (event : any) => ({
  type: CalendarTypes.ADD_NEW_EVENT,
  payload: event,
});

export const updateEvent = (event : any) => ({
  type: CalendarTypes.UPDATE_EVENT,
  payload: event,
});

export const updateEventSuccess = (event : any) => ({
  type: CalendarTypes.UPDATE_EVENT_SUCCESS,
  payload: event,
});

export const updateEventFail = (error : any) => ({
  type: CalendarTypes.UPDATE_EVENT_FAIL,
  payload: error,
});

export const deleteEvent = (event : any) => ({
  type: CalendarTypes.DELETE_EVENT,
  payload: event,
});

export const deleteEventSuccess = (event : any) => ({
  type: CalendarTypes.DELETE_EVENT_SUCCESS,
  payload: event,
});

export const deleteEventFail = (error : any) => ({
  type: CalendarTypes.DELETE_EVENT_FAIL,
  payload: error,
});

export const getCategories = () => ({
  type: CalendarTypes.GET_CATEGORIES,
});

export const getCategoriesSuccess = (categories : any) => ({
  type: CalendarTypes.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesFail = (error : any) => ({
  type: CalendarTypes.GET_CATEGORIES_FAIL,
  payload: error,
});
