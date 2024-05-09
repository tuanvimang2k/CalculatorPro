import React, { useState } from 'react';
import { View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Video from 'react-native-video';

const VideoList = ({ route, navigation }) => {
    const { data, initialIndex } = route.params;
    const { width, height } = Dimensions.get('window');
    const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát video

    const renderItem = ({ item }) => {
        return (
            <View style={{ width, height }}>
                <Video
                    source={{ uri: `file://${item}` }}
                    style={{ width, height }}
                    resizeMode="contain"
                    controls={false} // Kiểm soát việc hiển thị controls
                    // paused={!isPlaying} // Kiểm soát việc phát video dựa trên trạng thái phát
                    // onLoad={() => setIsPlaying(true)} // Khi video được load, tự động phát
                />
            </View>
        );
    };

    const getItemLayout = (data, index) => ({
        length: width,
        offset: width * index,
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
                getItemLayout={getItemLayout}
            />
        </View>
    );
};

export default VideoList;
