import React, { useState, useReducer, useEffect } from 'react'

import { firestoreApi } from '../api';
import { rootReducer } from '../../../shared/utils';

export const AnnouncementsContext = React.createContext()
export const DocumentsContext = React.createContext()
export const MessagesContext = React.createContext()
export const ClientsContext = React.createContext()

const initalState = {
    data: [],
    search: '',
    inProgress: true
}

const Store = ({ children }) => {
    const [announcements, dispatchAnnouncements] = useReducer(rootReducer.setStateReducer, initalState)
    const [documents, dispatchDocuments] = useReducer(rootReducer.setStateReducer, initalState)
    const [messages, dispatchMessages] = useReducer(rootReducer.setStateReducer, initalState)
    const [clients, dispatchClients] = useReducer(rootReducer.setStateReducer, initalState)

    useEffect(() => {
        firestoreApi.getCollection('announcements', dispatchAnnouncements);
        firestoreApi.getCollection('documents', dispatchDocuments);
        firestoreApi.getCollection('messages', dispatchMessages);
        firestoreApi.getCollection('clients', dispatchClients);
    }, []);

    return (
        <AnnouncementsContext.Provider value={[announcements, dispatchAnnouncements]}>
            <DocumentsContext.Provider value={[documents, dispatchDocuments]}>
                <MessagesContext.Provider value={[messages, dispatchMessages]}>
                    <ClientsContext.Provider value={[clients, dispatchClients]}>
                        {children}
                    </ClientsContext.Provider>
                </MessagesContext.Provider>
            </DocumentsContext.Provider>
        </AnnouncementsContext.Provider>
    );
};
export default Store;