import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Home extends React.Component {

  state = {
    name: ''
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
          <TextInput
          style={styles.nameInput}
          placeholder="John Smiff"
          onChangeText={(text) => {
            this.setState({
              name: text
            });
          }}
          value={this.state.name}
        />
      <TouchableOpacity
        onPress={() => {
          alert(this.state.name)
          // nav to the second screen, and to pass it the name
        }}>
        <Text style={styles.buttonText}>
          Next
        </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20
  }
})

export default Home;
