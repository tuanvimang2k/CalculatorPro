import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native'
import React ,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const More = () => {
  const ButtonItem = ({ iconName, iconType, text, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      {iconType === 'AntDesign' && <AntDesign name={iconName} size={30} color="#ff9500" />}
      {iconType === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={iconName} size={30} color="#ff9500" />}
      <View style={styles.viewtxtItem}>
        <Text style={styles.txtItem}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  const data = [
    { iconName: 'staro', iconType: 'AntDesign', text: 'Rate and Review', onPress: () => console.log('Rate and Review')},
    { iconName: 'infocirlceo', iconType: 'AntDesign', text: 'Licence Agrement', onPress: () =>  console.log('Licence Agrement') },
    { iconName: 'Safety', iconType: 'AntDesign', text: 'Privacy Policy', onPress: () => console.log('Privacy Policy') },
    { iconName: 'infocirlceo', iconType: 'AntDesign', text: 'About', onPress: () => console.log('About') },
  ];
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Text
        style={{textAlign: 'center', fontSize: 20, marginTop: 20, color: '#ff9500'}}
         >More</Text>
      </View>
      {data.map((item, index) => (
        <ButtonItem key={index} iconName={item.iconName} iconType={item.iconType} text={item.text} onPress={item.onPress} />
      ))} 
    </View>
  )
}

export default More

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
  },
  btnGetFullVersion: {
    backgroundColor: '#ff9500',
    padding: 10,
    borderRadius: 10,
    width: '50%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  viewtxtItem: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000000',
    marginLeft: 20,
    justifyContent: 'center'
  }
})