import React, { useReducer, useEffect, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking,
    FlatList,
} from 'react-native';
import { Block } from 'galio-framework';

import { Spinner, FontAwesomeIcons } from '../../../../shared/components';
import { DocumentsContext } from '../../root';
import { rootReducer } from '../../../../shared/utils';
import { firestoreApi } from '../../api';

export default Documents = props => {
    const [documents] = useContext(DocumentsContext);
    const [state, dispatch] = useReducer(rootReducer.observerReducer, {'collection': documents.data});

    useEffect(() => firestoreApi.collectionObserver('documents', dispatch), []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                <View style={styles.row}>
                    <FontAwesomeIcons focused={true} name={'file-pdf-o'} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt} >{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const data = state.collection.filter(d => d.parentId == props.id)
    return (
        <Spinner inProgress={documents.inProgress}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={item => renderItem(item)}
            />
            <Block center style={{ marginTop: 10 }}>
                {data.length == 0 && !documents.inProgress && <Text>No documents.</Text>}
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
        fontWeight: '500',
        color: '#222',
        fontSize: 10,
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