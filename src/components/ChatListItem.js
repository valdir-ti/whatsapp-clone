import React from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {
  return (
    <div 
      className={`chat-list-item ${active?'active':''}`} 
      onClick={onClick}
    >
      <img src={data.image} alt="" className="chat-list-item-avatar"/>
      <div className="chat-list-item-lines">
        <div className="chat-list-item-line">
          <div className="chat-list-item-name">{data.title}</div>
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