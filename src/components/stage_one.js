import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import StageTwo from './stage_two';
import Proyectos from './Proyectos';
const StageOne = ({navigation})=>{
    return(
        <>
        <ScrollView>

        {/* <Text style={styles.jlsb}>
                JLSB
            </Text> */}
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
            {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
        /> */}
            <StageTwo/>
        </View>
        <View style={styles.redesContainer}>
            <Proyectos style={styles.redes}/>

        </View>
</ScrollView>
        </>
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
    },
    jlsb:{
        backgroundColor: 'black',
        color: 'white'

    },
    imgPerfil: {
            width: 200,
            height: 200,
            borderRadius: 100,
            marginTop: 40,
            marginBottom: 30,

    },
    hola: {
        backgroundColor: 'black',
        color: 'white',    
        fontSize: 25},
    full:{
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20
    },
    redesContainer:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row', // Establece la dirección a "row"
        flexWrap: 'nowrap',  // Evita el ajuste de línea
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
    },
    redes:{
        backgroundColor: 'black',
        color: 'white',
    }
})

export default StageOne;