import { useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";

import { friendProfiles, myProfile } from "./src/data";
import Header from "./src/Header";
import Profile from "./src/Profile";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import TabBar from "./src/TabBar";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  
  const [isOpened, setIsOpened] = useState(false);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);  

  const onPressArrow = () => {    
    setIsOpened(!isOpened);
  }

  const itemSeparatorComponent = () => <Margin height={13} />
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />            
    </View>
  )

  const listHeaderComponent = () => (
    <View style={{ backgroundColor:"white" }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />
      <Division /> 
      <Margin height={12} />
      <FriendSection 
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  )

  const listFooterComponent = () => <Margin height={10} />

  return (
    <View style={styles.container}>
      <FlatList
        data={ isOpened ? friendProfiles : [] }
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={(item, index) => index}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={itemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}   
        ListFooterComponent={listFooterComponent}
      />
      <TabBar 
        selectedTabIdx={selectedTabIdx} 
        setSelectedTabIdx={setSelectedTabIdx}        
      />                   
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        paddingHorizontal: 15,
      }}>

        <FriendList data={friendProfiles} isOpened={isOpened} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#fff",
    paddingTop: 50, // iPhone 14에서 statusBarHeight 장상동작 하지 않음 
  }
})
