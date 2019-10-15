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
}

export default new DataBase();