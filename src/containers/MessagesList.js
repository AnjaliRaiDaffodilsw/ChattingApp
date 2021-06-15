import { connect } from 'react-redux'
import MessagesListComponent from '../component/MessagesList'

export const MessagesList = connect(state => ({
	messages: state.messages
}), {})(MessagesListComponent)