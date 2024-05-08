import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image, Alert, Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Video from 'react-native-video';
const VideoScreen = ({ navigation }) => {
    const [videoPaths, setVideoPaths] = useState([]);

    useEffect(() => {
        readSavedVideos();
    }, []);

    const readSavedVideos = async () => {
        try {
            const directoryPath = RNFS.DocumentDirectoryPath;
            const fileNames = await RNFS.readdir(directoryPath);
            const videoFiles = fileNames.filter(fileName => fileName.endsWith('.mp4'));
            const videoPaths = videoFiles.map(fileName => `${directoryPath}/${fileName}`);
            setVideoPaths(videoPaths);
        } catch (error) {
            console.error('Lỗi khi đọc danh sách video:', error);
        }
    };

    const handleChooseVideo = () => {
        const options = {
            mediaType: 'video',
        };

        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                const videoUri = response.assets[0].uri;
                saveVideoToApp(videoUri);
            }
        });
    };

    const saveVideoToApp = async videoUri => {
        try {
            const newFilePath = RNFS.DocumentDirectoryPath + `/${Date.now()}.mp4`;
            await RNFS.copyFile(videoUri, newFilePath);
            readSavedVideos();
            console.log('Đã lưu video vào ứng dụng thành công.');
        } catch (error) {
            console.error('Lỗi khi lưu video vào ứng dụng:', error);
        }
    };

    const handleVideoPress = (videoPath, index) => {
        Alert.alert(
            'Chọn hành động',
            'Bạn muốn làm gì với video này?',
            [
                {
                    text: 'Phát video',
                    onPress: () => playVideo(index),
                },
                {
                    text: 'Xóa video',
                    onPress: () => confirmDeleteVideo(videoPath),
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

    const playVideo = (index) => {
        console.log('play video')
        navigation.navigate('Video'
            // , { data: videoPaths, initialIndex: index }
        );
    };

    const confirmDeleteVideo = videoPath => {
        Alert.alert(
            'Xóa video',
            'Bạn có chắc chắn muốn xóa video này?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý',
                    onPress: () => deleteVideo(videoPath),
                },
            ],
            { cancelable: true }
        );
    };

    const deleteVideo = async videoPath => {
        try {
            await RNFS.unlink(videoPath);
            readSavedVideos();
            console.log('Đã xóa video thành công.');
        } catch (error) {
            console.error('Lỗi khi xóa video:', error);
        }
    };

    const renderVideoItem = ({ item, index }) => (
        <TouchableOpacity style={styles.videoContainer} onPress={() => handleVideoPress(item, index)}>
            {/* Hiển thị hình ảnh đại diện của video */}
            <Video
                    source={{ uri: `file://${item}` }}
                    style={styles.videoThumbnail}
                    resizeMode="contain"
                    controls={false}
                />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={videoPaths}
                renderItem={renderVideoItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
            <TouchableOpacity onPress={handleChooseVideo} style={styles.addButton}>
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    videoContainer: {
        flex: 1,
        margin: 5,
    },
    videoThumbnail: {
        width: '100%',
        aspectRatio: 1, // Đảm bảo tỷ lệ khung hình là 1:1
        borderRadius: 8,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        backgroundColor: '#ff9500',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
});

export default VideoScreen;
