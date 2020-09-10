import React from 'react';
import './ChatListItem.css';

export default () => {
  return (
    <div className="chat-list-item">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="chat-list-item-avatar"/>
      <div className="chat-list-item-lines">
        <div className="chat-list-item-line">
          <div className="chat-list-item-name">Valdir Silva</div>
          <div className="chat-list-item-date">19:00</div>
        </div>
        <div className="chat-list-item-line">
          <div className="chat-list-item-lastmsg">
            <p>
              Opa, você foi aprovado!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}