import React, { useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import { UserContext } from '../../root/store';
import { firestoreApi } from '../../api'
import { MessagesContext } from '../../modules/students/root/store';

export default function ChatRoom (props) {
    const [currentUser] = useContext(UserContext);
    const [messages] = useContext(MessagesContext);
    const { product } = props.navigation.state.params
   
    const data = messages.filter(m => m.parentId == product.id)
     
    return (
        
        <GiftedChat
            renderUsernameOnMessage
            isLoadingEarlier
            messages={data.map(d => ({ ...d, createdAt: d.createdAt}))} 
            onSend={mssgs => {
                const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                firestoreApi.setDocument(
                    'messages', 
                    id, 
                    { 
                        ...mssgs[0], 
                        parentId: product.id 
                    } 
                )
            }}
            user={{...currentUser, _id: currentUser.id }}
        />
    )
}