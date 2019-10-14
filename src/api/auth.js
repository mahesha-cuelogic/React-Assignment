import firebase from 'firebase';
export const {APPKEY, AUTHDOMAIN, MESID, DBURL, PROJECTID, STORAGEBUCKET, MSGSENDERID, APPID} = process.env;

const firebaseConfig = {
     apiKey: APPKEY,
     authDomain: AUTHDOMAIN,
     databaseURL: DBURL,
     projectId: PROJECTID,
     storageBucket: STORAGEBUCKET,
     messagingSenderId: MSGSENDERID,
     appId: APPID,
     measurementId: MESID
   };
class Auth {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
    register = async ({ email, password }) => {
        let res;
        try {
            res = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log('sucess', res);
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
            console.log('sucess', res);
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
        return res;
    }
}

export default new Auth();