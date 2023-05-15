import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";

const bottomSpace = getBottomSpace(); // not working

export default (props) => {
    const insets = useSafeAreaInsets();
    return props.isOpened ? (                
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
            {props.data.map((item, index) => (
                <View key={index}>                    
                    <Profile                    
                    uri={item.uri}
                    name={item.name}
                    introduction={item.introduction}
                    />
                    <Margin height={13} />
                </View>                
            ))}
        </ScrollView>
    ) : null;
};