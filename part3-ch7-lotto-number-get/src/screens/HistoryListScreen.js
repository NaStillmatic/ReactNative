import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Header } from '../components/Header/Header';
import { Typography } from '../components/Typography';
import { LottoNumberView } from '../components/LottoNumberView';
import { useSelector } from 'react-redux';

export const HistoryListScreen = (props) => {
    const history = useSelector((state)=> state.numbers.history);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title='History'></Header.Title>
            </Header>

            <FlatList
                style={{flex:1}}
                data={history}
                contentContainerStyle={{
                    paddingTop: 24,
                    paddingBottom: 24
                }}
                renderItem={({item}) => {
                    return (
                        <View style={{
                            paddingHorizontal: 20,
                            paddingVertical: 12,
                            marginHorizontal: 24,
                            height: 120,
                            backgroundColor: 'white'
                        }}>
                            <Typography fontSize={16}>{item.date}.</Typography>
                            <LottoNumberView numbers={item.numbers} />
                        </View>
                    )
            }} />
        </View>
    )
}
