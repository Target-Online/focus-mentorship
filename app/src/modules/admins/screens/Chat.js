import React, { useContext, useReducer, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import { UserContext } from '../../../root/store';
import { MessagesContext, ClientsContext } from '../root';
import { firestoreApi } from '../api';
import { rootReducer } from '../../../shared/utils';
import appsettings from '../../../../appsettings.json'

export default ChatRoom = props => {
    const [currentUser] = useContext(UserContext);
    const [clients] = useContext(ClientsContext);
    const [messages] = useContext(MessagesContext);
    const [state, dispatch] = useReducer(rootReducer.observerReducer, {'collection': messages.data});
    const client = clients.data.filter(c => c.name == appsettings.appName)[0] 

    useEffect(() => {
        if(!currentUser) props.navigation.navigate('Login');
        firestoreApi.collectionObserver('messages', dispatch)
    }, []);

    onSend = message => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log('messages', id, { ...message, parentId: client.id })
        firestoreApi.setDocument('messages', id, { ...message, parentId: client.id })
    }

    return (
        <GiftedChat
            renderUsernameOnMessage
            messages={
                state.collection
                    .filter(m => m.parentId == client.id)
                    .sort((a, b) => b.createdAt - a.createdAt)
            }
            onSend={messages => onSend(messages[0])}
            user={{ ...currentUser, _id: currentUser.id }}
        />
    )
}