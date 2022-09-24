import React from "react";
import { View, Text } from "react-native";


function Home() {
    return (
        <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : 'blue' }}>
            <Text style = {{color : 'white', fontWeight : 'bold'}}> HOME SCREEN </Text>
        </View>
    )
}

export default Home;