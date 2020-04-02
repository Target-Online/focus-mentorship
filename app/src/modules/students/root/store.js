import React, { useReducer, useEffect } from 'react'

import { realTimedbApi } from '../../../api';
import { rootReducer } from '../../../shared/utils';

export const AnnouncementsContext = React.createContext()
export const CoursesContext = React.createContext()
export const StudentCourseContext = React.createContext()
export const DocumentsContext = React.createContext()
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
    const [messages, setMessages] = useReducer(rootReducer.setStateReducer, initalState)
    const [folders, setFolders] = useReducer(rootReducer.setStateReducer, initalState)

    useEffect(() => {
        realTimedbApi.getCollection('announcements', setAnnouncements);
        realTimedbApi.getCollection('courses', setCourses);
        realTimedbApi.getCollection('studentCourse', setStudentCourse);
        realTimedbApi.getCollection('documents', setDocuments);
        realTimedbApi.getCollection('messages', setMessages);
        realTimedbApi.getCollection('folders', setFolders);
    }, []);

    return (
        <AnnouncementsContext.Provider value={[announcements, setAnnouncements]}>
            <CoursesContext.Provider value={[courses, setCourses]}>
                <StudentCourseContext.Provider value={[studentCourse, setStudentCourse]}>
                    <DocumentsContext.Provider value={[documents, setDocuments]}>
                        <MessagesContext.Provider value={[messages, setMessages]}>
                            <FoldersContext.Provider value={[folders, setFolders]}>
                                {children}
                            </FoldersContext.Provider>
                        </MessagesContext.Provider>
                    </DocumentsContext.Provider>
                </StudentCourseContext.Provider>
            </CoursesContext.Provider>
        </AnnouncementsContext.Provider>
    );
};
export default Store;