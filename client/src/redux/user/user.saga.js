import { takeLatest, put, all, call } from 'redux-saga/effects';

import { UserActionTypes } from './user.types';

import { signInSuccess, signInError,signUpOnSuccess,signUpOnError, signOutSuccess, signOutFailure } from './user.action';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getUserSnapshot(user,additionalData){
    const userRef = yield call(createUserProfileDocument,user,additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({
        id: userSnapshot.id, ...userSnapshot.data()
    }))
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getUserSnapshot(user);
    } catch (error) {
        yield put(signInError(error))
    }
}

export function* onGoogleInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);

}

export function* signInWithEmail({payload: {email, password}}) {
    
    try {
       const {user} = yield auth.signInWithEmailAndPassword(email,password);
       yield getUserSnapshot(user);

    } catch (error) {
        console.log(error)
        yield put(signInError(error.message));
    }
}

export function* onSignWithEmailStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getUserSnapshot(userAuth)
    } catch(error) {
        yield put(signInError(error))
    }
}
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* signUp({payload:{email, password, displayName}}) {
   try {    
       const { user } = yield auth.createUserWithEmailAndPassword(email, password)
       yield put(signUpOnSuccess({user, additionalData:{displayName}}))
      
   } catch (error) {
       yield put(signUpOnError(error))
   }
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.REGISTER_SUCCESS,signInAfterSignUp)
}

export function* signInAfterSignUp({payload:{user, additionalData}}) {
    yield getUserSnapshot(user,additionalData)
}

export function* onSignUpStart () {
    yield takeLatest(UserActionTypes.REGISTER_START,signUp)
}

export function* userSagas() {
    yield all([
      call(onGoogleInStart),
      call(onSignWithEmailStart),
      call(onCheckUserSession),
      call(onSignOutStart),
      call(onSignUpStart),
      call(onSignUpSuccess)
    ]);
  }
