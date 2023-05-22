import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { bottomSpace, ITEM_WIDTH } from "./util";

export default ({
    value, 
    onChangeText, 
    palceholder,
    onPressAdd,
}) => {
    return (
        <View style={{
            width: ITEM_WIDTH,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
        }}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={palceholder}
                style={{
                    flex: 1,
                    padding: 5,
                    color: "#595959",
                }}
            />
            <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
                <AntDesign name="plus" size={18} color="#595959" />
            </TouchableOpacity>
        </View>
    )
}