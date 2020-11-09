import React, { useState, useContext } from 'react';
import Dialog from "react-native-dialog";

import { View, ScrollView } from 'react-native';

import { setData } from '../../../../api/realTimedbApi';
import { materialTheme } from '../../shared/constants';
import { validation } from '../../../../shared/utils';
import { UserContext } from '../../../../root/store';
import { LiveStreamsContext } from '../../root/store';
import { onSuccess } from '../../../../shared/utils/notifications';

export default CreateLiveStream = props => {
    const [liveStreams, setLiveStreams] = useContext(LiveStreamsContext)
    const [currentUser] = useContext(UserContext)
    const { isVisible, setVisible } = props;
    const [liveStream, setLiveStream] = useState({});

    return (
        <View>
            <Dialog.Container visible={isVisible}>
                <Dialog.Title style={{ textAlign: 'center' }} >Create Live Stream</Dialog.Title>
                <Dialog.Input 
                    placeholder={'Subect'}
                    onChangeText={value => setLiveStream({
                        ...liveStream,
                        subject: value
                    })}
                    style={{ borderColor: materialTheme.COLORS.PRIMARY, borderBottomWidth: 1 }} 
                />
                <Dialog.Input 
                    placeholder={'Topic'}
                    onChangeText={value => setLiveStream({
                        ...liveStream,
                        topic: value
                    })}
                    style={{ borderColor: materialTheme.COLORS.PRIMARY, borderBottomWidth: 1 }} 
                />
                <Dialog.Button label="Cancel" onPress={() => setVisible(false)}/>
                <Dialog.Button label="Submit" onPress={() =>{
                    if(validation(liveStream, ['topic', 'subject'])){
                        setLiveStream({...liveStream, avatar: currentUser.avatar})
                        setLiveStreams({ type: 'setData', data: liveStreams.data.concat(liveStream) })
                        
                        setVisible(false);
                        setData('live-streams', liveStream);
                        onSuccess('Live stream created successfully');
                    }
                }}/>
            </Dialog.Container>
        </View>
    )
}