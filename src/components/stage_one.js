import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
const StageOne = ({navigation})=>{
    return(
        <>
        <Text style={styles.jlsb}>
                JLSB
            </Text>
        <View style={styles.view}>

            <Image
                source={require('../imgs/imgperfil.png')}
                style={styles.imgPerfil}
                resizeMode="contain" 
            />
            <Text style={styles.hola}>
                Hola! Soy Juan Lluvia 
            </Text>
            <Text style={styles.full}>
              FullStack Developer
            </Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
        </View>
        <View>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        paddingBottom: 100,
    },
    jlsb:{
        backgroundColor: 'black',
        color: 'white'

    },
    imgPerfil: {
            width: 200,
            height: 200,
            borderRadius: 100,
            marginBottom: 30,

    },
    hola: {
        backgroundColor: 'black',
        color: 'white',    
        fontSize: 25},
    full:{
        backgroundColor: 'black',
        color: 'white',
        fontSize: 30
    },
})

export default StageOne;