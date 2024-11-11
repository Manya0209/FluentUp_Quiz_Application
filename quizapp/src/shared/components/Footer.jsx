import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#9C9797', padding: '20px', borderRadius: '10px', borderImage: 'linear-gradient(to bottom, #9C9797 50%, transparent 50%) 100%',
      borderImageSlice: '2' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '30%' }}>
          <ul style={{ listStyle: 'none', marginleft: '40px' }}>
            <li><Link to="/" style={{ textDecoration: 'underline', color: '#FEF7E5' }}>Home</Link></li>
            <li><a href="#" style={{ textDecoration: 'underline', color: '#FEF7E5' }}>Terms of Use</a></li>
            <li><a href="#" style={{ textDecoration: 'underline', color: '#FEF7E5' }}>Contact</a></li>
          </ul>
        </div>
        <div style={{ width: '30%', textAlign: 'right', marginRight:'20px'}}>
          <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#FEF7E5' }}>Follow Us</h4>
          <ul style={{ listStyle: 'none', marginTop: '-20px', padding: '0', display: 'flex', justifyContent: 'flex-end', marginRight:'-18px' }}>
            <li style={{ marginRight: '20px' }}>
              <FacebookIcon style={{ color: '#DEB69C', textDecoration: 'none' }}></FacebookIcon>
            </li>
            <li style={{ marginRight: '20px' }}>
              <XIcon style={{ color: '#DEB69C', textDecoration: 'none' }}></XIcon>
            </li>
            <li style={{ marginRight: '20px' }}>
              <MailIcon style={{ color: '#DEB69C', textDecoration: 'none' }}></MailIcon>
            </li>
            <li style={{ marginRight: '20px' }}>
              <YouTubeIcon style={{ color: '#DEB69C', textDecoration: 'none' }}></YouTubeIcon>
            </li>
          </ul>
        </div>
      </div>
      <p style={{ fontSize: '14px', color: 'white', textAlign: 'center', marginTop: '20px' }}>
        &copy; 2023 FluentUp. All rights reserved.
      </p>
    </footer>
  );
};

