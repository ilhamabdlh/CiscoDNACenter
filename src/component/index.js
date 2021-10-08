import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLog
} from './navbar';
import Logo from '../asset/ciscooooo.PNG'
import { SearchOutlined, TableOutlined, SettingOutlined, BarsOutlined, ChromeOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLog to='/'>
          <img src={Logo} alt='logo' />
        </NavLog>
        <Bars />
        
        <NavMenu>
          <NavLink to='/DESIGN' activeStyle>
            DESIGN
          </NavLink>
          <NavLink to='/POLICY' activeStyle>
            POLICY
          </NavLink>
          <NavLink to='/PROVISION-us' activeStyle>
            PROVISION
          </NavLink>
          <NavLink to='/ASSURANCE' activeStyle>
            ASSURANCE
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <SearchOutlined className="search"/>
          <TableOutlined className="tabs"/>
          <SettingOutlined className="setting"/>
          <ChromeOutlined className="chrome"/>
          <BarsOutlined className="bars"/>
        </NavMenu>
        
        {/* <NavBtn>
          <NavBtnLink to='/'>icon</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;