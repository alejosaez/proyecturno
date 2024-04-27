import React from 'react';
import { Header, NavbarContainer, Nav, Navbar, LoginButton, LogoAndNavWrapper, LogoLink, NavLink, NavList, RegisterButton, ActionButtons,OutLogin  } from './NavBarStyled';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions'; 

const NavBar = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const dispatch = useDispatch(); 

  const handleLogout = () => {
    
    dispatch(logoutUser());
  };

  return (
    <Header>
      <NavbarContainer>
        <Navbar>
          <LogoAndNavWrapper>
            <LogoLink href="#"></LogoLink>
            <Nav aria-label="Global">
              <NavList>
                <li>
                  <NavLink href="/">HOME</NavLink>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <NavLink href="/turns">MY TURNS</NavLink>
                    </li>
                    <li>
                      <NavLink href="/createturn">CREATE TURN</NavLink>
                    </li>
                  </>
                )}
              </NavList>
            </Nav>
          </LogoAndNavWrapper>
          {!isAuthenticated ? (
            <ActionButtons>
              <LoginButton href="/authentication">AUTHENTICATION</LoginButton>
            </ActionButtons>
          ) : (
            <OutLogin onClick={handleLogout}>LogOut</OutLogin> 
          )}
        </Navbar>
      </NavbarContainer>
    </Header>
  );
};

export default NavBar;
