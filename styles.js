import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row', 
      },
      box1:{
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      },
      box2:{
        width: 100,
        height: 100,
        backgroundColor: '#7ce0f9',
        justifyContent: 'center',
        alignItems: 'center',
      },
      box3:{
        width: 100,
        height: 100,
        backgroundColor: '#ff637c',
        justifyContent: 'center',
        alignItems: 'center',
      },
})
export default styles;