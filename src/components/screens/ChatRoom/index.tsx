import React, { useEffect } from 'react'
import * as websocket from 'websocket'
import Contacts from '~/components/widgets/Contacts'
import Conversation from '~/components/widgets/Conversation'

const W3CWebSocket = websocket.w3cwebsocket

const client = new W3CWebSocket('ws:localhost:8000')

const ChatRoom = () => {
  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected')
    }

    client.onmessage = (message) => {
      console.log(message)
    }
    client.onerror = function () {
      console.log('Connection Error')
    }
  }, [])
  return (
    <div className="grid min-h-screen grid-cols-12">
      <div className="col-span-3 border-r border-gray-300">
        <Contacts />
      </div>
      <div className="col-span-9">
        <Conversation />
      </div>
    </div>
  )
}

export default ChatRoom
