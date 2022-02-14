import React from 'react'
import ChatRoom from './components/screens/ChatRoom'

const App = ({ title }: { title: string }) => {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      <div className="min-w-full min-h-screen">
        <ChatRoom />
      </div>
    </>
  )
}

export default App
