import React from "react";
import { Switch, Text, ScrollView, View, StyleSheet } from "react-native";

export default function ShareScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.code}>
          <Text>Code</Text>
        </View>
      </View>
      <View style={styles.mode}>
        <Text>Private</Text>
        <Text>Work</Text>
        <Text>Custom</Text>
      </View>
      <View style={styles.inner}>
        <View style={styles.toggle}>
          <Text>Name</Text>
          <Switch />
        </View>
        <View style={styles.toggle}>
          <Text>Name</Text>
          <Switch />
        </View>
        <View style={styles.toggle}>
          <Text>Name</Text>
          <Switch />
        </View>
        <View style={styles.toggle}>
          <Text>Name</Text>
          <Switch />
        </View>
        <View style={styles.toggle}>
          <Text>Name</Text>
          <Switch />
        </View>
        <View style={styles.toggle}>
          <Text>Name</Text>
          <Switch />
        </View>
        <View style={styles.toggle}>
          <Text>Name</Text>
          <Switch />
        </View>
        <View style={styles.toggle}>
          <Text>Name</Text>
          <Switch />
        </View>
      </View>
    </ScrollView>
  );
}

ShareScreen.navigationOptions = {
  title: "Share"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  inner: {
    margin: 25
  },
  code: {
    flex: 1,
    alignItems: "center",
    padding: 50
  },
  mode: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  toggle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
