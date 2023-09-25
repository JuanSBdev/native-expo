
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {MyContext} from './src/context'
import stageOne from './src/components/stage_one';
import stageTwo from './src/components/stage_two';


export default class Index extends Component {
  static contextType = MyContext;
  render() {
    return (
          <View style={styles.container}>
            <stageOne></stageOne>
              {
                this.context.state.stage === 1 ? (
                    <>
                    <stageOne></stageOne>
                    <Text>asd</Text>
                    </>
                  ): (
                    <stageTwo></stageTwo>
                  )

              }            
            <StatusBar style="auto" />
          </View>
        );
      }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
    alignItems: 'center',
    justifyContent: 'center',
  },
});