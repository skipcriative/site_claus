// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'
import { scrollToElementById } from '../utils/scrollToId';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
      <li>
          <a 
            href="#Home"
            onClick={(e)=>{
              e.preventDefault();
              scrollToElementById('Home');
              }}
            >Home
          </a>
      </li>

      <li>
          <a 
            href="#Shortbio"
            onClick={(e)=>{
              e.preventDefault();
              scrollToElementById('Shortbio');
              }}
            >ShortBio
          </a>
      </li>

      <li>
          <a 
            href="#Research"
            onClick={(e)=>{
              e.preventDefault();
              scrollToElementById('Research');
              }}
            >Research Interests
          </a>
      </li>
      
      <li>
          <a 
            href="#Publications"
            onClick={(e)=>{
              e.preventDefault();
              scrollToElementById('Publications');
              }}
            >Publications
          </a>
      </li>

      <li>
        <a 
          href="#Contact"
          onClick={(e)=>{
            e.preventDefault();
            scrollToElementById('Contact');
            }}
          >Contact
        </a>
      </li>

      </ul>
    </nav>
  );
}

export default Navbar;