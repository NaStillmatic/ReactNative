import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';

export const AddLinkScreen = () => {
    const navigation = useNavigation();

    const onPressClose = useCallback(() => {
        navigation.goBack();
    }, [])
    return (
        <View style={{flex: 1}}>
            <Header>
                <Header.Group>
                    <Header.Title title='ADDLINK' />
                </Header.Group>

                <Header.Icon iconName='close' onPress={onPressClose} />                
            </Header>
        </View>
    )
}