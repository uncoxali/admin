/**
 * interface for Calendar type
 */
 export enum CalendarTypes {
    API_SUCCESS = '@@calendar/API_SUCCESS',
    API_FAIL = '@@calendar/API_FAIL',
    GET_EVENTS = '@@calendar/GET_EVENTS',
    ADD_NEW_EVENT = '@@calendar/ADD_NEW_EVENT',
    UPDATE_EVENT = '@@calendar/UPDATE_EVENT',
    UPDATE_EVENT_SUCCESS = '@@calendar/UPDATE_EVENT_SUCCESS',
    UPDATE_EVENT_FAIL = '@@calendar/UPDATE_EVENT_FAIL',
    DELETE_EVENT = '@@calendar/DELETE_EVENT',
    DELETE_EVENT_SUCCESS = '@@calendar/DELETE_EVENT_SUCCESS',
    DELETE_EVENT_FAIL = '@@calendar/DELETE_EVENT_FAIL',
    GET_CATEGORIES = '@@calendar/GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS = '@@calendar/GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_FAIL = '@@calendar/GET_CATEGORIES_FAIL',
 }

 export interface CalendarState {
   events  : Array<any>;
   categories : Array<any>;
   error : Object;
}