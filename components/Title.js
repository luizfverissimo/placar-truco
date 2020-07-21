import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/colors'

const Title = (props) => {
  return (
    <View style={styles.title} >
      <Text style={styles.text} >{props.title}</Text>
      <Text style={styles.subText}>truco</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontFamily: "openSans",
    fontSize: 36,
    color: Colors.colorWhite,
    marginVertical: 0
  },
  subText: {
    fontFamily: "openSans",
    fontSize: 24,
    color: Colors.colorRed,
    marginVertical: 0
  }
})
