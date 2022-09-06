import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default function Square ({number, color}) {
    return (
      <View style={styles.container}>
        <View style={{
          width:100,
          height:100,
          backgroundColor: color,
          justifyContent: 'center',
          alignItems: 'center',
        }}>Square {number}</View>
      </View>
    )
  
}
