import React from 'react';
import styled from 'styled-components';
import bg from './img/bg.jpg'
import { InputContainer } from './components/InputContainer'

const AppContainer = styled.section`
height: 100vh;
width: 500px;
margin: auto;
display: flex;
flex-direction: column;
box-sizing: border-box;
`

const MessageContainer = styled.section`
display: flex;
flex-direction: column-reverse;
flex-grow: 1;
background-image: url(${bg});
overflow-y: auto;
`

let MessageBox

let Autor

export default class App extends React.Component {

  state = {
    messages: [
      {
        user: 'Bob',
        text: 'Oii'
      },
      {
        user: 'Eu',
        text: 'hello'
      }
    ],
    userValue: '',
    messageValue: ''
  }

  onChangeUserValue = (event) => {
    this.setState({
      userValue: event.target.value
    })
  }

  onChangeMessageValue = (event) => {
    this.setState({
      messageValue: event.target.value
    })
  }

  sendMessage = () => {
    if (this.state.userValue && this.state.messageValue) {
      const NewMessage = {
        user: this.state.userValue,
        text: this.state.messageValue
      }


      this.setState({ messages: [NewMessage, ...this.state.messages], userValue: '', messageValue: '' })
    }
  }

  enterSendMessage = (event) => {
    if (event.key === 'Enter') {
      this.sendMessage()
    }
  }

  deleteMessage = (user, text) => {
    const messageData = this.state.messages;
    const newData = messageData.filter((message) => {
      if (message.user === user && message.text === text) {
        return false
      } else {
        return true
      }
    });
    this.setState({ messages: newData })
  }

  render() {
    return (
      <AppContainer>
        <MessageContainer>
          {this.state.messages.map((message, index) => {
            if (message.user.toLowerCase() === "eu") {
              Autor = styled.p`
              display: none;
              `

              MessageBox = styled.section`
              background-color: rgb(90,190,20);
              margin: 10px;
              padding: 10px;
              width: fit-content;
              word-break: break-all;
              max-width: 50%;
              border-radius: 0 15px;
              align-self: flex-end;
              `
            }
            else {
              Autor = styled.p`
              font-weight: bold;
              `

              MessageBox = styled.section`
              background-color: rgb(60,80,200);
              margin: 10px;
              padding: 10px;
              width: fit-content;
              word-break: break-all;
              max-width: 50%;
              border-radius: 15px 0;
              `
            }
            return (
              <MessageBox key={index} onDoubleClick={() => this.deleteMessage(message.user, message.text)}>
                <Autor>{message.user}</Autor>
                <p>{message.text}</p>
              </MessageBox>
            )
          })}
        </MessageContainer>
        <InputContainer
          onChangeUser={this.onChangeUserValue}
          onChangeMessage={this.onChangeMessageValue}
          userValue={this.state.userValue}
          messageValue={this.state.messageValue}
          onSendClick={this.sendMessage}
          enterSendMessage={this.enterSendMessage}
        />
      </AppContainer>
    )
  }
}
