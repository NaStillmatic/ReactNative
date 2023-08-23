import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button';
import { Typography } from '../components/Typography';
import { Spacer } from '../components/Spacer';

export const LinkListScreen = () => {
    const navigation = useNavigation();

    const onPressButon = useCallback(() => {
        navigation.navigate('LinkDetail')
    }, [])

    const onPressAddButton = useCallback(() => {
        navigation.navigate('AddLink')
    }, [])
    return (
        <View style={{flex:1, }}>
            <Header>
                <Header.Group>
                    <Header.Title title='Link List' />
                </Header.Group>
            </Header>
            <View style={{flex: 1}}>
                <Button onPress={onPressButon}>
                    <Typography>LINK DETAIL로 이동하기</Typography>
                </Button>

                <Spacer space={12} />

                <Button onPress={onPressAddButton}>
                    <Typography>링크 등록하기로 이동하기</Typography>
                </Button>
            </View>
        </View>
    )
}
