
import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import "./Post.css"
import { avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import { Diversity1 } from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PublishIcon from '@mui/icons-material/Publish';



const Post = forwardRef(({ 
    displayName,
     username,
      verified, 
      text,
       image, 
       avatar 
    }, ref) => {
   
  return (
    <div className='post' ref={ref}>
    <div className='post__avatar'>
        <Avatar src={avatar}/>
     </div>
      <div className='post__body'>
     <div className='post__header'>
       <div className='post__headerText'>
         <h3>
             {displayName} {""}
               <span className='post__headerSpecial'>
                 <VerifiedIcon className='post__badge' /> 
                @{username}
             </span>
             
         </h3>
       </div>
       <div className='post__headerDescription'>
        <p>{text}</p>
       </div>
     </div>
     <img className='gifs__image' src={image} alt=""
     />
     <div className='post__footer'>
     <ChatBubbleOutlineIcon fontSize='small' />
     <RepeatIcon  fontSize='small'/>
     <BookmarkBorderIcon  fontSize='small'/>
    <PublishIcon   fontSize='small '/>

     </div>
      </div>
    </div>
  )
  })


export default Post