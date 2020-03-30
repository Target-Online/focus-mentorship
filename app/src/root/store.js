import React, { useState, useReducer, useEffect } from 'react'
import firebase from "firebase";

import { firestoreApi } from '../api';
import appsettings from '../../appsettings.json'
import { pushNotifications, rootReducer } from '../shared/utils';

export const UserContext = React.createContext()
export const UsersContext = React.createContext()

const initalState = {
	collection: [],
	search: '',
	inProgress: true
}

if (!firebase.apps.length) firebase.initializeApp(appsettings.firebaseConfig);

const Store = ({ children }) => {
	const [currentUser, setUser] = useState()
	const [users, dispatchUsers] = useReducer(rootReducer.setStateReducer, initalState)

	useEffect(() => {
		firestoreApi.getCollection('users', dispatchUsers);
		firebase.auth().onAuthStateChanged(user => {
			if(user){
				firestoreApi.getDocument('users', user.email, setUser);
				pushNotifications.registerForPushNotificationsAsync(user.uid)
			}
		});
	}, []);

	return (
		<UserContext.Provider value={[currentUser, setUser]}>
			<UsersContext.Provider value={[users, dispatchUsers]}>
				{children}
			</UsersContext.Provider>
		</UserContext.Provider>
	);
};
export default Store;