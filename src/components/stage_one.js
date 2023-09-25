import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
const StageOne = ({navigation})=>{
    return(
        <>
        <View>
            <Text>
                STAGE ONE!
            </Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
        </View>
        </>
    )
}
export default StageOne;