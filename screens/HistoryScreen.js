import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/colors'

const HistoryScreen = (props) => {
  return (
    <View style={styles.screen} >
      <Text>History Screen</Text>
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgColor
  }
})
