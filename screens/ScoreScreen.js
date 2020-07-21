import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/colors'

const ScoreScreen = (props) => {
  return (
    <View style={styles.screen} >
      <Text>Score Screen</Text>
    </View>
  )
}

export default ScoreScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgColor
  }
})
