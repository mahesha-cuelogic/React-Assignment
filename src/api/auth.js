import firebase from 'firebase';
export const {REACT_APP_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_MEASUREMENT_ID, REACT_APP_DB_URL, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MSGING_SENDER_ID, REACT_APP_APP_ID} = process.env;

const firebaseConfig = {
     apiKey: REACT_APP_KEY,
     authDomain: REACT_APP_AUTH_DOMAIN,
     databaseURL: REACT_APP_DB_URL,
     projectId: REACT_APP_PROJECT_ID,
     storageBucket: REACT_APP_STORAGE_BUCKET,
     messagingSenderId: REACT_APP_MSGING_SENDER_ID,
     appId: REACT_APP_APP_ID,
     measurementId: REACT_APP_MEASUREMENT_ID
   };
class Auth {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
    register = async ({ email, password }) => {
        let res;
        try {
            res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
        return res;
    }
    login = async ({ email, password }) => {
        let res;
        try {
            res = await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
        return res;
    }
}

export default new Auth();