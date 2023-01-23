import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const CreateUser = data => {
  return new Promise(function (resolve, reject) {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(async () => {
        await SaveUser(data);
        console.log('User account created & signed in !');
        resolve('success');
      })
      .catch(error => {
        if (error.code === 'auth/email-aleready-in-use') {
          console.log('that email address is already in use !');
          reject({massage: 'that email address is alreaday in use!'});
        }
        if (error.code === 'auth/email-aleready-in-use') {
          console.log('that email address is already in use !');
          reject({massage: 'that email address is alreaday in use!'});
        }
      });
  });
};
export const SignInUser = data => {
  return new Promise(function (resolve, reject) {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error.massage);
      });
  });
};

export const SaveUser = data => {
  return new Promise(function (resolve, reject) {
    const UserID = auth().currentUser.uid;
    database()
      .ref(`users/${UserID}`)
      .set({
        name: data.name,
        email: auth().currentUser.email,
      })
      .then(() => resolve('Data set.'))
      .catch(error => {
        reject(error);
      });
  });
};

export const GetUser = data => {
  return new Promise(function (resolve, reject) {
    const UserID = auth().currentUser.uid;
    database()
      .ref(`/users/${UserID}`)
      .once('value')
      .then(snapshot => {
        resolve(snapshot.val());
        console.log('User data:', snapshot.val());
      })
      .catch(error => {
        reject(error);
      });
  });
};
