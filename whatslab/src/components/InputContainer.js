import React, { Component } from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
padding: 10px 5px;
display: flex;
height: 5vh;
background-color: rgba(220,220,220);
border-top: 1px solid grey;
`

const InputUser = styled.input`
width: 100px;
margin-right: 10px;
border-radius: 15px 0 0 15px;
`

const InputText = styled.input`
flex-grow: 1;
margin-right: 10px;
border-radius: 0 15px 15px 0;
`

const SendButton = styled.button`
border-radius: 15px;
padding: 0 10px;
background-color: blue;
font-weight: bold;
color: #ffffff;
`

export class InputContainer extends Component {
    render() {
        return (
            <Footer onKeyPress={this.props.enterSendMessage}>
                <InputUser
                    onChange={this.props.onChangeUser}
                    placeholder="Usuário"
                    value={this.props.userValue}
                    required />
                <InputText
                    onChange={this.props.onChangeMessage}
                    placeholder="Mensagem"
                    value={this.props.messageValue}
                    required />
                <SendButton onClick={this.props.onSendClick}>Enviar</SendButton>
            </Footer>
        )
    }
}