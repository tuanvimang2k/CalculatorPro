import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
const Setting = () => {

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
    { iconName: 'lock1', iconType: 'AntDesign', text: 'Security Locks', onPress: () => console.log('Security Locks')},
    { iconName: 'lock-reset', iconType: 'MaterialCommunityIcons', text: 'Password Recovery', onPress: () => {} },
    { iconName: 'smileo', iconType: 'AntDesign', text: 'Hack Monitoring', onPress: () => console.log('Hack Monitoring pressed') },
    { iconName: 'bells', iconType: 'AntDesign', text: 'Panic Switch', onPress: () => console.log('Panic Switch pressed') },
    { iconName: 'aliwangwang-o1', iconType: 'AntDesign', text: 'Disguise Mode', onPress: () => console.log('Disguise Mode pressed') },
  ];
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <View style={styles.header}>
          <Text>Calculator # - Vault</Text>
          <Text>Acess full premium featues</Text>
          <View style={{ alignItems: 'center', paddingTop: 10 }}>
            <TouchableOpacity
              style={styles.btnGetFullVersion}
            >
              <Text>Get Full Verion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {data.map((item, index) => (
        <ButtonItem key={index} iconName={item.iconName} iconType={item.iconType} text={item.text} onPress={item.onPress} />
      ))}
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {

    paddingHorizontal: 10,
    width: '90%',
    height: 100,
    borderWidth: 0.5,
    borderRadius: 10
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