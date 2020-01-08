import { takeLatest, put, all, call } from 'redux-saga/effects';

import { UserActionTypes } from './user.types';

import { signInSuccess, signInError } from './user.action';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getUserSnapshot(user){
    const userRef = yield call(createUserProfileDocument,user);
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

export function* userSagas(){
    yield all([call(onGoogleInStart),call(onSignWithEmailStart),call(isUserAuthenticated)]);
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