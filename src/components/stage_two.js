import React, { Component } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View , Linking, Image } from 'react-native';
const StageTwo = ()=>{

    const linkedInURL = 'https://www.linkedin.com/in/jlsb/';
    const gitHubURL = 'https://github.com/JuanSBdev';

    const handleLinkedInLink = () => {
      Linking.openURL(linkedInURL).catch((err) =>
        console.error('Error al abrir el enlace: ', err)
      );
    };
    const handleGitHubLink = () => {
      Linking.openURL(gitHubURL).catch((err) =>
        console.error('Error al abrir el enlace: ', err)
      );
    };
    return(
        <>
        <View style={styles.container}>
           
            <TouchableOpacity onPress={handleLinkedInLink}>
                <Image  source={{ uri: 'https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png' }}
                 style={styles.imgLinkedIn}
                resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGitHubLink}>
                
                <Image  source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_1280.png' }}
                 style={styles.imgGit}
                resizeMode="contain" />
          
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
},
imgLinkedIn:{
    width: 100,
    height: 50
},
imgGit:{
    width: 100,
    height: 100
}
})
export default StageTwo;