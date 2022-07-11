/**
 *  interface for Login Type
*/
export enum LoginTypes {
    LOGIN_USER = '@@login/LOGIN_USER',
    LOGIN_SUCCESS = '@@login/LOGIN_SUCCESS',
    LOGOUT_USER = '@@login/LOGOUT_USER',
    LOGOUT_USER_SUCCESS = '@@login/LOGOUT_USER_SUCCESS',
    API_ERROR = '@@login/API_ERROR',
    SOCIAL_LOGIN = '@@login/SOCIAL_LOGIN',
}
