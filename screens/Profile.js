import React from "react";
import { View, Text } from "react-native";


function Profile() {
    return (
        <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : 'blue' }}>
            <Text style = {{color : 'white', fontWeight : 'bold'}}> PROFILE </Text>
        </View>
    )
}

export default Profile;