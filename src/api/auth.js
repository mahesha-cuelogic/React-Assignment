import firebase from 'firebase';

const firebaseConfig = {
     apiKey: "AIzaSyColRrWYt67I-4hWCA0TZJzmbsYoTzDMwA",
     authDomain: "mahi-react-assignment.firebaseapp.com",
     databaseURL: "https://mahi-react-assignment.firebaseio.com",
     projectId: "mahi-react-assignment",
     storageBucket: "mahi-react-assignment.appspot.com",
     messagingSenderId: "489253843924",
     appId: "1:489253843924:web:7c18834402d64de7c71c41",
     measurementId: "G-91Y58YH013"
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