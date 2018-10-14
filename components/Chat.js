import React from 'react';
import PropTypes from 'prop-types';

import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends React.Component {

  state = {
    messages: []
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
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
