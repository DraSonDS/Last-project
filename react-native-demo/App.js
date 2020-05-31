import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert, Text, ImageBackground } from 'react-native';
import { NavBar } from "./src/components/NavBar";
import MButton from './src/components/MButton';
//import JokeList from './src/components/JokeList'
import JButton from './src/components/JButtton';


export default class Main extends Component {

    render() {
        return (
            <View style={styles.block}>
              <View>
              <NavBar title="Joke time!" />
              </View>
            <JButton />
            </View>
                 );
            }   
        }

const styles = StyleSheet.create({
    block:{
    flex: 1,
    backgroundColor:'#9999ff'
    }


})