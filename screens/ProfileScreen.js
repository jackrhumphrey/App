import React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text>Top</Text>
      </View>
      <View style={styles.details}>
        <Text>Details</Text>
      </View>
      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </ScrollView>
  );
}

ProfileScreen.navigationOptions = {
  title: "Profile"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  top: {},
  details: {},
  bottom: {}
});