//components//Layout/Sidebar.tsx//
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './Sidebar.scss';
import { AnalyticsIcon, CompanyIcon, DashboardIcon, FinanceIcon, LogoutIcon, ProfileIcon, ServicesIcon } from '../ui/SidebarIcons';

const menuItems = [
  { path: '/', icon: <DashboardIcon />, label: 'Dashboard' },
  { path: '/company', icon: <CompanyIcon />, label: 'Company' },
  { path: '/profile', icon: <ProfileIcon />, label: 'Profile' },
  { path: '/services', icon: <ServicesIcon />, label: 'Services' },
  { path: '/finance', icon: <FinanceIcon />, label: 'Finance' },
  { path: '/analytics', icon: <AnalyticsIcon />, label: 'Analytics' },
];

interface SidebarProps {
  closeSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `nav-item ${isActive ? 'active' : ''}`
                }
                onClick={closeSidebar}
              >
                {({ isActive }) => (
                  <>
                    {/* The Sliding Animation Layer */}
                    {isActive && (
                      <motion.div 
                        layoutId="active-pill" 
                        className="active-indicator"
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30 
                        }}
                      />
                    )}
                    
                
                    <span className="icon-wrapper">
                        {item.icon}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="footer-btn logout">
            <LogoutIcon />
        </button>
    
        <div className="footer-brand">
           <img src="/logo/brand_logo.jpg" alt="Brand" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;