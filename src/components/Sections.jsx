import React, { useState } from 'react';
import { ExternalLink, CheckCircle, ArrowRight, Search, HelpCircle, MessageSquare, Calendar, ChevronRight, X, Info } from 'lucide-react';

const Sections = ({ activeSection, isMobile }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // --- Sub-components for Mobile ---
    const MobileIntro = () => (
        <div className="mobile-section">
            <div className="mobile-container">
                <span className="saving-badge-mobile">2027 수능 수학</span>
                <h1 className="mobile-title">
                    압도적 정답 <br />
                    <span className="text-gradient">UNION SERIES</span>
                </h1>
                <p className="mobile-subtitle">
                    평가원의 출제 알고리즘을 <br />완벽히 재현한 유니온 시리즈.
                </p>

                <div className="mobile-card-stack">
                    <div className="mobile-luxury-card" onClick={() => setSelectedImage('/images/2027학년도 UNION 모의고사 팜플렛_F_2.jpg')}>
                        <div className="card-header">
                            <h2 className="brand-name">UNION R</h2>
                            <span className="badge-online">ONLINE</span>
                        </div>
                        <div className="card-img-wrapper">
                            <img src="/images/2027학년도 UNION 모의고사 팜플렛_F_2.jpg" alt="UNION R" />
                            <div className="zoom-hint-mobile"><Search size={14} /> 터치하여 크게 보기</div>
                        </div>
                    </div>
                    <div className="mobile-luxury-card" onClick={() => setSelectedImage('/images/2027학년도 UNION 모의고사 팜플렛_F_4.jpg')}>
                        <div className="card-header">
                            <h2 className="brand-name">UNION X</h2>
                            <span className="badge-academy">ACADEMY</span>
                        </div>
                        <div className="card-img-wrapper">
                            <img src="/images/2027학년도 UNION 모의고사 팜플렛_F_4.jpg" alt="UNION X" />
                            <div className="zoom-hint-mobile"><Search size={14} /> 터치하여 크게 보기</div>
                        </div>
                    </div>
                </div>

                <div className="mobile-action-buttons" style={{ marginTop: '2.5rem' }}>
                    <a href="https://www.csmbooks.com/116" target="_blank" rel="noreferrer" className="m-btn m-btn-secondary" style={{ width: '100%', border: '1px solid var(--accent-teal)', color: 'var(--accent-teal)' }}>
                        [유니온 팜플렛 상세보기] <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </div>
    );

    const MobileSchedule = () => (
        <div className="mobile-section">
            <div className="mobile-container">
                <h2 className="mobile-title small">INTEGRATED<br />TIMELINE</h2>
                <p className="mobile-subtitle">2027 수능 성공을 위한 유니온의 정교한 연간 로드맵입니다.</p>

                <div className="mobile-timeline-cards">
                    <div className="timeline-card brand-r">
                        <div className="brand-label" style={{ color: '#b794ff' }}>UNION R</div>
                        <div className="timeline-items">
                            <div className="t-item"><span>4.2</span> 시즌1 출시</div>
                            <div className="t-item"><span>6.23</span> 시즌2 출시</div>
                            <div className="t-item"><span>9.28</span> 시즌3 출시</div>
                        </div>
                    </div>

                    <div className="timeline-card brand-x">
                        <div className="brand-label" style={{ color: 'var(--accent-teal)' }}>UNION X</div>
                        <div className="timeline-items">
                            <div className="t-item"><span>8.11</span> 시즌1 출시</div>
                            <div className="t-item"><span>9.22</span> 시즌2 출시</div>
                            <div className="t-item"><span>10.13</span> 시즌3 출시</div>
                        </div>
                    </div>

                    <div className="timeline-card brand-final">
                        <div className="brand-label" style={{ color: '#fff' }}>평가원</div>
                        <div className="timeline-items">
                            <div className="t-item"><span>6.4</span> 6월 모의평가</div>
                            <div className="t-item"><span>9.2</span> 9월 모의평가</div>
                            <div className="t-item primary"><span>11.19</span> 2027 수능</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const MobileGeneral = () => (
        <div className="mobile-section">
            <div className="mobile-container">
                <h2 className="mobile-title small">일반 구매 안내</h2>
                <p className="mobile-subtitle">멤버십 가입 없이 상시 구매 가능한 채널입니다.</p>

                <div className="mobile-card-stack">
                    <div className="info-card" style={{ padding: '1.5rem' }}>
                        <h3 style={{ color: 'var(--accent-teal)', fontSize: '1.2rem', marginBottom: '0.8rem' }}>UNION R (Online)</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>전국 온/오프라인 서점 및 스마트스토어에서 즉시 구매 가능합니다.</p>
                        <a href="https://smartstore.naver.com/csm17" target="_blank" rel="noreferrer" className="m-btn m-btn-primary" style={{ fontSize: '0.9rem' }}>스토어 바로가기 <ExternalLink size={16} /></a>
                    </div>
                    <div className="info-card" style={{ padding: '1.5rem', border: '1px solid var(--border-glass)' }}>
                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.8rem' }}>UNION X (Academy)</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>학원 전용 라인으로 카카오 채널을 통해 주문 가능합니다.</p>
                        <a href="https://pf.kakao.com/_pqQCn" target="_blank" rel="noreferrer" className="m-btn m-btn-secondary" style={{ fontSize: '0.9rem' }}>카카오 채널 문의 <MessageSquare size={16} /></a>
                    </div>
                </div>
            </div>
        </div>
    );

    const MobileFAQ = () => (
        <div className="mobile-section">
            <div className="mobile-container">
                <h2 className="mobile-title small">FAQ</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { q: 'Plan R/X 주문창이 통합되어 있나요?', a: '네, Order Center를 통해 통합 주문이 가능하지만 상품 성격에 따라 배송 공정이 다를 수 있습니다.' },
                        { q: '주문번호 조회가 되지 않습니다.', a: '카카오 채널을 통해 발급받으신 정식 주문번호(예: UNR-2027-XXXX)가 맞는지 확인해 주세요.' },
                        { q: '멤버십 결제 후 바로 할인이 적용되나요?', a: '승인 완료 직후부터 멤버십 할인가가 적용된 전용 주문 링크를 이용하실 수 있습니다.' }
                    ].map((faq, idx) => (
                        <div key={idx} className="info-card" style={{ padding: '1.2rem' }}>
                            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.8rem', display: 'flex', gap: '8px' }}>
                                <HelpCircle size={18} color="var(--accent-teal)" /> {faq.q}
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const MobileMembership = () => (
        <div className="mobile-section">
            <div className="mobile-container">
                <h2 className="mobile-title small">ANNUAL<br />MEMBERSHIP</h2>
                <div className="membership-benefit-pill">
                    <Info size={14} /> 연간 30부 이상 구매 시 권장
                </div>

                <div className="mobile-membership-stack">
                    <div className="mobile-membership-card purple">
                        <div className="m-type">Plan R</div>
                        <div className="m-price">연간 200,000원</div>
                        <div className="m-features">
                            <div><CheckCircle size={16} /> <span>유니온 R 전 시즌 30% 상시 할인</span></div>
                            <div><CheckCircle size={16} /> <span>검토진 명단 등재 및 전용 봉투 증정</span></div>
                            <div className="special"><CheckCircle size={16} /> <span>교사용 PDF, PPT 자료 제공</span></div>
                        </div>
                    </div>

                    <div className="mobile-membership-card teal highlight">
                        <div className="m-type">Plan X</div>
                        <div className="m-price">연간 400,000원</div>
                        <div className="m-features">
                            <div><CheckCircle size={16} /> <span>Plan R 모든 혜택 포함</span></div>
                            <div><CheckCircle size={16} /> <span>유니온 X 20% 추가 상담 할인</span></div>
                            <div><CheckCircle size={16} /> <span>HWP 원본 파일 추가 제공</span></div>
                            <div className="special"><CheckCircle size={16} /> <span>학원 전용 고사지 관리 시스템</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const MobileOrder = () => (
        <div className="mobile-section full-height flex-center">
            <div className="mobile-container text-center">
                <h2 className="mobile-title">ORDER SYSTEM</h2>
                <p className="mobile-subtitle">멤버십 전용 통합 주문창</p>

                <div className="mobile-action-buttons">
                    <a href="https://union-ordercenter.vercel.app/membership" className="m-btn m-btn-primary">
                        바로 주문하기 <ArrowRight size={20} />
                    </a>
                    <a href="https://pf.kakao.com/_pqQCn" className="m-btn m-btn-secondary">
                        카카오 채널 문의
                    </a>
                </div>
            </div>
        </div>
    );

    // --- Desktop Context ---
    const DesktopContent = () => {
        const introContent = (
            <section className="section">
                <div className="container">
                    <span className="saving-badge">2027 수능 수학의 압도적 정답</span>
                    <h1 className="section-title">
                        2027 수능 수학 <br />
                        <span style={{ color: 'var(--accent-teal)' }}>UNION SERIES</span>
                    </h1>
                    <p className="section-subtitle">
                        평가원의 출제 알고리즘을 완벽히 재현한 유니온 시리즈.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div className="info-card" onClick={() => setSelectedImage('/images/2027학년도 UNION 모의고사 팜플렛_F_2.jpg')}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', margin: 0 }}>UNION R</h2>
                                <span style={{ background: '#7c4dff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>ONLINE</span>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <img src="/images/2027학년도 UNION 모의고사 팜플렛_F_2.jpg" alt="UNION R" style={{ width: '100%', borderRadius: '12px' }} />
                                <div className="zoom-hint">클릭하여 확대 <Search size={16} /></div>
                            </div>
                        </div>

                        <div className="info-card" onClick={() => setSelectedImage('/images/2027학년도 UNION 모의고사 팜플렛_F_4.jpg')}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', margin: 0 }}>UNION X</h2>
                                <span style={{ background: '#ff4d4d', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>ACADEMY</span>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <img src="/images/2027학년도 UNION 모의고사 팜플렛_F_4.jpg" alt="UNION X" style={{ width: '100%', borderRadius: '12px' }} />
                                <div className="zoom-hint">클릭하여 확대 <Search size={16} /></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <a href="https://www.csmbooks.com/116" target="_blank" rel="noreferrer" className="nav-item active" style={{ display: 'inline-flex', width: 'auto', padding: '1rem 3rem', borderRadius: '50px' }}>
                            [유니온 팜플렛 상세보기] <ExternalLink size={18} style={{ marginLeft: '10px' }} />
                        </a>
                    </div>
                </div>
            </section>
        );

        const sections = {
            intro: introContent,
            schedule: (
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">INTEGRATED TIMELINE</h2>
                        <div className="info-card" style={{ padding: '3rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(8, 1fr)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                                <div></div>
                                {['4', '5', '6', '7', '8', '9', '10', '11'].map(m => <div key={m} style={{ textAlign: 'center', fontWeight: 800, opacity: 0.5 }}>{m}월</div>)}
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center' }}>
                                    <div style={{ color: '#b794ff', fontWeight: 950, fontSize: '1.1rem' }}>UNION R</div>
                                    <div style={{ position: 'relative', height: '60px', background: 'rgba(124, 77, 255, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ position: 'absolute', left: '2%', background: '#7c4dff', padding: '4px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900 }}>4.2 S1</div>
                                        <div style={{ position: 'absolute', left: '30%', background: '#7c4dff', padding: '4px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900 }}>6.23 S2</div>
                                        <div style={{ position: 'absolute', left: '68%', background: '#7c4dff', padding: '4px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900 }}>9.28 S3</div>
                                        <div style={{ position: 'absolute', left: '0', width: '100%', height: '2px', background: 'linear-gradient(90deg, #7c4dff, transparent)', zIndex: -1 }}></div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--accent-teal)', fontWeight: 950, fontSize: '1.1rem' }}>UNION X</div>
                                    <div style={{ position: 'relative', height: '60px', background: 'rgba(0, 242, 254, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ position: 'absolute', left: '55%', background: 'var(--accent-teal)', color: '#000', padding: '4px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900 }}>8.11 S1</div>
                                        <div style={{ position: 'absolute', left: '66%', background: 'var(--accent-teal)', color: '#000', padding: '4px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900 }}>9.22 S2</div>
                                        <div style={{ position: 'absolute', left: '78%', background: 'var(--accent-teal)', color: '#000', padding: '4px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900 }}>10.13 S3</div>
                                        <div style={{ position: 'absolute', left: '0', width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-teal), transparent)', zIndex: -1 }}></div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center' }}>
                                    <div style={{ color: '#fff', fontWeight: 950, fontSize: '1.1rem' }}>평가원</div>
                                    <div style={{ position: 'relative', height: '60px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ position: 'absolute', left: '28%', border: '1px solid #fff', padding: '4px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800 }}>6.4 6평</div>
                                        <div style={{ position: 'absolute', left: '60%', border: '1px solid #fff', padding: '4px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800 }}>9.2 9평</div>
                                        <div style={{ position: 'absolute', left: '86%', background: 'var(--accent-teal)', color: '#000', padding: '6px 20px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 950, boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)' }}>11.19 수능</div>
                                        <div style={{ position: 'absolute', left: '0', width: '100%', height: '1px', background: 'dashed rgba(255,255,255,0.1)', zIndex: -1 }}></div>
                                    </div>
                                </div>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>상기 일정은 생산 일정에 따라 소폭 변동될 수 있습니다.</p>
                        </div>
                    </div>
                </section>
            ),
            membership: (
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">2027 연간 멤버십</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            <div className="info-card premium-card">
                                <span className="badge">PLAN R</span>
                                <h3>INDIVIDUAL</h3>
                                <div className="price">200,000₩</div>
                                <ul>
                                    <li><CheckCircle /> 유니온 R 전 시즌 30% 상시 할인</li>
                                    <li><CheckCircle /> 검토진 명단 등재 및 전용 봉투 증정</li>
                                    <li><CheckCircle /> <strong>추가 제공</strong>: 교사용 PDF, PPT 자료</li>
                                </ul>
                            </div>
                            <div className="info-card premium-card active">
                                <span className="badge">PLAN X</span>
                                <h3>ACADEMY</h3>
                                <div className="price">400,000₩</div>
                                <ul>
                                    <li><CheckCircle /> <strong>Plan R 모든 혜택 포함</strong></li>
                                    <li><CheckCircle /> 유니온 X 20% 추가 상담 할인</li>
                                    <li><CheckCircle /> <strong>HWP 원본 파일 추가 제공</strong></li>
                                    <li><CheckCircle /> 학원 전용 고사지 관리 시스템 이용</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            ),
            check: (
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">INTEGRATED DASHBOARD</h2>
                        <p className="section-subtitle">주문번호 하나로 모든 배송 현황을 실시간으로 확인하세요.</p>
                        <div className="info-card" style={{ padding: '4rem' }}>
                            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>CSM17 Order Center</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.8' }}>
                                    발급받으신 주문번호(UNR/UNX/YAK)를 입력하시면<br />
                                    별도의 로그인 없이 즉시 상세 정보를 조회하실 수 있습니다.
                                </p>
                                <a href="https://union-ordercenter.vercel.app" target="_blank" rel="noreferrer" className="nav-item active" style={{ width: 'fit-content', padding: '1.2rem 3rem', borderRadius: '50px', margin: '0 auto' }}>
                                    주문번호 통합 조회 <Search size={20} style={{ marginLeft: '8px' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            ),
            faq: (
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">FAQ</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { q: 'Plan R/X 주문창이 통합되어 있나요?', a: '네, Order Center를 통해 통합 주문이 가능하지만 상품 성격에 따라 배송 공정이 다를 수 있습니다.' },
                                { q: '주문번호 조회가 되지 않습니다.', a: '카카오 채널을 통해 발급받으신 정식 주문번호(예: UNR-2027-XXXX)가 맞는지 확인해 주세요. 발급 직후에는 반영까지 최대 30분 정도 소요될 수 있습니다.' },
                                { q: '멤버십 결제 후 바로 할인이 적용되나요?', a: '승인 완료 직후부터 멤버십 할인가가 적용된 전용 주문 링크를 이용하실 수 있습니다.' }
                            ].map((faq, idx) => (
                                <div key={idx} className="info-card">
                                    <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <HelpCircle size={20} color="var(--accent-teal)" /> {faq.q}
                                    </h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ),
            general: (
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">일반 구매 안내</h2>
                        <p className="section-subtitle">멤버십 가입 없이 상시 구매 가능한 채널입니다.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                            <div className="info-card">
                                <h3 style={{ color: 'var(--accent-teal)', marginBottom: '1rem' }}>UNION R (Online)</h3>
                                <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>전국 온/오프라인 서점 및 네이버 스마트스토어에서 즉시 구매가 가능합니다.</p>
                                <a href="https://smartstore.naver.com/csm17" target="_blank" rel="noreferrer" className="nav-item active" style={{ justifyContent: 'center' }}>스토어 바로가기 <ExternalLink size={18} /></a>
                            </div>
                            <div className="info-card">
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>UNION X (Academy)</h3>
                                <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>학원 전용 라인으로 카카오 채널을 통해 주문 및 상담이 가능합니다.</p>
                                <a href="https://pf.kakao.com/_pqQCn" target="_blank" rel="noreferrer" className="nav-item" style={{ border: '1px solid var(--border-glass)', justifyContent: 'center' }}>카카오 채널 문의 <MessageSquare size={18} /></a>
                            </div>
                        </div>
                    </div>
                </section>
            )
        };
        
        if (activeSection === 'kakao') return sections.faq;
        return sections[activeSection] || sections.intro;
    };

    const MobileDispatcher = () => {
        switch (activeSection) {
            case 'intro': return <MobileIntro />;
            case 'general': return <MobileGeneral />;
            case 'schedule': return <MobileSchedule />;
            case 'membership': return <MobileMembership />;
            case 'order': return <MobileOrder />;
            case 'faq': case 'check': case 'kakao': return <MobileFAQ />;
            default: return <MobileIntro />;
        }
    };

    return (
        <>
            {isMobile ? <MobileDispatcher /> : <DesktopContent />}

            {selectedImage && (
                <div className="modal-overlay luxury-modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage} alt="Zoom content" className="modal-img" />
                        <button className="modal-close-btn" onClick={() => setSelectedImage(null)}><X size={32} /></button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sections;
