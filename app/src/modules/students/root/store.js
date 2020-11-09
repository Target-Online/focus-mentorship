import React, { useReducer, useEffect } from 'react'

import { getCollection } from '../../../api/realTimedbApi';
import { rootReducer } from '../../../shared/utils';

export const AnnouncementsContext = React.createContext()
export const CoursesContext = React.createContext()
export const StudentCourseContext = React.createContext()
export const DocumentsContext = React.createContext()
export const MessagesContext = React.createContext()
export const FoldersContext = React.createContext()
export const SubFoldersContext = React.createContext()
export const LiveStreamsContext = React.createContext()

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
    const [liveStreams, setLiveStreams] = useReducer(rootReducer.setStateReducer, initalState)

    useEffect(() => {
        getCollection('documents', setDocuments);
        getCollection('announcements', setAnnouncements);
        getCollection('courses', setCourses);
        getCollection('studentCourse', setStudentCourse);
        getCollection('messages', setMessages);
        getCollection('folders', setFolders);
        getCollection('subFolders', setSubFolders);
        getCollection('live-streams', setLiveStreams);
    }, []);

    return (
        <DocumentsContext.Provider value={[documents, setDocuments]}>
            <AnnouncementsContext.Provider value={[announcements, setAnnouncements]}>
                <CoursesContext.Provider value={[courses, setCourses]}>
                    <StudentCourseContext.Provider value={[studentCourse, setStudentCourse]}>
                        <MessagesContext.Provider value={[messages, setMessages]}>
                            <FoldersContext.Provider value={[folders, setFolders]}>
                                <SubFoldersContext.Provider value={[subFolders, setSubFolders]}>
                                    <LiveStreamsContext.Provider value={[liveStreams, setLiveStreams]}>
                                        {children}
                                    </LiveStreamsContext.Provider>
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