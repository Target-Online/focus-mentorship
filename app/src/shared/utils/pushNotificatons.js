import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';

import * as realTimedbApi from '../../api';
import * as expoApi from '../../api/expoApi';

const registerForPushNotificationsAsync = async userId => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') return;

  realTimedbApi.updateData('users', userId.replace(/[^0-9a-z]/gi, ''), {
    deviceId: await Notifications.getExpoPushTokenAsync()
  });
}


const sendPushNotifications = (users, title, message) => {
  var notifications = [];
  users.map((user) => {
    user.deviceId && notifications.push({ "to": user.deviceId, "title": title, "body": message, "sound": "default" });
  });
  expoApi.sendPushNotifications(notifications);
}

export {
  registerForPushNotificationsAsync,
  sendPushNotifications
}



