import React ,{Component} from 'react';
import CreateMessage from './CreateMessage';
import MessageHistory from './MessageHistory';
 


class ChatRoom extends Component{


onMessage=(message)=>{
  
    this.props.onMessage(message,this.props.user.username)
}

render(){
    const {messages,user} =this.props;
    return(
        <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageHistory messages={messages} user={user} />
        <CreateMessage onMessage={this.onMessage} />
        </div>
    )
}

}

export default ChatRoom;