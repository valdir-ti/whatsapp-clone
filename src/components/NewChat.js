import React, { useState } from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatList, show, setShow}) => {
  
  const [list, setList] = useState([
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Valdir Silva'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Valdir Silva'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Valdir Silva'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Valdir Silva'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Valdir Silva'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Valdir Silva'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Valdir Silva'},
  ]);

  const handleClose = () => {
    setShow(false);
  }

  return (
    <div className="new-chat" style={{left: show?0:-415}}>
      <div className="new-chat-head">
        <div onClick={handleClose} className="new-chat-back-button">
          <ArrowBackIcon style={{color: '#fff'}}/>
        </div>
        <div className="new-chat-head-title">
          Nova Conversa
        </div>
      </div>
      <div className="new-chat-list">
        {list.map((item, key) => (
          <div className="new-chat-item" key={key}>
            <img className="new-chat-item-avatar" src={item.avatar} alt=""/>
            <div className="new-chat-item-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}