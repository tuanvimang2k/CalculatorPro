import { StyleSheet, View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import Video from 'react-native-video';
const Gallery = ({ navigation }) => {
    const [mediaPaths, setMediaPaths] = useState([]);

    useEffect(() => {
        readSavedMedia();
    }, []);

    const readSavedMedia = async () => {
        try {
            const directoryPath = RNFS.DocumentDirectoryPath;
            const fileNames = await RNFS.readdir(directoryPath);
            const mediaFiles = fileNames.filter(fileName => fileName.endsWith('.jpg') || fileName.endsWith('.mp4'));
            const mediaPaths = mediaFiles.map(fileName => `${directoryPath}/${fileName}`);
            setMediaPaths(mediaPaths);
        } catch (error) {
            console.error('Error reading media list:', error);
        }
    };

    const handleChoosePhoto = () => {
        launchImageLibrary({ mediaType: 'mixed', selectionLimit: 0 }, response => {
            if (!response.didCancel) {
                const selectedMediaUris = response.assets.map(asset => asset.uri);
                saveMediaToApp(selectedMediaUris);
            }
        });
    };

    const saveMediaToApp = async mediaUris => {
        try {
            for (const uri of mediaUris) {
                const newFilePath = RNFS.DocumentDirectoryPath + `/${Date.now()}.${uri.endsWith('.mp4') ? 'mp4' : 'jpg'}`;
                const mediaData = await RNFS.readFile(uri, 'base64');
                await RNFS.writeFile(newFilePath, mediaData, 'base64');
            }
            readSavedMedia();
            console.log('Successfully saved media to app.');
        } catch (error) {
            console.error('Error saving media to app:', error);
        }
    };

    const handleMediaPress = (mediaPath, index) => {
        Alert.alert(
            'Chọn hành động',
            'Bạn muốn làm gì với phương tiện này?',
            [
                {
                    text: 'Xem phương tiện',
                    onPress: () => viewMedia(mediaPath, index),
                },
                {
                    text: 'Xóa phương tiện',
                    onPress: () => confirmDeleteMedia(mediaPath),
                    style: 'destructive',
                },
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };

    const viewMedia = (mediaPath, index) => {
        navigation.navigate('MediaList', { data: mediaPaths, initialIndex: index });
    };

    const confirmDeleteMedia = mediaPath => {
        Alert.alert(
            'Xóa phương tiện',
            'Bạn có chắc chắn muốn xóa phương tiện này?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý',
                    onPress: () => deleteMedia(mediaPath),
                },
            ],
            { cancelable: true }
        );
    };

    const deleteMedia = async mediaPath => {
        try {
            await RNFS.unlink(mediaPath);
            readSavedMedia();
            console.log('Đã xóa phương tiện thành công.');
        } catch (error) {
            console.error('Lỗi khi xóa phương tiện:', error);
        }
    };

    const renderMediaItem = ({ item, index }) => (
        <TouchableOpacity style={styles.mediaContainer} onPress={() => handleMediaPress(item, index)}>
            {item.endsWith('.mp4') ? (
                <Video source={
                    { uri: `file://${item}` }} 
                    style={styles.media}
                    resizeMode="contain"
                    controls={true}
                     />
            ) : (
                <Image source={{ uri: `file://${item}` }} style={styles.media} />
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mediaPaths}
                renderItem={renderMediaItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
            <TouchableOpacity onPress={handleChoosePhoto} style={styles.addButton}>
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default Gallery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mediaContainer: {
        flex: 1,
        margin: 5,
    },
    media: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 8,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        backgroundColor: 'lightblue',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
});
