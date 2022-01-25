import React from 'react'
interface ChatRoomAttributes {
  id: string
}

export interface ChatRoomInstance extends ChatRoomAttributes {
  chat_room_session_id: string
}
