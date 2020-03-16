import React from "react";
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  //C:/Users/jackh/workspace/App/assets/Messages.json
  //https://reactnative.dev/movies.json

  componentDidMount() {
    return fetch("https://jackrhumphrey.github.io/Data/ContactDetails.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { navigation } = this.props;

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={() => navigation.navigate("Open", { name: item.Name })}
            >
              {item.Name}
            </Text>
          )}
          keyExtractor={({ ID }, index) => ID.toString()}
        />
      </View>
    );
  }
}

ChatScreen.navigationOptions = {
  title: "Chat"
};

const Messages = require("../assets/Messages.json");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
