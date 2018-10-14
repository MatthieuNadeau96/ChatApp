import React from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Text,
} from 'react-native';

class Chat extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Hello {this.props.userName}
        </Text>
      </View>
    )
  }
}

Chat.defaultProps = {
  userName: 'user1'
};

Chat.propTypes = {
  userName: PropTypes.string
};

export default Chat;
