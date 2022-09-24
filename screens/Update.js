import React from "react";
import { View, Text } from "react-native";


function Update() {
    return (
        <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : 'blue' }}>
            <Text style = {{color : 'white', fontWeight : 'bold'}}> UPDATE </Text>
        </View>
    )
}

export default Update;