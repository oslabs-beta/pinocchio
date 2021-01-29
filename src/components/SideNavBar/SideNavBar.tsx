import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { FileContext } from '../../providers/FileProvider';

// STYLES
import './SideNavBar.scss';
import Logo from '../../assets/icons/pinocchio.svg'

const SideNavbar = () => {
  const { handleToggleTree } = useContext(FileContext)

  return (
    <nav id="mainNav">
      <div id="navItemsCont">
        <Link to='/'>
        <div id="navLogoCont">
          <img src={Logo} id='navLogo'/>
        </div>
        </Link>
        <div id="navItem" onClick={() => handleToggleTree()}>
          Toggle Tree
        </div>
        <Link to="/" id="navItem">
          Upload
        </Link>
        <Link to="" id="navItem">
          Other
        </Link>
      </div>
    </nav>
  );
}

export default SideNavbar;