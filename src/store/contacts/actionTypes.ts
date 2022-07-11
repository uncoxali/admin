export enum ContactTypes {
    /** Get users */
    GET_USERS = '@@contact/GET_USERS',
    GET_USERS_SUCCESS = '@@contact/GET_USERS_SUCCESS',
    GET_USERS_FAIL = '@@contact/GET_USERS_FAIL',

    /* USERS PROFILE */
    GET_USER_PROFILE = '@@contact/GET_USER_PROFILE',
    GET_USER_PROFILE_SUCCESS = '@@contact/GET_USER_PROFILE_SUCCESS',
    GET_USER_PROFILE_FAIL = '@@contact/GET_USER_PROFILE_FAIL',

    /* add user */
    ADD_NEW_USER = '@@contact/ADD_NEW_USER',
    ADD_USER_SUCCESS = '@@contact/ADD_USER_SUCCESS',
    ADD_USER_FAIL = '@@contact/ADD_USER_FAIL',

    /* Edit user */
    UPDATE_USER = '@@contact/UPDATE_USER',
    UPDATE_USER_SUCCESS = '@@contact/UPDATE_USER_SUCCESS',
    UPDATE_USER_FAIL = '@@contact/UPDATE_USER_FAIL',

    /* Delete user */
    DELETE_USER = '@@contact/DELETE_USER',
    DELETE_USER_SUCCESS = '@@contact/DELETE_USER_SUCCESS',
    DELETE_USER_FAIL = '@@contact/DELETE_USER_FAIL',
}

export interface ContactState {
    users  : Array<any>;
    userProfile : Object;
    error : Object;
    }
