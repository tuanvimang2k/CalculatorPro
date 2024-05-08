import { StyleSheet, View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const Gallery = ({ navigation }) => {
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {
        readSavedImages();
    }, []);

    const readSavedImages = async () => {
        try {
            const directoryPath = RNFS.DocumentDirectoryPath;
            const fileNames = await RNFS.readdir(directoryPath);
            const imageFiles = fileNames.filter(fileName => fileName.endsWith('.jpg'));
            const imagePaths = imageFiles.map(fileName => `${directoryPath}/${fileName}`);
            setImagePaths(imagePaths);
        } catch (error) {
            console.error('Lỗi khi đọc danh sách ảnh:', error);
        }
    };

    const handleChoosePhoto = () => {
        launchImageLibrary({ mediaType: 'photo', selectionLimit: 0 }, response => {
            if (!response.didCancel) {
                const selectedImageUris = response.assets.map(asset => asset.uri);
                saveImagesToApp(selectedImageUris);
            }
        });
    };

    const saveImagesToApp = async imageUris => {
        try {
            for (const uri of imageUris) {
                const newFilePath = RNFS.DocumentDirectoryPath + `/${Date.now()}.jpg`;
                const imageData = await RNFS.readFile(uri, 'base64');
                await RNFS.writeFile(newFilePath, imageData, 'base64');
            }
            readSavedImages();
            console.log('Đã lưu các ảnh vào ứng dụng thành công.');
        } catch (error) {
            console.error('Lỗi khi lưu các ảnh vào ứng dụng:', error);
        }
    };

    const handleImagePress = (imagePath, index) => {
        Alert.alert(
            'Chọn hành động',
            'Bạn muốn làm gì với ảnh này?',
            [
                {
                    text: 'Xem ảnh',
                    onPress: () => viewImage(index),
                },
                {
                    text: 'Xóa ảnh',
                    onPress: () => confirmDeleteImage(imagePath),
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

    const viewImage = index => {
        navigation.navigate('ImageList', { data: imagePaths, initialIndex: index });
    };

    const confirmDeleteImage = imagePath => {
        Alert.alert(
            'Xóa ảnh',
            'Bạn có chắc chắn muốn xóa ảnh này?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý',
                    onPress: () => deleteImage(imagePath),
                },
            ],
            { cancelable: true }
        );
    };

    const deleteImage = async imagePath => {
        try {
            await RNFS.unlink(imagePath);
            readSavedImages();
            console.log('Đã xóa ảnh thành công.');
        } catch (error) {
            console.error('Lỗi khi xóa ảnh:', error);
        }
    };

    const renderImageItem = ({ item, index }) => (
        <TouchableOpacity style={styles.imageContainer} onPress={() => handleImagePress(item, index)}>
            <Image source={{ uri: `file://${item}` }} style={styles.image} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={imagePaths}
                renderItem={renderImageItem}
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
    imageContainer: {
        flex: 1,
        margin: 5,
    },
    image: {
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
