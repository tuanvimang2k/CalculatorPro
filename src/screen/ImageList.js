import React from 'react';
import { View, FlatList, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const ImageList = ({ route, navigation }) => {
    const { data, initialIndex } = route.params;
    const { width, height } = Dimensions.get('window');

    const renderItem = ({ item }) => {
        return (
            <View style={{ width, height }}>
                <Image
                    source={{ uri: `file://${item}` }}
                    style={{ width, height, resizeMode: 'contain' }}
                />
            </View>
        );
    };

    const getItemLayout = (data, index) => ({
        length: width, // Chiều dài của mỗi mục là chiều rộng của màn hình
        offset: width * index, // Vị trí của mục trong danh sách
        index,
    });

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <AntDesign name="leftcircle" size={35} color="black" />
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                keyExtractor={(item, index) => index.toString()}
                initialScrollIndex={initialIndex}
                getItemLayout={getItemLayout} // Định nghĩa phương thức getItemLayout
            />
        </View>
    );
};

export default ImageList;
