import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { runParacticeDayjs } from './src/practice-dayjs';
import { getCalendarColumns, getDayColor, getDayText } from './src/util';
import dayjs from 'dayjs';
import { FlatList } from 'react-native';
import Margin from './src/Margin';
import { SimpleLineIcons } from '@expo/vector-icons'; 


const columnSize = 35;

const Column = ({
  text,
  color, 
  opacity
}) => {
  return (
    <View style={{
      width: columnSize, 
      height: columnSize, 
      justifyContent: "center", 
      alignItems: "center",
      }}>
      <Text style={{ color, opacity }}>{text}</Text>
    </View>    
  )
}

const ArrowButton = ({ iconName, onPress }) => {
  
  return (
    <TouchableOpacity onPress={{onPress}} style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <SimpleLineIcons name={iconName} size={15} color="black" />
    </TouchableOpacity>
  )
}

export default function App() {

  const now = dayjs();
  const columns = getCalendarColumns(now);

  const listHeaderComponent = () =>  {

    const currentDateText = dayjs(now).format("YYYY.MM.DD.");    

    return (
      <View>
        <Margin height={15} />

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>          
          <ArrowButton iconName="arrow-left" onPress={() => {}}  />          

          <TouchableOpacity>
            <Text style={{ fontSize: 20, color:"#404040", textAlign: "center" }}>{currentDateText}</Text>          
          </TouchableOpacity>
        
          <ArrowButton iconName="arrow-right" onPress={() => {}} />          
        </View>
        <Margin height={15} />
        
        <View style={{ flexDirection: "row" }}>
        {[0, 1, 2, 3, 4, 5, 6].map(day => {
          const dayText = getDayText(day);
          const color = getDayColor(day);
          return (
            <Column key={`day-${day}`} text={dayText} color={color} opacity={1} />
          )
        })}
        </View>    
      </View>            
    )
  }
  

  const renderItem = ({ item: date }) => {    
    const dateText = dayjs(date).get('date');
    const day = dayjs(date).get('day');
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(now, 'month');

    return (
        <Column text={dateText} color={color} opacity={isCurrentMonth ? 1 : 0.4} />
    )
  }

  // useEffect(() => {
  //   runParacticeDayjs();
  //   console.log('columns', columns);
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={columns}
        keyExtractor={(_, index) => `column-${index}`}
        numColumns={7}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
      />      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
