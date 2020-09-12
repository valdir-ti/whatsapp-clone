import React, {useState} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import MessageItem from './MessageItem';

export default ({user}) => {

  //Instruções para iniciar a utilizar o microfone no navegador
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState();
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    {author: 123, body: 'Texto da mensagem 1', date: '19:15'},
    {author: 123, body: 'Texto da mensagem 2', date: '19:35'},
    {author: 124, body: 'Texto da mensagem 3', date: '19:55'}
  ]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);    
  }  
  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  const handleSendClick = () => {

  }

  //Function que capta o que está sendo dito no microfone
  const handleMicClick = () => {
    if(recognition != null){

      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {        
        setText( e.results[0][0].transcript );
      }

      recognition.start();
    }
  }

  return (
    <div className="chat-window">
      
      <div className="chat-window-header">
        
        <div className="chat-window-header-info">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="chat-window-header-info-avatar"/>
          <div className="chat-window-header-name">Valdir Silva</div>
        </div>

        <div className="chat-window-header-buttons">
          <div className="chat-window-header-btn">
            <SearchIcon fontSize="small" style={{color:'#919191'}}/>
          </div>
          <div className="chat-window-header-btn">
            <AttachFileIcon fontSize="small" style={{color:'#919191'}}/>
          </div>
          <div className="chat-window-header-btn">
            <MoreVertIcon fontSize="small" style={{color:'#919191'}}/>
          </div>
        </div>

      </div>
      
      <div className="chat-window-body">
        {list.map((item, key)=>(
          <MessageItem 
            key={key}
            data={item}
            user={user}
          />
        ))}
      </div>

      <div className="chat-window-emoji-area" style={{height: emojiOpen ? '200px': '0px'}}>
        <EmojiPicker 
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chat-window-footer">
        
        <div className="chat-window-footer-pre">          

            <div 
              className="chat-window-header-btn" 
              onClick={handleCloseEmoji}
              style={{width:emojiOpen?40:0}}
            >
              <CloseIcon fontSize="small" style={{color:'#919191'}}/>
            </div>

            <div className="chat-window-header-btn" onClick={handleOpenEmoji}>
              <InsertEmoticonIcon fontSize="small" style={{color: !emojiOpen?'#919191':'#009688'}}/>
            </div>

        </div>

        <div className="chat-window-footer-input">
          <input 
            type="text" 
            className="chat-window-footer-input-input" 
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e=>setText(e.target.value)}
          />
        </div>

        <div className="chat-window-footer-pos">
          
          {!text && 
            <div 
              className="chat-window-header-btn"
              onClick={handleMicClick}
            >
              <MicIcon fontSize="small" style={{color: listening ? '#123ece' : '#919191'}}/>
            </div>
          }

          {text &&
            <div
              className="chat-window-header-btn"
              onClick={handleSendClick}
            >
              <SendIcon fontSize="small" style={{color:'#919191'}}/>
            </div>
          }
          
        </div>

      </div>
      
    </div>
  );
}