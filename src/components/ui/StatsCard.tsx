////components//ui//StatsCard.tsx//
import React from "react";
import "./Ui.scss";


interface StatsCardProps {
  label: string;
  count: number | string;
  icon: React.ReactNode; 
  color?: string; 
}

const StatsCard: React.FC<StatsCardProps> = ({ label, count, icon, color }) => {
  return (
    <div className="stats-card" style={{ backgroundColor: color }}>
      <div className="stats-header">
        <div className="icon-wrapper">
            {icon}
        </div>
        <span className="label">{label}</span>
      </div>
      
      <div className="stats-body">
        <h1 className="count">{count}</h1>
      </div>

      <div className="stats-footer">
        {/* The three dots menu icon */}
        <div className="menu-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;