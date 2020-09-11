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

export default () => {

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState();

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);    
  }  
  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
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

      </div>

      <div className="chat-window-emoji-area" style={{height: emojiOpen? '200px': '0px'}}>
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
          
          <div className="chat-window-header-btn">
            <SendIcon fontSize="small" style={{color:'#919191'}}/>
          </div>

        </div>

      </div>
      
    </div>
  );
}