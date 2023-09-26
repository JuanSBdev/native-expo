import React from 'react'
import { StyleSheet, Text, View, Button, Imag} from 'react-native';

export default function Proyectos() {
  return (
    <View  style={styles.view}> 
        <Text style={styles.test}>
         deploy in progress...
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    view:{
        flex:1,
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        paddingTop: 120,
        paddingBottom: 150,
        color:'white'
    },
    test:{
        color: 'white'
    }
})