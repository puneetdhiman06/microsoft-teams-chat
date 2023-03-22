import React from 'react'
import {ChatEngine} from "react-chat-engine"
import ChatFeed  from "./components/ChatFeed";
import  "./App.css"
const App = () => {
  return (
    <ChatEngine
        height="100vh"
        projectID="df9444f1-ec20-4c23-a846-8fec04ef3de4"
        userName="puneet064"
        userSecret="123456"
        renderChatFeed={ (chatProps)=> <ChatFeed {...chatProps}/> }
    />
  )
}

export default App
