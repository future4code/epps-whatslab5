import React from 'react';
import './App.css';
import styled from 'styled-components';
import deleteIcon from './img/delete-icon.png'
import bg from './img/bg.jpg'

const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 40vw;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const MessageContainer = styled.div`
  flex-grow: 1;
  padding: 5px;
  display: flex;
  flex-direction: column-reverse;
  /* background-color: #e5ddd5; */
  background-image: url(${bg});
  overflow-y: auto;
`

const InputContainer = styled.div`
  display: flex;
  height: 5vh;
  padding: 5px;
  background-color: #f0f0f0;
`
const UserInput = styled.input`
  width: 100px;
  margin-right: 10px;
  border-radius: 20px 0 0 20px;
  border: none;
  background-color: #ffffff;
  padding-left: 10px;
  box-shadow: 1px 1px rgba(0,0,0,0.2);
`

const TextInput = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 0 20px 20px 0;
  border: none;
  background-color: #ffffff;
  padding-left: 10px;
  box-shadow: 1px 1px rgba(0,0,0,0.2);
`

const MessageBox = styled.section`
  background-color: #ffffff;
  margin: 10px;
  padding: 10px;
  width: min-content;
  border-radius: 10px 0;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
`
const SendButton = styled.button`
  border-radius: 15px;
  background-color: #494948;
  color: #ffffff;
  border: none;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  padding: 10px;
`
const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

class App extends React.Component {
  state = {
    messages: [],
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

  deleteMessage = (text) => {
    const messageDatabase = this.state.messages
    const newMessageDatabase = messageDatabase.filter((message) => {
      return (message.text !== text)
    })
    this.setState({messages: newMessageDatabase})
  }

  render() {
    return (
      <AppContainer>
        <MessageContainer>
          {this.state.messages.map((message, id) => {
            return (
              <MessageBox key={id}>
                <MessageHeader>
                  <p><strong>{message.user}</strong></p>
                  <img className="delete-icon" onClick={() => this.deleteMessage(message.text)} alt="" src={deleteIcon} />
                </MessageHeader>
                <p>{message.text}</p>
              </MessageBox>
            )

          })}
        </MessageContainer>

        <InputContainer onKeyPress={this.enterSendMessage}>
          <UserInput onChange={this.onChangeUserValue} value={this.state.userValue} placeholder={'Usuário'} />
          <TextInput onChange={this.onChangeMessageValue} value={this.state.messageValue} placeholder={'Mensagem'} />
          <SendButton onClick={this.sendMessage}>Enviar</SendButton>
        </InputContainer>
      </AppContainer>
    );
  }

}

export default App;
