import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Sections from './components/Sections';
import { Menu, X } from 'lucide-react';
import './App.css';

// Custom hook for responsive layout switching
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Desktop Layout Component
  const DesktopLayout = () => (
    <div className="app-container desktop">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="main-content">
        <Sections activeSection={activeSection} isMobile={false} />
      </main>
    </div>
  );

  // Mobile Layout Component (Dedicated Experience)
  const MobileLayout = () => (
    <div className="app-container mobile-view">
      {/* Premium Mobile Header */}
      <div className="mobile-header luxury-blur">
        <div className="mobile-header-logo-container">
          <img src="/images/logo.png" alt="UNION Logo" />
        </div>
        <button className="menu-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={26} color="var(--accent-teal)" /> : <Menu size={26} color="white" />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="mobile-sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <Sidebar
        activeSection={activeSection}
        onSectionChange={(section) => {
          setActiveSection(section);
          closeSidebar();
        }}
        isOpen={isSidebarOpen}
        isMobile={true}
      />

      <main className="main-content mobile">
        <Sections activeSection={activeSection} isMobile={true} />
      </main>
    </div>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}

export default App;
