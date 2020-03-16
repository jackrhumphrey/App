import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function ContactsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jack']},
          ]}
          renderItem={({item}) => <Text style={styles.item} onPress={() => navigation.navigate('Profile')}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

ContactsScreen.navigationOptions = {
  title: "Contacts"
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
