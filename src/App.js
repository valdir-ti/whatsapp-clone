import React, {useState, useEffect} from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId: 2, title: 'Fulano não Tal', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId: 3, title: 'Beltrano de Souza', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId: 4, title: 'Beltrano da Silva', image: 'https://www.w3schools.com/howto/img_avatar.png'},
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 123,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    name: 'Valdir Silva'
  });

  return (
    <div className="app-window">
      <div className="sidebar">
        
        <header>
          <img src={user.avatar} alt="" className="header-avatar"/>
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon  style={{color:'#919191'}}/>
            </div>
            <div className="header-btn">
              <ChatIcon  style={{color:'#919191'}}/>
            </div>
            <div className="header-btn">
              <MoreVertIcon  style={{color:'#919191'}}/>
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">            
              <SearchIcon fontSize="small" style={{color:'#919191'}}/>
              <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
          </div>  
        </div>

        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatListItem 
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={()=>setActiveChat(chatList[key])}
            />
          ))}
        </div>

      </div>
      <div className="content-area">
          {activeChat.chatId !== undefined &&
            <ChatWindow 
              user={user}
            />
          }
          {activeChat.chatId === undefined &&
            <ChatIntro />
          }

      </div>    
    </div>
  )
};
