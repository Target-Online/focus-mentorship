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
    data: [],
    search: '',
    inProgress: true
}

const Store = ({ children }) => {
    const [announcements, setAnnouncements] = useReducer(rootReducer.setStateReducer, initalState)
    const [courses, setCourses] = useReducer(rootReducer.setStateReducer, initalState)
    const [studentCourse, setStudentCourse] = useReducer(rootReducer.setStateReducer, initalState)
    const [documents, setDocuments] = useReducer(rootReducer.setStateReducer, initalState)
    const [students, setStudents] = useReducer(rootReducer.setStateReducer, initalState)
    const [messages, setMessages] = useReducer(rootReducer.setStateReducer, initalState)
    const [folders, setFolders] = useReducer(rootReducer.setStateReducer, initalState)

    useEffect(() => {
        firestoreApi.getCollection('announcements', setAnnouncements);
        firestoreApi.getCollection('courses', setCourses);
        firestoreApi.getCollection('studentCourse', setStudentCourse);
        firestoreApi.getCollection('documents', setDocuments);
        firestoreApi.getCollection('users', setStudents);
        firestoreApi.getCollection('messages', setMessages);
        firestoreApi.getCollection('folders', setFolders);
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