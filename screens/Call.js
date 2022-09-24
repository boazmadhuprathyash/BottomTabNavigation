import React from "react";
import { View, Text } from "react-native";


function Call() {
    return (
        <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : 'blue' }}>
            <Text style = {{color : 'white', fontWeight : 'bold'}}> CALL </Text>
        </View>
    )
}

export default Call;