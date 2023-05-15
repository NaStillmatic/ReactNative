import { Image, Text, View } from "react-native";

import Margin from "./Margin";
export default (props) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image source={{ uri: props.uri }} style={{ width: 50, height: 50, borderRadius: 20 }} />
            <View style={{}}>
                <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 10 }}>{props.name}</Text>
                <Margin height={6} />
                <Text style={{ fontSize: 12, color: "gray", marginLeft: 10 }}>{props.introduction}</Text>
            </View>
        </View>
    );
};