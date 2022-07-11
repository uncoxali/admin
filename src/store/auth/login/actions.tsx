import { LoginTypes } from "./actionTypes";

export const loginUser = (history: any, user: any) => {
  return {
    type: LoginTypes.LOGIN_USER,
    payload: { user, history },
  };
};

export const loginSuccess = (user: any) => {
  return {
    type: LoginTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const logoutUser = (history: any) => {
  return {
    type: LoginTypes.LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = (response: any) => {
  return {
    type: LoginTypes.LOGOUT_USER_SUCCESS,
    payload: response,
  };
};

export const apiError = (error: any) => {
  return {
    type: LoginTypes.API_ERROR,
    payload: error,
  };
};

export const socialLogin = (data: any, history: any, type: any) => {
  return {
    type: LoginTypes.SOCIAL_LOGIN,
    payload: { data, history, type },
  };
};
