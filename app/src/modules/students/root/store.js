import React, { useReducer, useEffect } from 'react'

import * as realTimedbApi from '../../../api';
import { rootReducer } from '../../../shared/utils';

export const AnnouncementsContext = React.createContext()
export const CoursesContext = React.createContext()
export const StudentCourseContext = React.createContext()
export const DocumentsContext = React.createContext()
export const MessagesContext = React.createContext()
export const FoldersContext = React.createContext()
export const SubFoldersContext = React.createContext()

const initalState = {
    data: [],
    search: '',
    inProgress: false
}

const Store = ({ children }) => {
    const [documents, setDocuments] = useReducer(rootReducer.setStateReducer, initalState)
    const [announcements, setAnnouncements] = useReducer(rootReducer.setStateReducer, initalState)
    const [courses, setCourses] = useReducer(rootReducer.setStateReducer, initalState)
    const [studentCourse, setStudentCourse] = useReducer(rootReducer.setStateReducer, initalState)
    const [messages, setMessages] = useReducer(rootReducer.setStateReducer, initalState)
    const [folders, setFolders] = useReducer(rootReducer.setStateReducer, initalState)
    const [subFolders, setSubFolders] = useReducer(rootReducer.setStateReducer, initalState)

    useEffect(() => {
        realTimedbApi.getCollection('documents', setDocuments);
        realTimedbApi.getCollection('announcements', setAnnouncements);
        realTimedbApi.getCollection('courses', setCourses);
        realTimedbApi.getCollection('studentCourse', setStudentCourse);
        realTimedbApi.getCollection('messages', setMessages);
        realTimedbApi.getCollection('folders', setFolders);
        realTimedbApi.getCollection('subFolders', setSubFolders);
    }, []);

    return (
        <DocumentsContext.Provider value={[documents, setDocuments]}>
        <AnnouncementsContext.Provider value={[announcements, setAnnouncements]}>
            <CoursesContext.Provider value={[courses, setCourses]}>
                <StudentCourseContext.Provider value={[studentCourse, setStudentCourse]}>
                    <MessagesContext.Provider value={[messages, setMessages]}>
                        <FoldersContext.Provider value={[folders, setFolders]}>
                            <SubFoldersContext.Provider value={[subFolders, setSubFolders]}>
                                {children}
                            </SubFoldersContext.Provider>
                        </FoldersContext.Provider>
                    </MessagesContext.Provider>
                </StudentCourseContext.Provider>
            </CoursesContext.Provider>
        </AnnouncementsContext.Provider>
        </DocumentsContext.Provider>
    );
};
export default Store;