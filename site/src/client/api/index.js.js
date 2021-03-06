import firebase from "firebase";
import { O2A } from "object-to-array-convert";
import { toast } from "react-toastify";

import appsettings from "../../appsettings.json";

if (!firebase.apps.length) firebase.initializeApp(appsettings.firebaseConfig);

const db = firebase.database();

export const getCollection = (ref, dispatch) =>
  db.ref(ref).on(
    "value",
    data => {
      data.val() && dispatch({ type: "setData", data: O2A(data) });
      dispatch({ type: "setInProgress", inProgress: false });
    },
    error => {
      console.log("Error getting document", error);
      dispatch({ type: "setInProgress", inProgress: false });
    }
  );

export const setData = (ref, data) => {
  var id = firebase
    .database()
    .ref()
    .child(ref)
    .push().key;

  db.ref(ref)
    .child(id)
    .set({
      ...data,
      id: id,
      createdAt: Date.now()
    });
};

export const setState = (ref, key, data) =>
  db
    .ref(ref)
    .child(key)
    .set({
      ...data,
      key: key,
      createdAt: Date.now()
    });

export const getData = (ref, id, setData) =>
  db
    .ref(ref)
    .child(id)
    .on("value", data => setData(data.val()));

export const getUser = (ref, id, setData) =>
  db
    .ref(ref)
    .child(id)
    .on("value", data => setData({ ...data.val(), id: id }));

export const updateData = (ref, id, data) =>
  db
    .ref(ref)
    .child(id)
    .update({ ...data });

export const remove = (ref, id) => db.ref(ref).child(id).remove();

export const updateAuthUser = async data =>
  firebase.auth().currentUser.updateProfile({
    ...data
  });

export const login = (user, props, setInProgress) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(
      () => {
        setInProgress(false);
        props.history.push("/folders");
      },
      error => {
        setInProgress(false);
        toast.error(error.message);
      }
    );
};
