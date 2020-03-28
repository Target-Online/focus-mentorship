import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { firestoreApi } from '../../api';
import { onError } from '../../../../shared/utils/notifications'
import appsettings from '../../../../../appsettings.json'

if (!firebase.apps.length) firebase.initializeApp(appsettings.adminFirebaseConfig);

const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const _pickImage = async (setImage, currentUser, setInProgress) => {
  try 
  {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === 'granted') 
    {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) 
      {
        setInProgress(true);

        var url = await upload(result.uri);
        setImage(url);

        if (currentUser) {
          firestoreApi.updateAuthUser({ photoURL: url })
          firestoreApi.updateDocument('users', currentUser.id, { avatar: url })
        }

        setInProgress(false);
      }
    }
    else onError('Camera roll permission not granted');
  }
  catch (e) 
  {
    console.log('error '+ e.message);
     onError(e.message)
  }
};

export const _updateDocumentImage = async (setImage, id) => {
  try 
  {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === 'granted') 
    {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) 
      {
        setImage(result.uri);
        var url = await upload(result.uri);
        setImage(url);
        firestoreApi.updateDocument('clients', id, { avatar: url })
      }
    }
    else onError('Camera roll permission not granted');
  }
  catch (e) 
  {
    console.log('error '+ e.message);
     onError(e.message)
  }
};

const upload = async uri => {
  var ref = firebase.storage().ref().child(appsettings.environment + "/images/" + id);
  const blob = await uri2Blob(uri);
  const snapshot = await ref.put(blob);
  
  return await snapshot.ref.getDownloadURL()
}

const uri2Blob = async uri => await new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    resolve(xhr.response);
  };
  xhr.onerror = function (e) {
    reject(new TypeError('Network request failed'));
  };
  xhr.responseType = 'blob';
  xhr.open('GET', uri, true);
  xhr.send(null);
}); 