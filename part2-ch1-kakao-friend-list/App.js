import { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";

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

  return (      
    <View style={styles.container}>
      <View style={{ 
        flex:1,
        paddingHorizontal: 15        
      }}>        
        <Header />

        <Margin height={10} />

        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />

        <Margin height={15} />
        <Division /> 
        <Margin height={12} />
        <FriendSection 
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />
        <FriendList
          data={friendProfiles}
          isOpened={isOpened}
        />
      </View>
      <TabBar 
        selectedTabIdx={selectedTabIdx} 
        setSelectedTabIdx={setSelectedTabIdx} 
      />
    </View>                        
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#fff",
    paddingTop: 50, // iPhone 14에서 statusBarHeight 장상동작 하지 않음 
  }
})
