import React, { useState } from 'react';
import './Header.scss';

interface HeaderProps {
  toggleSidebar?: () => void;
  title?: string;
  userName?: string;
  userRole?: string;
  userImage?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Dashboard",
  userName = "techon",
  userRole = "Admin",
  userImage = "/logo/brand_logo.jpg" 
}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="dashboard-header">

      <div className='header-left'>
        <div className="logo-container">

           <img src="/images/brand_name.png" alt="Techon Logo" className="brand-logo" />
        </div>
        <h1 className="page-title">{title}</h1>
      </div>


      <div className='header-right'>
        

        <button className="icon-btn message-btn">
          <img src="/icons/message_icon.png" alt="Messages" />
        </button>


        <div className="user-profile">
          <img src={userImage} alt="User Avatar" className="avatar" />
          <div className="user-info">
            <span className="name">{userName}</span>
            <span className="role">{userRole}</span>
          </div>
        </div>


        <button className="icon-btn more-options">
           <span className="dots">•••</span> 
        </button>

        <button
          className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="mobile-menu">
            <ul>
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} onClick={() => setMenuOpen(false)}>
                  <span className="icon">
                   <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 11.875V6.25C2.5 6.05208 2.54437 5.86458 2.63312 5.6875C2.72187 5.51042 2.84417 5.36458 3 5.25L6.75 2.4375C6.96875 2.27083 7.21875 2.1875 7.5 2.1875C7.78125 2.1875 8.03125 2.27083 8.25 2.4375L12 5.25C12.1562 5.36458 12.2788 5.51042 12.3675 5.6875C12.4563 5.86458 12.5004 6.05208 12.5 6.25V11.875C12.5 12.2188 12.3775 12.5131 12.1325 12.7581C11.8875 13.0031 11.5933 13.1254 11.25 13.125H9.375C9.19792 13.125 9.04958 13.065 8.93 12.945C8.81042 12.825 8.75042 12.6767 8.75 12.5V9.375C8.75 9.19792 8.69 9.04958 8.57 8.93C8.45 8.81042 8.30167 8.75042 8.125 8.75H6.875C6.69792 8.75 6.54958 8.81 6.43 8.93C6.31042 9.05 6.25042 9.19833 6.25 9.375V12.5C6.25 12.6771 6.19 12.8256 6.07 12.9456C5.95 13.0656 5.80167 13.1254 5.625 13.125H3.75C3.40625 13.125 3.11208 13.0027 2.8675 12.7581C2.62292 12.5135 2.50042 12.2192 2.5 11.875Z" fill="black"/>
</svg>

                  </span>
                  Dashboard
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;