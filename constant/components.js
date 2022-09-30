import React from 'react';
import { View } from 'react-native';
import { screenDimesions } from './styles';

export default function DashedBorder(){
    let elements = [];

    for (let index = 0; index < (screenDimesions.width / 10); index++) {
        elements.push(<View 
                            key={index + 1} 
                            style={{ width: 10, 
                                     height: 2, 
                                     backgroundColor: '#b7b7b7', 
                                     marginLeft: index == 0 ? 0 : 5 }}></View>)
    }
    return(
        <View style={{ width: screenDimesions.width, height: 2, flex: 1, flexDirection: 'row' }}>
            {elements}
        </View>
    )
}