import firebase from "firebase";
import * as DocumentPicker from "expo-document-picker";

import * as realTimedbApi from "../../api/index.js";
import appsettings from "../../../appsettings.json";

if (!firebase.apps.length) firebase.initializeApp(appsettings.firebaseConfig);

const getResourceUrl = async (file, location) => {
  var ref = firebase
    .storage()
    .ref()
    .child(location);
  var snapshot = await ref.put(file);

  return snapshot.ref.getDownloadURL();
};

export const pick = async (parentId, dispath) => {
  dispath({ type: "setInProgress", inProgress: true });

  const result = await DocumentPicker.getDocumentAsync({
    type: "application/pdf",
    multiple: true
  });

  if (result.type != "cancel") {
    await publish(result, parentId);
    dispath({ type: "setInProgress", inProgress: false });
  } else dispath({ type: "setInProgress", inProgress: false });
};

const publish = (result, parentId) => {
  return new Promise(() =>
    Object.entries(result.output).map(async file => {
      const id =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);
      setTimeout(async () => {
        realTimedbApi.setData("documents", {
          name: result.name.split(".")[0],
          url: await getResourceUrl(
            file[1],
            appsettings.environment + "/documents/" + id
          ),
          parentId: parentId
        });
      }, 10000);
    })
  );
};

export default pick;
