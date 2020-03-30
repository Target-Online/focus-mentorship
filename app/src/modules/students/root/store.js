import React, { useReducer, useEffect } from 'react'

import { firestoreApi } from '../../../api';
import { rootReducer } from '../../../shared/utils';

export const AnnouncementsContext = React.createContext()
export const CoursesContext = React.createContext()
export const StudentCourseContext = React.createContext()
export const DocumentsContext = React.createContext()
export const StudentsContext = React.createContext()
export const MessagesContext = React.createContext()
export const FoldersContext = React.createContext()
export const StateContext = React.createContext()

const initalState = {
    collection: [],
    search: '',
    inProgress: false
}

const Store = ({ children }) => {
    const [announcements, setAnnouncements] = useReducer(rootReducer.observerReducer, initalState)
    const [courses, setCourses] = useReducer(rootReducer.observerReducer, initalState)
    const [studentCourse, setStudentCourse] = useReducer(rootReducer.observerReducer, initalState)
    const [documents, setDocuments] = useReducer(rootReducer.observerReducer, initalState)
    const [students, setStudents] = useReducer(rootReducer.observerReducer, initalState)
    const [messages, setMessages] = useReducer(rootReducer.observerReducer, initalState)
    const [folders, setFolders] = useReducer(rootReducer.observerReducer, initalState)

    useEffect(() => {
        firestoreApi.collectionObserver('announcements', setAnnouncements);
        firestoreApi.collectionObserver('courses', setCourses);
        firestoreApi.collectionObserver('studentCourse', setStudentCourse);
        firestoreApi.collectionObserver('documents', setDocuments);
        firestoreApi.collectionObserver('users', setStudents);
        firestoreApi.collectionObserver('messages', setMessages);
        firestoreApi.collectionObserver('folders', setFolders);
    }, []);

    return (
        <AnnouncementsContext.Provider value={[announcements, setAnnouncements]}>
            <CoursesContext.Provider value={[courses, setCourses]}>
                <StudentCourseContext.Provider value={[studentCourse, setStudentCourse]}>
                    <DocumentsContext.Provider value={[documents, setDocuments]}>
                        <StudentsContext.Provider value={[students, setStudents]}>
                            <MessagesContext.Provider value={[messages, setMessages]}>
                                <FoldersContext.Provider value={[folders, setFolders]}>
                                    {children}
                                </FoldersContext.Provider>
                            </MessagesContext.Provider>
                        </StudentsContext.Provider>
                    </DocumentsContext.Provider>
                </StudentCourseContext.Provider>
            </CoursesContext.Provider>
        </AnnouncementsContext.Provider>
    );
};
export default Store;