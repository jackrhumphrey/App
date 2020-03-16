import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  ScrollView,
  View,
  StyleSheet,
  FlatList
} from "react-native";

export default class OpenScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name")
    };
  };

  componentDidMount() {
    return fetch("https://jackrhumphrey.github.io/Data/Messages.json")
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
    const name = navigation.getParam("name", "No name");
    // const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <FlatList
            style={styles.messages}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View>
                {item.Sender == 1 ? (
                  <Text style={styles.messageSent}>{item.Message}</Text>
                ) : (
                  <Text style={styles.messageReceived}>
                    {item.Message}
                    {/* {JSON.stringify(name)} */}
                  </Text>
                )}
              </View>
            )}
            keyExtractor={({ id }, index) => id.toString()}
          />

          <KeyboardAvoidingView behavior="padding" style={styles.bottom}>
            <TextInput style={styles.input} placeholder="Text input" />
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end"
  },
  messages: {
    margin: 5,
    flex: 1
  },
  messageSent: {
    margin: 5,
    padding: 10,
    borderRadius: 100,
    alignSelf: "flex-end",
    color: "#fff",
    backgroundColor: "#4da0f8"
  },
  messageReceived: {
    padding: 10,
    margin: 5,
    borderRadius: 100,
    alignSelf: "flex-start",
    color: "#fff",
    backgroundColor: "#333"
  },
  bottom: {
    justifyContent: "flex-end",
    margin: 25,
    padding: 0
  },
  input: {
    margin: -10
  }
});
