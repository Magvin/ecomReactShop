// Firebase settup
import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase configuration

const config = {
	apiKey: 'AIzaSyCJuejGNav3UYCYnnYSyoQGUzKbV7jjJxg',
	authDomain: 'adressbook-6ca18.firebaseapp.com',
	databaseURL: 'https://adressbook-6ca18.firebaseio.com',
	projectId: 'adressbook-6ca18',
	storageBucket: 'adressbook-6ca18.appspot.com',
	messagingSenderId: '599856476874',
	appId: '1:599856476874:web:fa59251bd8685132'
};

// Setting User fro aouth object to store in our database

/**
 *
 * @param {object} userAuth  User Object from Firebase
 * @param {object} additionalData  Any additionalData
 *
 */

export const createUserProfileDocument = async (userAuth, additionalData) => {
	//  If user does not exist return nothing
	if (!userAuth) {
		return;
	}
	// Storing userRef

	const userRef = firestore.doc(`users/${userAuth.uid}`); // uid is dynamicly created with google uniq id for this particular website
	// Getting user detail snapShot
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date(); // User creation date

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};



export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	// Creating batch to fire when everything is added
	const batch = firestore.batch();
	objectToAdd.forEach(obj => {
		// Creating new document reference for each object
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	// Fire batch call
	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	return collections.docs.map(doc=> {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});
	
}

// Init Firebase

firebase.initializeApp(config);

// Exports

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); // signIn with Google Popup

export default firebase;
 