import { useState } from "react";
import "./MainLayout.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import AnimatedBlobs  from "../ui/AnimatedBlobs";
import StatsCard from "../ui/StatsCard";
import ExpiryChart from "../ui/ExpiryChart";
import DocumentsTable from "../ui/DocumentsTable";

const EXPIRES_THIS_MONTH_HEADERS = ["Entity", "Email", "Document Name", "Document Type", "Document Type", "Document Type"];
const DOCUMENTS_EXPIRY_HEADERS = ["Document Type", "Document Name", "Status", "Detail"];

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-layout">
      <AnimatedBlobs />
      <div className="content-wrapper">
        <Header toggleSidebar={toggleSidebar} />

        <main className="page-content">
          <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
          
          <div className="widgets">
            {/* ROW 1: Chart | Table */}
            <div className="widget_row">
              <Widget title="Documents Expiring">
                <ExpiryChart/>
              </Widget>
              
              <Widget title="This Month Expires Documents">
                <DocumentsTable headers={EXPIRES_THIS_MONTH_HEADERS}/>
              </Widget>
            </div>

            {/* ROW 2: Table | Stats Grid */}
            <div className="widget_row">
              <Widget title="Documents Expiry">
                <DocumentsTable headers={DOCUMENTS_EXPIRY_HEADERS} />
              </Widget>


              <div className="stats-grid-container">
                <StatsCard 
                    label="Total Employees" 
                    count={3} 
                    icon={<img src="/icons/officer.png" alt="icon"/>} 
                />
                <StatsCard 
                    label="Pending Tasks" 
                    count={5} 
                    icon={<img src="/icons/dollar_icon.png" alt="icon"/>}
                />
                <StatsCard 
                    label="Files Uploaded" 
                    count={12} 
                    icon={<img src="/icons/folder_icon.png" alt="icon"/>}
                />
                <StatsCard 
                    label="Active Projects" 
                    count={8} 
                    icon={<img src="/icons/folder_icon.png" alt="icon"/>}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default MainLayout;
