import { UserActionTypes } from "./user.types";
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
// Google Sign In Actions
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSingInError = error => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_ERROR,
  payload: error
});

// Email and Password actions

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const emailSignInSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInError = error => ({
  type: UserActionTypes.EMAIL_SIGN_IN_ERROR,
  payload: error
});
