import React, { useState, useReducer, useEffect } from 'react'

import { db } from '../api';
import { createListener } from '../../../shared/utils/fireabse-database'

export const AnnouncementsContext = React.createContext()
export const DocumentsContext = React.createContext()
export const MessagesContext = React.createContext()
export const ClientsContext = React.createContext()

const initalState = {
    data: [],
    search: '',
    inProgress: false
}

const Store = ({ children }) => {
    const [documents, setDocuments] = useState(initalState)
    const [announcements, setAnnouncements] = useState(initalState)
    const [messages, setMessages] = useState(initalState)
    const [clients, setClients] = useState(initalState)

    useEffect(() => {
       const documentsRef = db.ref('documents');
       const announcementsRef = db.ref('announcements');
       const messagesRef = db.ref('messages');
       const clientsRef = db.ref('clients');

       const documentsLitener = createListener(documentsRef, setDocuments);
       const announcementsLitener = createListener(announcementsRef, setAnnouncements);
       const messagesLitener = createListener(messagesRef, setMessages);
       const clientsLitener = createListener(clientsRef, setClients);

        return () => {
            documentsRef.off('value', documentsLitener);
            announcementsRef.off('value', announcementsLitener);
            messagesRef.off('value', messagesLitener);
            clientsRef.off('value', clientsLitener);
        }
    }, []);

    return (
        <AnnouncementsContext.Provider value={[announcements, setAnnouncements]}>
            <DocumentsContext.Provider value={[documents, setDocuments]}>
                <MessagesContext.Provider value={[messages, setMessages]}>
                    <ClientsContext.Provider value={[clients, setClients]}>
                        {children}
                    </ClientsContext.Provider>
                </MessagesContext.Provider>
            </DocumentsContext.Provider>
        </AnnouncementsContext.Provider>
    );
};
export default Store;