import React, { useContext, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import { UserContext } from '../../../../../root/store';
import { MessagesContext } from '../../../root/store';
import * as realTimedbApi from '../../../../../api';

export default ChatRoom = props => {
    const [currentUser] = useContext(UserContext);
    const [messages, setMessages] = useContext(MessagesContext);
    const { product } = props.navigation.state.params

    useEffect(() =>{ if(!currentUser) props.navigation.navigate('Login') }, []);

    onSend = message => {
        var data = realTimedbApi.setData('messages', { ...message, parentId: product.id });
        setMessages({ type: 'setData', data: messages.data.concat(data)});
    }

    return (
        <GiftedChat
            renderUsernameOnMessage
            messages={
                messages.data
                    .filter(m => m.parentId == product.id)
                    .sort((a, b) => b.createdAt - a.createdAt)
            }
            onSend={messages => onSend(messages[0])}
            user={{ ...currentUser, _id: currentUser ? currentUser.id : 0 }}
        />
    )
}