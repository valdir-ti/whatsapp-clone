import React, { useState, useEffect } from 'react';
import './NewChat.css';
import Api from '../Api';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatList, show, setShow}) => {
  
  const [list, setList] = useState([]);

  const handleClose = () => {
    setShow(false);
  }

  const addNewChat = async (user2) => {
    await Api.addNewChat(user, user2);

    handleClose();
  }

  useEffect(() => {
    const getList = async () => {
      if(user !== null){
        let results = await Api.getContactList(user.id);
        setList(results);
      }
    }
    getList();
  }, [user]);

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
          <div className="new-chat-item" onClick={()=>addNewChat(item)} key={key}>
            <img className="new-chat-item-avatar" src={item.avatar} alt=""/>
            <div className="new-chat-item-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}