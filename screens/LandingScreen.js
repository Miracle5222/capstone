import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

const LandingScreen = ({navigation}) => {
    const {theme} = useTheme();
    return (
        <>
        <StatusBar style="light" />
        <View style={[styles.container, {backgroundColor: theme.Bg.primary}]}>
            <View>
                <Text style={[styles.textHeader,{fontSize:theme.Fontsize.large}]}>Basic Programming E-learning Application</Text>
                <Text style={[styles.textParagraph,{fontSize:theme.Fontsize.small}]}>The best app to learn Programming</Text>
            </View>
            <View>
                <Button title="SIGN-IN" style={}/>
            </View>
        </View>
        </>
    )
}

export default LandingScreen

const styles = StyleSheet.compose({

    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textHeader:{
        color: 'white',
        textAlign: 'left',
    },
    textParagraph:{
        color: '#ffffff',
        fontWeight:'100',
        textAlign: 'left',
    } 
    
})