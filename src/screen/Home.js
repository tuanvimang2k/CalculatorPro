import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
const Home = ({ navigation }) => {
    const handlePhotos = () => {
        console.log('Photos')
        const saveImageToApp = async uri => {
            try {
                const newFilePath = RNFS.DocumentDirectoryPath + `/${Date.now()}.jpg`;
                const imageData = await RNFS.readFile(uri, 'base64');
                await RNFS.writeFile(newFilePath, imageData, 'base64');
                console.log('Đã lưu ảnh vào ứng dụng thành công.');
            } catch (error) {
                console.error('Lỗi khi lưu ảnh vào ứng dụng:', error);
            }
        };
        const options = {
            mediaType: 'photo',
            quality: 0.5,
        };

        launchCamera(options, response => {
            if (!response.didCancel) {
                const uri = response.assets[0].uri;
                console.log('uri', uri)
                saveImageToApp(uri);
            }
        });
    }
    const handleVideos = () => { }
    const handleGallery = () => {
        console.log('Gallery')
        navigation.navigate('Gallery')
    }
    const data = [
        { id: 1, name: "Photo", iconName: "camerao", color: "red", onPress: handlePhotos },
        { id: 2, name: "Video", iconName: "videocamera", color: "blue", onPress: () => console.log('Video') },
        { id: 3, name: "Gallery", iconName: "picture", color: "green", onPress: handleGallery },
        { id: 4, name: "Audios", iconName: "sound", color: "orange", onPress: () => console.log('Audios') },
        { id: 5, name: "Document", iconName: "filetext1", color: "black", onPress: () => console.log('Document') },
        { id: 6, name: "Contacts", iconName: "contacts", color: "pink", onPress: () => console.log('Contacts') },
        { id: 7, name: "Wallet", iconName: "wallet", color: "purple", onPress: () => console.log('Wallet') },
        { id: 8, name: "Notes", iconName: "book", color: "blue", onPress: () => console.log('Notes') },
        { id: 9, name: "To Dos", iconName: "profile", color: "green", onPress: () => console.log('To Dos') },
        { id: 10, name: "Wifi", iconName: "wifi", color: "yellow", onPress: () => console.log('Wifi') },

    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={item.onPress}
                style={styles.item}>
                <AntDesign name={item.iconName} color={item.color} size={40} />
                <Text style={styles.title}>{item.name}</Text>

            </TouchableOpacity>
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
                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 20, color: 'white' }}>Calculator# - Vault</Text>
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
