import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { HomeContext } from '../context/HomeProvider';
import { getUserById, getAllUsers } from '../service/user';
const Cloud = () => {
  const { user, premium } = useContext(HomeContext);
  const [txtEmail, setTxtEmail] = useState('default email');
  const [coin, setCoin] = useState(0);
  useEffect(() => {
    console.log('user cloud', user);
    onGetUser()
  }, [])
  const onGetUser = async () => {
    const response = await getUserById(user);
    console.log('response user respone', response);
    if (response) {
      setTxtEmail(response.user.email);
      setCoin(response.user.coin);
    }

  }
  const { logout } = useContext(HomeContext);
  const ButtonItem = ({ iconName, iconType, text, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      {iconType === 'AntDesign' && <AntDesign name={iconName} size={30} color="#ff9500" />}
      {iconType === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={iconName} size={30} color="#ff9500" />}
      <View style={styles.viewtxtItem}>
        <Text style={styles.txtItem}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  const HandleLogout = () => {
    Alert.alert(
      "Confirmation",
      "Do you want to log out?",
      [
        {
          text: "No",
          style: "cancel"
        },
        { text: "Yes", onPress: () => logout() }
      ],
      { cancelable: false }
    );
  };
  const data = [
    { iconName: 'staro', iconType: 'AntDesign', text: 'Rate and Review', onPress: () => console.log('Rate and Review') },
    { iconName: 'infocirlceo', iconType: 'AntDesign', text: 'Licence Agrement', onPress: () => console.log('Licence') },
    { iconName: 'Safety', iconType: 'AntDesign', text: 'Privacy Policy', onPress: () => console.log('Privacy Policy') },
    { iconName: 'logout', iconType: 'AntDesign', text: 'Logout', onPress: HandleLogout },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
          <Image style={styles.headerImg} source={require('../../assets/imgs/avatar_icon.png')} />
          <View>
            {/* <Text style={styles.txtHeader}>Tuấn Vĩ</Text> */}
            <Text style={styles.txtHeader}>{txtEmail}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {premium == 0 ? (
            <TouchableOpacity style={styles.btnGetFullVersion}>
              <Text style={{ color: '#fff', textAlign: 'center' }}>Get Full Version</Text>
            </TouchableOpacity>
          ) : (
            <FontAwesome5 name="coins" color={'#F7C117'} size={30} />
          )}
        </View>
      </View>

      <View style={styles.container}>
        {data.map((item, index) => (
          <ButtonItem key={index} iconName={item.iconName} iconType={item.iconType} text={item.text} onPress={item.onPress} />
        ))}
      </View>
    </View>
  )
}

export default Cloud

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    marginTop: 30,

  },
  headerImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    marginRight: 10,
  },
  txtHeader: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold'
  },
  btnGetFullVersion: {
    backgroundColor: '#ff9500',
    // padding: 10,
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