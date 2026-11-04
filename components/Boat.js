import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({name, description, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text></Text>
            {/*//bring the content down by 1 line so it doesn't get blocked by the notch*/}

            {/*Styling the ICON using FontAwesome6*/}
            <Text>
                <FontAwesome6
                    name={icon_name}
                    size={30}
                    color={icon_color}
                />
            </Text>
            {/*Styling the 'Boat:{name}' --> size:20, bold, color:blue, font:Roboto*/}
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'blue',
                fontFamily: 'Roboto',
            }}>
                Boat: {name}
            </Text>

            {/*Lastly Description comes next, right after the Boat:{name} (DIDN'T DO STYLING FOT THIS ONE AS ITS ALOT*/}
            <Text>{description}</Text>

            {/*IMAGES comes LAST, right below the names, description etc.*/}
            <Image
                source={poster}
                style={{ width: 400, height: 200 }}
            />
        </View>
    );
};

export default Boat;