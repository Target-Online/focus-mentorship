import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import * as realTimedbApi from '../../api';
import { notifications, imageUtils } from '../../../../shared/utils'
import appsettings from '../../../../../appsettings.json'

if (!firebase.apps.length) firebase.initializeApp(appsettings.adminFirebaseConfig);

const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const _updateClientAvatar = async (setImage, id) => {
  try 
  {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === 'granted'){
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled){
        setImage(result.uri);
        var url = await upload(result.uri);
        setImage(url);
        realTimedbApi.updateData('clients', id, { avatar: url })
      }
    }
    else notifications.onError('Camera roll permission not granted');
  }
  catch (e){
    notifications.onError(e.message)
  }
};

const upload = async uri => {
  var ref = firebase.storage().ref().child(appsettings.environment + "/images/" + id);
  const blob = await imageUtils.uri2Blob(uri);
  const snapshot = await ref.put(blob);
  
  return await snapshot.ref.getDownloadURL()
}