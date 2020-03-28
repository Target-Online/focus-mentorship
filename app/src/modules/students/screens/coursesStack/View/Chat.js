import React, { useContext, useState, useReducer, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import { UserContext } from '../../../../../root/store';
import { MessagesContext } from '../../../root/store';
import { firestoreApi } from '../../../../../api';
import { rootReducer } from '../../../../../shared/utils';

export default ChatRoom = props => {
    const [currentUser] = useContext(UserContext);
    const [messages] = useContext(MessagesContext);
    const [state, dispatch] = useReducer(rootReducer.observerReducer, {'collection': messages.data});
    const { product } = props.navigation.state.params

    useEffect(() =>{
        if(currentUser) firestoreApi.collectionObserver('messages', dispatch)
        else props.navigation.navigate('Login');
    }, []);

    onSend = message => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        firestoreApi.plusDocument('messages', id, { ...message, parentId: product.id })
    }

    return (
        <GiftedChat
            renderUsernameOnMessage
            messages={
                state.collection
                    .filter(m => m.parentId == product.id)
                    .sort((a, b) => b.createdAt - a.createdAt)
            }
            onSend={messages => onSend(messages[0])}
            user={{ ...currentUser, _id: currentUser ? currentUser.id : 0 }}
        />
    )
}