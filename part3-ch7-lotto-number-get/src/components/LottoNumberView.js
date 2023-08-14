import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Typography } from './Typography';

export const LottoNumberView = (props) => {

    const getNumberBackgroundColor = useCallback(() => {
        const randomNumber = Math.floor((Math.random() * 10)) % 6
        switch (randomNumber) {
            case 0: return 'red';
            case 1: return 'blue';
            case 2: return 'gray';
            case 3: return 'green';
            case 4: return 'purple';
            default: return 'black';
        }        
    }, [])

    return (
        <View style={{
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between'
        }}>
            {props.numbers.map((item) =>{
                return (
                    <View style={{ 
                        backgroundColor: getNumberBackgroundColor(), 
                        width:40, 
                        height: 40, 
                        borderRadius:20, 
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Typography fontSize={20} color='white'>{item}</Typography>                                    
                    </View>
                )
            })}                        
        </View>          
    )
}