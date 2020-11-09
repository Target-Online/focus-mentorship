import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    Dimensions
} from 'react-native';

import { Images, materialTheme } from '../../../../shared/constants';
import { LiveStreamsContext } from '../../root/store';
import LiveStream from './View';

const { height } = Dimensions.get('screen');

export default LiveStreams = props => {
    const [liveStreams] = useContext(LiveStreamsContext);
    const [isVisible, setVisible] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setVisible(true)}>
                <View style={styles.row}>
                    <Image source={{ uri: item.avatar }} style={styles.pic} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.subject}</Text>
                            <Text style={styles.mblTxt}>join +</Text>
                        </View>
                        <View style={styles.msgContainer}>
                            <Text style={styles.msgTxt}>{item.topic}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView>
            <FlatList
                data={liveStreams.data}
                refreshing={liveStreams.inProgress}
                onRefresh
                
                keyExtractor={item => item.id}
                renderItem={item => renderItem(item)}
                ListEmptyComponent={
                    <Text center style={styles.emptyComponent}>No live streams.</Text>
                }
                style={liveStreams.inProgress && styles.emptyComponent}
            />
            <LiveStream isVisible={isVisible} setVisible={setVisible}/>
        </ScrollView>
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
        width: 200,
        textAlign: 'center'
    },
    mblTxt: {
        fontWeight: '200',
        color: materialTheme.COLORS.PRIMARY,
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#777',
        fontSize: 12,
        marginLeft: 15,
        textAlign: 'center',
        width: 200
    },
    emptyComponent: { 
        textAlign:'center',
        marginTop: height / 4 
    }
}); 