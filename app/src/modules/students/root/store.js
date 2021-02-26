import React, { useEffect, useState } from 'react'

import { db } from '../../../api'
import { createListener } from '../../../shared/utils/fireabse-database'

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
    const [documents, setDocuments] = useState(initalState)
    const [announcements, setAnnouncements] = useState(initalState)
    const [courses, setCourses] = useState(initalState)
    const [studentCourse, setStudentCourse] = useState(initalState)
    const [messages, setMessages] = useState(initalState)
    const [folders, setFolders] = useState(initalState)
    const [subFolders, setSubFolders] = useState(initalState)
    const [liveStreams, setLiveStreams] = useState(initalState)

    useEffect(() => {
       const documentsRef = db.ref('documents');
       const announcementsRef = db.ref('announcements');
       const coursesRef = db.ref('courses');
       const studentCourseRef = db.ref('studentCourse');
       const messagesRef = db.ref('messages');
       const foldersRef = db.ref('folders');
       const subFoldersRef = db.ref('subFolders');
       const liveStreamsRef = db.ref('live-streams');

       const documentsLitener = createListener(documentsRef, setDocuments);
       const announcementsLitener = createListener(announcementsRef, setAnnouncements);
       const coursesLitener = createListener(coursesRef, setCourses);
       const studentCourseLitener = createListener(studentCourseRef, setStudentCourse);
       const messagesLitener = createListener(messagesRef, setMessages);
       const foldersLitener = createListener(foldersRef, setFolders);
       const subFoldersLitener = createListener(subFoldersRef, setSubFolders);
       const liveStreamsLitener = createListener(liveStreamsRef, setLiveStreams);

        return () => {
            documentsRef.off('value', documentsLitener);
            announcementsRef.off('value', announcementsLitener);
            coursesRef.off('value', coursesLitener);
            studentCourseRef.off('value', studentCourseLitener);
            messagesRef.off('value', messagesLitener);
            foldersRef.off('value', foldersLitener);
            subFoldersRef.off('value', subFoldersLitener);
            liveStreamsRef.off('value', liveStreamsLitener);
        }
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