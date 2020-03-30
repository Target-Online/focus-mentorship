import React, { useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import { UserContext } from '../../../root/store';
import { MessagesContext, ClientsContext } from '../root';
import { firestoreApi } from '../api';
import appsettings from '../../../../appsettings.json'

export default ChatRoom = props => {
    const [currentUser] = useContext(UserContext);
    const [clients] = useContext(ClientsContext);
    const [messages] = useContext(MessagesContext);
    const client = clients.collection.filter(c => c.name == appsettings.appName)[0] 

    onSend = message => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log('messages', id, { ...message, parentId: client.id })
        firestoreApi.setDocument('messages', id, { ...message, parentId: client.id })
    }

    return (
        <GiftedChat
            renderUsernameOnMessage
            messages={
                messages.collection
                    .filter(m => m.parentId == client.id)
                    .sort((a, b) => b.createdAt - a.createdAt)
            }
            onSend={messages => onSend(messages[0])}
            user={{ ...currentUser, _id: currentUser.id }}
        />
    )
}