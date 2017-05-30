import React from 'react';
import Header from './Header';
import ChatSessions from './ChatSessions';

const chatRoomsStyle = {
  flex: 5,
  minWidth: 300,
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid #ddd',
};

function ChatRooms(props) {
  const { sessions, changeSession } = props;
  return (
    <div style={chatRoomsStyle}>
      <Header />
      <ChatSessions sessions={sessions}
          changeSession={changeSession}/>
    </div>
  );
}

export default ChatRooms;
