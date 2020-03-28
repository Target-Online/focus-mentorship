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

import { firestoreApi } from '../../../../api';
import { Spinner, Filter } from '../../../../shared/components';
import { Images } from '../../../../shared/constants';
import { StudentsContext } from '../../../students/root/store';
import { rootReducer } from '../../../../shared/utils';

export default Users = props => {
    const [users] = useContext(StudentsContext);
    const [state, dispatch] = useReducer(rootReducer.observerReducer, {'collection': users.data});
        
    useEffect(() => firestoreApi.collectionObserver('users', dispatch), []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('ViewAdmin', { student: item })}>
                <View style={styles.row}>
                    <Image source={item.avatar == '' ? Images.user : { uri: item.avatar }} style={styles.pic} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                            <Text style={styles.mblTxt} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                        </View>
                        <View style={styles.msgContainer}>
                            <Text style={styles.msgTxt}>{item.city} {item['suburb/township']}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    
    return (
        <Spinner inProgress={users.inProgress}>
            <FlatList
                data={state.collection.filter(user => user.isAdmin)}
                keyExtractor={item => item.id.toString()}
                renderItem={item => renderItem(item)}
            />
            <Block center style={{ marginTop: 10 }}>
                {state.collection.filter(user => user.isAdmin).length == 0 && !users.inProgress && <Text>No admins.</Text>}
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
        width: 200,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '500',
        color: '#222',
        fontSize: 15,
        width: 100,
    },
    mblTxt: {
        fontWeight: '100',
        color: '#777',
        fontSize: 13,
        width: 80,
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