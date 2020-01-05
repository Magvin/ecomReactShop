import { takeLatest, call, put } from "redux-saga/effects";
// Redux
import ShopActionTypes from "./shop.types";
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop.actions";
// Firebase
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  // Getting collectionRef
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
    

}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
