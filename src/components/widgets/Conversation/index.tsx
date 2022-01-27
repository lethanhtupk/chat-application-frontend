import React from 'react'
import Message from '~/components/elements/Message'
import MessageInput from '~/components/elements/MessageInput'

const Conversation = () => {
  return (
    <div className="relative h-full">
      <div className="w-full pt-6 pb-2 pl-4 border-b border-gray-200">
        <div className="flex flex-row justify-between pr-8">
          <div className="flex flex-row items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Amber_Heard_%2843723454772%29.jpg"
              alt=""
              className="object-cover w-8 h-8 rounded-full"
            />
            <span className="ml-2 font-medium">Lê Thanh Tú</span>
          </div>
          <div className="flex flex-row items-center text-purple-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-4 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-4 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-4 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 py-4 text-sm">
        <Message isMyMessage={true} content="Hello there" />
        <Message isMyMessage={false} content="Hello there" />
      </div>
      <div className="absolute right-0 w-full bottom-4">
        <MessageInput />
      </div>
    </div>
  )
}

export default Conversation
