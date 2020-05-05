import React, { useEffect, useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, ScrollView, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { UserContext } from '../../../../root/store';

import { imageUtils } from '../../../../shared/utils';
import { Images } from '../../../../shared/constants';
import { onInfo } from '../../shared/utils/notifications';
import { utils, materialTheme } from '../../shared/constants';
import { HeaderHeight } from "../../shared/constants/utils";

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default View = props => {
    const [currentUser, setUser] = useContext(UserContext);
    const { student } = props.navigation.state.params;
    const [inProgress, setInProgress] = useState(false);
    const [image, setImage] = useState(student.avatar);

    const updateProfile = () => {
        if (currentUser && (student.email == currentUser.email || currentUser.isAdmin)){
            imageUtils._updateUserAvatar(setImage, currentUser)
        }
    }

    useEffect(() => {
        if (currentUser && student.avatar == '' && currentUser.email == student.email){ 
            onInfo('Update your profile image.');
        }
    }, []);

    return (
        <Block flex style={styles.profile}>
            <Block flex>
                <TouchableOpacity onPress={() => updateProfile()}>
                    <ImageBackground
                        source={image == '' ? Images.user : { uri: image }}
                        style={styles.profileContainer}
                        imageStyle={styles.profileImage}>
                        <Block flex style={styles.profileDetails}>
                            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
                        </Block>
                    </ImageBackground>
                </TouchableOpacity>
            </Block>
            <Block flex style={styles.options}>
                <ScrollView>
                    <Block style={styles.title}>
                        <Text bold center size={theme.SIZES.BASE} style={{ paddingBottom: 5 }}>
                            {student.name}
                        </Text>
                        <Text center muted size={12}>
                            {student.email}
                        </Text>
                    </Block>
                    <Block style={styles.title}>
                        <Text center size={12}>
                            {student.city}
                        </Text>
                    </Block>
                    <Block style={styles.title}>
                        <Text center size={12}>
                            {student['suburb/township']}
                        </Text>
                    </Block>
                </ScrollView>
            </Block>
        </Block>
    );
}

const styles = StyleSheet.create({
    profile: {
        marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
        marginBottom: -height / 2,
    },
    profileImage: {
        width: width * 1.1,
        height: height / 1.5,
    },
    profileContainer: {
        width: width,
        height: height / 1.5,
    },
    profileDetails: {
        paddingTop: theme.SIZES.BASE * 4,
        justifyContent: 'flex-end',
        position: 'relative',
    },
    profileTexts: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE * 2,
        zIndex: 2
    },
    pro: {
        backgroundColor: materialTheme.COLORS.LABEL,
        paddingHorizontal: 6,
        marginRight: theme.SIZES.BASE / 2,
        borderRadius: 4,
        height: 19,
        width: 38,
    },
    seller: {
        marginRight: theme.SIZES.BASE / 2,
    },
    options: {
        position: 'relative',
        padding: theme.SIZES.BASE,
        marginHorizontal: theme.SIZES.BASE,
        marginTop: -theme.SIZES.BASE * 7,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',
        width: thumbMeasure,
        height: thumbMeasure
    },
    gradient: {
        zIndex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        height: '30%',
        position: 'absolute',
    },
    settings: {
        paddingVertical: theme.SIZES.BASE / 3,
    },
    title: {
        paddingTop: theme.SIZES.BASE,
        paddingBottom: theme.SIZES.BASE / 2,
    },
    rows: {
        height: theme.SIZES.BASE * 2,
        paddingHorizontal: theme.SIZES.BASE,
        marginBottom: theme.SIZES.BASE / 2,
    }
});
