import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ScoreScreen from "../screens/ScoreScreen";
import HistoryScreen from "../screens/HistoryScreen";

import Colors from "../constants/colors";

const TabNavigator = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBarOptions={{
          activeBackgroundColor: Colors.bgColor,
          inactiveBackgroundColor: Colors.bgColor,
          activeTintColor: Colors.colorWhite,
          inactiveTintColor: Colors.colorGrey,
          style: styles.tabStyle,
          tabStyle: {borderTopColor: 'transparent'}
        }}
      >
        <TabNavigator.Screen
          name="Placar"
          component={ScoreScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialCommunityIcons
                  name="cards"
                  size={36}
                  color={tabInfo.focused ? Colors.colorWhite : Colors.colorGrey}
                />
              );
            },
            tabBarLabel: (tabInfo) => {
              return (
                <View style={styles.textContainer}>
                <Text
                  style={{
                    fontFamily: "openSans",
                    fontSize: 16,
                    color: tabInfo.focused
                      ? Colors.colorWhite
                      : Colors.colorGrey,
                  }}
                >
                  Placar
                </Text>
                </View>
              );
            },
          }}
        />
        <TabNavigator.Screen
          name="Histórico"
          component={HistoryScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialCommunityIcons
                  name="history"
                  size={36}
                  color={tabInfo.focused ? Colors.colorWhite : Colors.colorGrey}
                />
              );
            },
            tabBarLabel: (tabInfo) => {
              return (
                <View style={styles.textContainer} >
                  <Text
                    style={{
                      fontFamily: "openSans",
                      fontSize: 16,
                      color: tabInfo.focused
                        ? Colors.colorWhite
                        : Colors.colorGrey,
                    }}
                  >
                    Histórico
                  </Text>
                </View>
              );
            },
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  tabStyle: {
    height: 70,
    borderTopWidth: 0
  },
  textContainer: {
    marginVertical: 5
  },
});
