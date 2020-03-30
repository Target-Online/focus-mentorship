import React, { useState, useReducer, useEffect } from 'react'

import { firestoreApi } from '../api';
import { rootReducer } from '../../../shared/utils';

export const AnnouncementsContext = React.createContext()
export const DocumentsContext = React.createContext()
export const MessagesContext = React.createContext()
export const ClientsContext = React.createContext()

const initalState = {
    collection: [],
    search: '',
    inProgress: false
}

const Store = ({ children }) => {
    const [announcements, dispatchAnnouncements] = useReducer(rootReducer.observerReducer, initalState)
    const [documents, dispatchDocuments] = useReducer(rootReducer.observerReducer, initalState)
    const [messages, dispatchMessages] = useReducer(rootReducer.observerReducer, initalState)
    const [clients, dispatchClients] = useReducer(rootReducer.observerReducer, initalState)

    useEffect(() => {
        firestoreApi.collectionObserver('announcements', dispatchAnnouncements);
        firestoreApi.collectionObserver('documents', dispatchDocuments);
        firestoreApi.collectionObserver('messages', dispatchMessages);
        firestoreApi.collectionObserver('clients', dispatchClients);
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