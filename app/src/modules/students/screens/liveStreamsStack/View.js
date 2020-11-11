import React, { useState, useContext } from 'react';
import Dialog from "react-native-dialog";

import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import { setData } from '../../../../api/realTimedbApi';
import { materialTheme } from '../../shared/constants';
import { validation } from '../../../../shared/utils';
import { UserContext } from '../../../../root/store';
import { LiveStreamsContext } from '../../root/store';
import { onSuccess } from '../../../../shared/utils/notifications';

export default function LiveStream (props) {
    const [liveStreams, setLiveStreams] = useContext(LiveStreamsContext)
    const [currentUser] = useContext(UserContext)
    const { isVisible, setVisible } = props;
    const [liveStream, setLiveStream] = useState({});

    return (
        <View>
            <Dialog.Container visible={isVisible}>
            {/*    
            <iframe
            frameBorder="0"
            src={`https://www.dailymotion.com/embed/video/k5N5G9xY6KsHm2w3FC3?queue-enable=false&sharing-enable=false&`}
            fullscreen
            allowFullScreen
            allow="autoplay"
          />
            */}

          <WebView
   source={{html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
   style={{marginTop: 20}}
/>
                <Dialog.Button label="Close" onPress={() => setVisible(false)}/>
            </Dialog.Container>
        </View>
    )
}