import React, { useState, useEffect } from 'react'
import firebase from "firebase";

import { db, getUser } from '../api';
import appsettings from '../../appsettings.json'
import { pushNotifications } from '../shared/utils';
import { createListener } from '../shared/utils/fireabse-database';

export const UserContext = React.createContext()
export const UsersContext = React.createContext()

const initalState = {
	data: [],
	search: '',
	inProgress: true
}

if (!firebase.apps.length) firebase.initializeApp(appsettings.firebaseConfig);

const Store = ({ children }) => {
	const [currentUser, setUser] = useState()
	const [users, setUsers] = useState(initalState)

	useEffect(() => {
		const subscriber = firebase.auth().onAuthStateChanged(user => {
			if(user){
				const userId = user.email.replace(/[^0-9a-z]/gi, '')
				getUser('users', userId, setUser)
				pushNotifications.registerForPushNotificationsAsync(userId)
			}
		});

		return () => subscriber;
	}, []);

	

	useEffect(() => {
		const usersRef = db.ref('users');

		const usersLitener = createListener(usersRef, setUsers);

		return () => usersRef.off('value', usersLitener);
	}, [])

	return (
		<UserContext.Provider value={[currentUser, setUser]}>
			<UsersContext.Provider value={[users, setUsers]}>
				{children}
			</UsersContext.Provider>
		</UserContext.Provider>
	);
};
export default Store;