import React from 'react';
import {
  Info,
  ShoppingCart,
  Award,
  FileOutput,
  MessageSquare,
  Search,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Calendar
} from 'lucide-react';

const Sidebar = ({ activeSection, onSectionChange, isOpen }) => {
  const menuGroups = [
    {
      group: 'PROJECT',
      items: [
        { id: 'intro', label: '유니온 소개', icon: <Info size={16} /> },
        { id: 'schedule', label: '유니온 일정', icon: <Calendar size={16} /> },
        { id: 'general', label: '일반 구매 (R/X)', icon: <ShoppingCart size={16} /> },
      ]
    },
    {
      group: 'MEMBERSHIP',
      items: [
        { id: 'membership', label: '멤버십 프로그램', icon: <Award size={16} /> },
        { id: 'apply', label: '멤버십 신청', icon: <FileOutput size={16} /> },
        { id: 'order', label: '멤버십 주문', icon: <MessageSquare size={16} /> },
      ]
    },
    {
      group: 'SYSTEM',
      items: [
        { id: 'check', label: '주문번호 조회', icon: <Search size={16} /> },
        { id: 'faq', label: 'FAQ', icon: <HelpCircle size={16} /> },
        { id: 'kakao', label: '채널 연결', icon: <MessageSquare size={16} /> },
      ]
    }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'mobile-open' : ''}`} style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', backgroundColor: 'rgba(5, 5, 10, 0.98)' }}>
      <div className="sidebar-logo" style={{ padding: '1.5rem 1.5rem 1rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
        <img src="/images/logo.png" alt="UNION Logo" style={{ width: '120px', height: 'auto', display: 'block' }} />
      </div>

      <nav className="sidebar-nav" style={{ padding: '0 0.8rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {menuGroups.map((group, groupIdx) => (
          <div key={groupIdx}>
            <h3 style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0 1rem', marginBottom: '0.5rem' }}>
              {group.group}
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {group.items.map((item) => (
                <li key={item.id}>
                  {item.id === 'apply' || item.id === 'kakao' ? (
                    <a
                      href={item.id === 'apply' ? "https://docs.google.com/forms/d/15g5yDT4Pykee3rdjXOX1J234vGt9PVgbnV2ze4EH1M4/viewform" : "https://pf.kakao.com/_pqQCn"}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-item"
                      style={{
                        padding: '0.8rem 1.2rem',
                        gap: '0.8rem',
                        textDecoration: 'none',
                        color: '#ffffff',
                        fontSize: '1rem',
                        fontWeight: 700,
                        transition: 'all 0.2s'
                      }}
                    >
                      {React.cloneElement(item.icon, { size: 18, color: '#ffffff' })}
                      <span>{item.label}</span>
                      <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.6 }} />
                    </a>
                  ) : (
                    <button
                      className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => onSectionChange(item.id)}
                      style={{
                        padding: '0.8rem 1.2rem',
                        gap: '0.8rem',
                        color: activeSection === item.id ? 'var(--accent-teal)' : '#ffffff',
                        fontSize: '1rem',
                        fontWeight: activeSection === item.id ? 900 : 700,
                        transition: 'all 0.2s'
                      }}
                    >
                      {React.cloneElement(item.icon, { size: 18, color: activeSection === item.id ? 'var(--accent-teal)' : '#ffffff' })}
                      <span>{item.label}</span>
                      {activeSection === item.id && <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: 0.6 }} />}
                    </button>
                  )
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer" style={{ padding: '1rem 1rem', borderTop: '1px solid var(--border-glass)' }}>
        <a href="https://smartstore.naver.com/csm17" target="_blank" rel="noreferrer" className="nav-item" style={{ fontSize: '0.75rem', opacity: 0.7, padding: '0.5rem 1rem' }}>
          <ExternalLink size={14} />
          <span>OFFICIAL SHOP</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
