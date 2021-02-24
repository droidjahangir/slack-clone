import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from './firebase';

function SidebarOption({ id, Icon, title, addChannelOption }) {
  const history = useHistory();

  // we map through channels in its mother component Sidebar component, when room id comes from database then <SidebarOption /> component accept an id.
  // whenever we add a room then instantly render from database and we get a new id. Then we go to this room id chat room from this code.
  const selectChannel = () => {
    if (id) {
      // when we click a channel name then dynamically url changed and set this room's id. 
      history.push(`/room/${id}`);
    } else {
      history.push('/title/');
    }
  };

  // whenever we add a channel then instantly it added to the database. then selectChannel called once again.
  const addChannel = () => {
    const channelName = prompt('Enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon ? (
        <h3>
          <Icon className="sidebarOption__icon" /> {title}
        </h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
