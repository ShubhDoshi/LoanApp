//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import "firebase/firestore";
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);
export default firebase;