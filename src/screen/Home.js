import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Home = () => {
    const data = [
        { id: 1, name: "Photo", iconName: "camerao", color: "red" },
        { id: 2, name: "Video", iconName: "videocamera", color: "blue" },
        { id: 3, name: "Gallery", iconName: "picture", color: "green" },
        { id: 4, name: "Audios", iconName: "sound", color: "orange" },
        { id: 5, name: "Document", iconName: "filetext1", color: "black" },
        { id: 6, name: "Contacts", iconName: "contacts", color: "pink" },
        { id: 7, name: "Wallet", iconName: "wallet", color: "purple"},
        { id: 8, name: "Notes", iconName: "book", color: "blue" },
        { id: 9, name: "To Dos", iconName: "profile", color: "green" },
        { id: 10, name: "Wifi", iconName: "wifi", color: "yellow"}

    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <AntDesign name={item.iconName} color={item.color} size={40} /> 
                <Text style={styles.title}>{item.name}</Text>
                
            </View>
        );
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
               
            
            }}> 
                <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20,color:'white'}}>Calculator# - Vault</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2} // Chia thành hai cột
                contentContainerStyle={styles.flatListContainer} 
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        width: "100%",
        height: "20%",
        backgroundColor: '#ff9500',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        position: 'absolute',
    },
    flatListContainer: {
        paddingTop: 25,
    },
    item: {
        flex: 1,
        borderWidth: 0.5,
        borderRadius: 10,
        height: 150,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    
});
