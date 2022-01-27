import React from 'react'

const MessageInput = () => {
  return (
    <div className="relative flex flex-row items-center w-full px-10">
      <input
        className="w-full px-4 py-2 rounded-full bg-slate-100 focus:outline-none"
        type="text"
        placeholder="Type a message..."
      />
      <div className="absolute rotate-90 cursor-pointer text-sky-600 right-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  )
}

export default MessageInput
