import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Spacer } from '../components/Spacer';
import WebView from 'react-native-webview';

export const NewsDetailScreen = () => {
    const navigation = useNavigation();
    const routes = useRoute();

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, [])
    console.log(routes.params);
    return (
        <View style={{flex:1}}>
            <Header>
                <Header.Group>
                    <Header.Icon iconName='arrow-back' onPress={onPressBack}></Header.Icon>
                    <Spacer horizontal space={12} />
                    <View style={{maxWidth: 200}}>
                        <Header.Title title='NEWS_DETAIL'></Header.Title>
                    </View>
                </Header.Group>
            </Header>

            <WebView
                style={{flex:1}}
                source={{uri:routes.params.newsItem.link}}
            />            
        </View>
    )
}

