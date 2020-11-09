

import firebase from 'firebase';
import * as DocumentPicker from 'expo-document-picker';

import * as realTimedbApi from '../../api';
import { onError, onSuccess } from './notifications'
import appsettings from '../../../appsettings.json'

if (!firebase.apps.length) firebase.initializeApp(appsettings.adminFirebaseConfig);

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

const getResourceUrl = async (uri, location) => {
  var ref = firebase.storage().ref().child(location);
  var snapshot = await ref.put(await uri2Blob(uri));

  return snapshot.ref.getDownloadURL();
}

export const _documentPicker = async (
  parentId,
  dispath,
  docs
 ) => {
    dispath({ type: 'setInProgress', inProgress: true });

    const result = await DocumentPicker.getDocumentAsync({});
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    if (result.type != "cancel") {
        var fileExtention = result.name.split('.')[1];
        var fileName = result.name.split('.')[0];

        if (fileExtention === 'pdf' || fileExtention === 'docx')  {
            var data = realTimedbApi.setData('documents', {
                name: fileName,
                url: await getResourceUrl(result.uri, appsettings.environment + "/documents/" + id),
                parentId: parentId
            });
            onSuccess(`Document ${fileName} added successfully.`)
            docs && dispath({ type: 'setData', data: docs.data.concat(data) });
          }
        else {
          onError('Incorrect file type');
      }
    }
    dispath({ type: 'setInProgress', inProgress: false });
}

export default _documentPicker;