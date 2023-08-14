import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';

export const HomeScreen = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title='Home'></Header.Title>
            </Header>
        </View>
    )
}