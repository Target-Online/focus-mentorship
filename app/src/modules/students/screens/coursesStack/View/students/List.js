import React, { useReducer, useEffect, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { Block } from 'galio-framework';

import { firestoreApi } from '../../../../../../api';
import { Spinner, Filter } from '../../../../../../shared/components';
import { Images } from '../../../../../../shared/constants';
import { StudentsContext, StudentCourseContext } from '../../../../root/store';
import { rootReducer } from '../../../../../../shared/utils';

export default Users = props => {
    const [students] = useContext(StudentsContext);
    const [studentCourse] = useContext(StudentCourseContext);
    const [state, dispatch] = useReducer(rootReducer.observerReducer, {'collection': studentCourse.data});
            
    useEffect(() => firestoreApi.collectionObserver('studentCourse', dispatch), []);

    const renderItem = ({ item }) => {
        return (
            <Filter hide={!item.isStudent}>
                <TouchableOpacity onPress={() => props.navigation.navigate('View', { student: item })}>
                    <View style={styles.row}>
                        <Image source={item.avatar == '' ? Images.user : { uri: item.avatar }} style={styles.pic} />
                        <View>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                            </View>
                            <View style={styles.msgContainer}>
                                <Text style={styles.msgTxt}>{item.city} {item['suburb/township']}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Filter>
        );
    }

    const inProgress = students.inProgress || studentCourse.inProgress;
    
    return (
        <Spinner inProgress={inProgress}>
            <FlatList
                data={
                    students.data.filter(s =>
                        state.collection.filter(sc => sc.courseId == props.course.id)
                        .map(es => es.studentId)
                        .includes(s.id))
                }
                keyExtractor={item => item.id.toString()}
                renderItem={item => renderItem(item)}
            />
            <Block center style={{ marginTop: 10 }}>
                {state.collection.filter(sc => sc.courseId == props.course.id).length == 0 && !inProgress && <Text>No students.</Text>}
            </Block>
        </Spinner>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
    },
    pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 18,
        width: 170,
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
    },
}); 