import { Component } from 'react';
import './App.css';
import ChatRoom from './ChatRoom';
import logo from './logo.svg';
const users = [{username:"Amy"},{username:"John"}]

class App extends Component{



  state = {
    messages: [], 
    
  };
  onMessage = ( message,username) => {
    const newMessage = {
      ['username']: username,
      ['text']: message,
    };

    this.setState(currState => ({
      messages: currState.messages.concat([newMessage]),
    }));


    console.log(this.state.messages)
  };

  render() {
    const { messages } = this.state;
  return (
    <div className="App">  
     <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map((user,index) =>
            <ChatRoom   key={index}
            user={user}
            messages={messages} onMessage={this.onMessage} />

            )}

        </div>
    </div>
  );
          }
}

export default App;
