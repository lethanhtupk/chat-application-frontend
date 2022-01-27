import React from 'react'

interface Props {
  isMyMessage: boolean
  content: any
}

const Message = ({ isMyMessage }: Props) => {
  return (
    <div
      className={`${
        isMyMessage ? 'bg-blue-600 text-white self-end' : 'bg-slate-200 self-start'
      } rounded-full inline-block px-3 py-2`}
    >
      <p>Hello there!!</p>
    </div>
  )
}

export default Message
