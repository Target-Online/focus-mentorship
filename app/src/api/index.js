import firebase from "firebase";
import { O2A } from 'object-to-array-convert';

import { onError } from '../shared/utils/notifications'
import appsettings from '../../appsettings.json'

if (!firebase.apps.length) firebase.initializeApp(appsettings.firebaseConfig);

export const db = firebase.database();

export const getCollection = (
    ref,
    dispatch
) => db.ref(ref).on("value", data => {
    data.val() && dispatch({ type: 'setData', data: O2A(data) });
    dispatch({ type: 'setInProgress', inProgress: false });
}, error => {
    onError('Error getting document', error);
    dispatch({ type: 'setInProgress', inProgress: false })
});

export const setData = (ref, data) => {
    var id = firebase.database().ref().child(ref).push().key;
    var data = {
        ...data,
        id: id,
        createdAt: Date.now()
    }

    db.ref(ref).child(id).set(data)

    return data;
}

export const getData = (ref, id, setData) => db.ref(ref).child(id).once("value", data => setData(data.val()));

export const getUser = (ref, id, setData) => db.ref(ref).child(id).once("value", data => setData({ ...data.val(), id: id }));

export const updateData = (ref, id, data) => db.ref(ref).child(id).update({ ...data })

export const updateAuthUser = async data => firebase.auth().currentUser.updateProfile({
    ...data
});