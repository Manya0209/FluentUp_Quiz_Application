import React from 'react'
import {NavLink} from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.createRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
    ref={menuRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
    <button
        style={{
          width: '100%',
          backgroundColor: '#DEB69C', 
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '20px',
        }}
        onClick={toggleMenu}
      >
        Menu <RiArrowDropDownLine />
    </button>
    {isOpen && (
      <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white', 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '15px',
            width: '200px', // added width to make the dropdown menu wider
          }}
        >
        
        <li style={{
              padding: '10px', // added padding to make the list items more spacious
            }}>
            <NavLink
              to="/"
              style={{
                textDecoration: 'none',
                color: '#333',
              }}
              activeStyle={{
                color: '#666',
              }}
            >
              Home
            </NavLink>
          </li>
          <li style={{
              padding: '10px', // added padding to make the list items more spacious
            }}>
            <NavLink
              to="/quiz"
              style={{
                textDecoration: 'none',
                color: '#333',
              }}
              activeStyle={{
                color: '#666',
              }}
            >
              Quiz
            </NavLink>
          </li>
    
          {/* <NavLink to="/leaderboard">Leaderboard</NavLink>
          <br/> */}
          <li style={{
              padding: '10px', // added padding to make the list items more spacious
            }}>
            <NavLink
              to="/register"
              style={{
                textDecoration: 'none',
                color: '#333',
              }}
              activeStyle={{
                color: '#666',
              }}
            >
              Register
            </NavLink>
          </li>
          <li style={{
              padding: '10px', // added padding to make the list items more spacious
            }}>
          <NavLink
              to="/login"
              style={{
                textDecoration: 'none',
                color: '#333',
              }}
              activeStyle={{
                color: '#666',
              }}
          >
              Login
            </NavLink>
          </li>
          </ul>
      )}
    </div>
  )
}
