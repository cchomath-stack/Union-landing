import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Sections from './components/Sections';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="app-container">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="main-content">
        <Sections activeSection={activeSection} />
      </main>
    </div>
  );
}

export default App;
