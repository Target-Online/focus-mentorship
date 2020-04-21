import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import * as realTimedbApi from '../../../../api';
import { onError } from './notifications'
import { imageUtils } from '../../../../shared/utils'

export const _updateCourseAvatar = async (setImage, id) => {
  try {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === 'granted'){
        const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      if (!result.cancelled){
        setImage(result.uri);
        var url = await imageUtils.upload(result.uri, false);
        setImage(url);
        realTimedbApi.updateData('courses', id, { avatar: url })
      }
    }
    else onError('Camera roll permission not granted');
  }
  catch (e){
    onError(e.message)
  }
};