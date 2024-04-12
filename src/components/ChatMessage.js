import React from 'react';
import Avatar from "react-avatar";

const ChatMessage = ({item}) => {
  return (
    <div className='flex items-center'>
        <div>
        <Avatar src="https://e7.pngegg.com/pngimages/509/595/png-clipart-monkey-d-luffy-one-piece-one-piece-television-hat-thumbnail.png" size={25} round={true} />
                            
        </div>
        <div className='flex items-center'>
            <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
            <p className='ml-2 py-2 text-sm'>{item.message}</p>
        </div>
    </div>
  )
}

export default ChatMessage