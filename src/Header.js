import React from 'react';
import './Header.css';
import { useStateValue } from './StateProvider';

import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        {/* avater for logged in user */}
        {/* <Avatar className="header__avater" alt="jahangir alam" src="" /> */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />

        {/* Time icon */}
        <AccessTimeIcon />
      </div>

      <div className="header__search">
        {/* Search icon */}
        <SearchIcon />

        {/* input */}
        <input type="text" placeholder="Search..." />
      </div>

      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
