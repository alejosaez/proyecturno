import styled from 'styled-components';

export const Header = styled.header`
  background-color: #ffffff; 
`;

export const NavbarContainer = styled.div`
  max-width: 1280px; 
  margin: 0 auto; 
  padding: 0 1rem; 
  @media (min-width: 640px) { 
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) { 
    padding: 0 2rem;
  }
`;

export const Navbar = styled.div`
  display: flex;
  height: 4rem; 
  align-items: center; 
  justify-content: space-between; 
`;

export const LogoAndNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const LogoLink = styled.a`
  color: #14b8a6; 
  display: block;
`;

export const Nav = styled.nav`
  @media (max-width: 767px) {
    display: none; 
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center; 
  gap: 1.5rem;
  font-size: 0.875rem; 
`;

export const NavLink = styled.a`
  color: ${props => props.disabled ? '#555' : '#6b7280'}; 
  pointer-events: ${props => props.disabled ? 'none' : 'auto'}; 
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; 
  transition: color 0.2s; 
  &:hover {
    color: ${props => props.disabled ? '#555' : '#374151'}; 
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center; 
  gap: 1rem; 
`;

export const LoginButton = styled.a`
  background-color: ${props => props.disabled ? '#555' : '#14b8a6'}; 
  color: ${props => props.disabled ? '#fff' : '#ffffff'}; 
  padding: 0.625rem 1.25rem; 
  border-radius: 0.375rem;
  font-size: 0.875rem; 
  font-weight: 500; 
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; 
`;

export const OutLogin = styled.a`
  background-color: red;
  color: #fff;
  padding: 0.625rem 1.25rem;
  border-radius: 0.375rem; 
  font-size: 0.875rem; 
  font-weight: 500; 
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; 
`;


export const RegisterButton = styled.a`
  background-color: #f3f4f6; 
  color: #14b8a6;
  padding: 0.625rem 1.25rem; 
  border-radius: 0.375rem; 
  font-size: 0.875rem; 
    font-weight: 500; 
  @media (max-width: 639px) {
    display: none; 
  }
`;
