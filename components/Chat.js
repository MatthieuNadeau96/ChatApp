import React from 'react';
import PropTypes from 'prop-types';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

class Chat extends React.Component {

  state = {
    messages: []
  };

  componentWillMount() {

  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => Backend.sendMessage(message)}
        user={{
          _id: Backend.getUid(),
          name: this.props.userName
        }}
      />
    )
  }
}

componentDidMount() {
  Backend.loadMessages((message) => {
    this.setState((prevState) => {
      return {
        messages: GiftedChat.append(prevState.messages, message)
      }
    })
  })
}

componentWillUnMount() {
  Backend.closeChat();
}

Chat.defaultProps = {
  userName: 'user1'
};

Chat.propTypes = {
  userName: PropTypes.string
};

export default Chat;
