import firebase from 'firebase';

class DataBase {
    set = async (path, payload) => {
        let res;
        try {
            res = await firebase.database().ref(`${path}/` + payload.uid).set(payload);
        } catch (error) {
            console.log(error);
            throw new Error(error);            
        }
        return res;
    }

    getAllUsers = (callBack) => {
        try {
            const ref = firebase.database().ref('users/')
            ref.on('value', callBack);
        } catch (error) {
            console.log(error);
            throw new Error(error);     
        }
    }

    push = async (path, payload) => {
        let res;
        try {
            res = await firebase.database().ref(`${path}/` + payload.uid).push(payload);
        } catch (error) {
            console.log(error);
            throw new Error(error);            
        }
        return res;
    }

    getAllArticles = async (callBack) => {
        try {
            const ref = firebase.database().ref(`articles/${localStorage.getItem('loggedInUserId')}`)
            ref.on('value', callBack);
        } catch (error) {
            console.log(error);
            throw new Error(error);     
        }
    }

    getArticle = async (id, callBack) => {
        try {
            const ref = firebase.database().ref(`articles/${localStorage.getItem('loggedInUserId')}/${id}`)
            ref.on('value', callBack);
        } catch (error) {
            console.log(error);
            throw new Error(error);     
        }
    }

}

export default new DataBase();