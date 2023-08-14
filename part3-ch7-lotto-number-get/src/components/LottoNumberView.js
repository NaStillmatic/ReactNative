import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Typography } from './Typography';

export const LottoNumberView = (props) => {

    const getNumberBackgroundColor = (props) => {
        if (props < 11) {
            return 'yellow';
        } else if (props > 10 && props < 21) {
            return 'blue';
        } else if (props > 20 && props < 31) {
            return 'red';
        } else if (props > 30 && props < 41) {
            return 'gray';
        } else {
            return 'green';
        }
    }

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
                        backgroundColor: getNumberBackgroundColor(item), 
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