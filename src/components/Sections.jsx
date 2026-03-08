import React from 'react';
import { ExternalLink, CheckCircle, ArrowRight, Search, HelpCircle, MessageSquare, Calendar, ChevronRight } from 'lucide-react';

const Sections = ({ activeSection }) => {
    const sections = {
        intro: (
            <section className="section">
                <div className="container">
                    <span className="saving-badge">2027 수능 수학의 압도적 정답</span>
                    <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                        2027 수능 수학 <br />
                        <span style={{ color: 'var(--accent-teal)' }}>UNION SERIES</span>
                    </h1>
                    <p className="section-subtitle" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                        평가원의 출제 알고리즘을 완벽히 재현한 유니온 시리즈.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        {/* UNION R Card */}
                        <div className="info-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: '0.4s', cursor: 'default' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', margin: 0 }}>UNION R</h2>
                                <span style={{ background: '#7c4dff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>ONLINE</span>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(124, 77, 255, 0.08) 0%, transparent 70%)', zIndex: -1 }}></div>
                                <img src="/images/union_r_intro_1.png" alt="UNION R" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)' }} />
                            </div>
                        </div>

                        {/* UNION X Card */}
                        <div className="info-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: '0.4s', cursor: 'default' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', margin: 0 }}>UNION X</h2>
                                <span style={{ background: '#ff4d4d', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>ACADEMY</span>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(79, 172, 254, 0.08) 0%, transparent 70%)', zIndex: -1 }}></div>
                                <img src="/images/union_r_intro_2.png" alt="UNION X" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ),
        schedule: (
            <section className="section">
                <div className="container">
                    <h2 className="section-title">INTEGRATED TIMELINE</h2>
                    <p className="section-subtitle">2027 수능 성공을 위한 유니온의 정교한 연간 로드맵입니다.</p>

                    <div className="info-card" style={{ padding: '2rem 1.5rem', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                        <div style={{ width: '100%' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(8, 1fr)', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                                <div></div>
                                {['4', '5', '6', '7', '8', '9', '10', '11'].map(month => (
                                    <div key={month} style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 800 }}>{month}월</div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* Row: UNION R */}
                                <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(8, 1fr)', alignItems: 'center' }}>
                                    <div style={{ color: '#b794ff', fontWeight: 950, fontSize: '1rem' }}>UNION R</div>
                                    <div style={{ gridColumn: '2 / 10', position: 'relative', height: '80px', background: 'rgba(124, 77, 255, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ position: 'absolute', left: '2%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: '#7c4dff', padding: '4px 10px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, whiteSpace: 'nowrap' }}>4.2 S1</div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '30%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: '#7c4dff', padding: '4px 10px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, whiteSpace: 'nowrap' }}>6.23 S2</div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '68%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: '#7c4dff', padding: '4px 10px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, whiteSpace: 'nowrap' }}>9.28 S3</div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '0', top: '50%', width: '100%', height: '2px', background: 'linear-gradient(90deg, #7c4dff, transparent)', zIndex: -1 }}></div>
                                    </div>
                                </div>

                                {/* Row: UNION X */}
                                <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(8, 1fr)', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--accent-teal)', fontWeight: 950, fontSize: '1rem' }}>UNION X</div>
                                    <div style={{ gridColumn: '2 / 10', position: 'relative', height: '80px', background: 'rgba(0, 242, 254, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ position: 'absolute', left: '55%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: 'var(--accent-teal)', color: '#000', padding: '4px 10px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, whiteSpace: 'nowrap' }}>8.11 S1</div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '66%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: 'var(--accent-teal)', color: '#000', padding: '4px 10px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, whiteSpace: 'nowrap' }}>9.22 S2</div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '78%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: 'var(--accent-teal)', color: '#000', padding: '4px 10px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900, whiteSpace: 'nowrap' }}>10.13 S3</div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '0', top: '50%', width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-teal), transparent)', zIndex: -1 }}></div>
                                    </div>
                                </div>

                                {/* Row: 평가원 */}
                                <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(8, 1fr)', alignItems: 'center' }}>
                                    <div style={{ color: '#fff', fontWeight: 950, fontSize: '1rem' }}>평가원</div>
                                    <div style={{ gridColumn: '2 / 10', position: 'relative', height: '80px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ position: 'absolute', left: '28%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: 'transparent', border: '1px solid #fff', padding: '4px 10px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800, whiteSpace: 'nowrap' }}>6.4 평가원</div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '60%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: 'transparent', border: '1px solid #fff', padding: '4px 10px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800, whiteSpace: 'nowrap' }}>9.2 평가원</div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '86%', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
                                            <div style={{ background: 'var(--accent-teal)', color: '#000', padding: '6px 14px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 950, boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)', whiteSpace: 'nowrap' }}>
                                                11.19 수능
                                            </div>
                                        </div>
                                        <div style={{ position: 'absolute', left: '0', top: '50%', width: '100%', height: '1px', background: 'dashed rgba(255,255,255,0.1)', zIndex: -1 }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <h3 style={{ color: 'var(--accent-teal)' }}>UNION R (Online)</h3>
                            <p style={{ marginBottom: '2rem' }}>전국 온라인 서점 및 스마트스토어에서 즉시 구매 가능합니다.</p>
                            <a href="https://smartstore.naver.com/csm17" target="_blank" rel="noreferrer" className="nav-item active" style={{ justifyContent: 'center' }}>스토어 바로가기 <ExternalLink size={18} /></a>
                        </div>
                        <div className="info-card">
                            <h3 style={{ color: 'var(--text-primary)' }}>UNION X (Academy)</h3>
                            <p style={{ marginBottom: '2rem' }}>학원 및 출강용 오프라인 전용 라인으로 카카오 채널을 통해 주문 가능합니다.</p>
                            <a href="#" className="nav-item" style={{ border: '1px solid var(--border-glass)', justifyContent: 'center' }}>카카오 채널 문의 <MessageSquare size={18} /></a>
                        </div>
                    </div>
                </div>
            </section>
        ),
        membership: (
            <section className="section">
                <div className="container">
                    <h2 className="section-title">2027 연간 멤버십</h2>
                    <p className="section-subtitle">연간 혜택을 통해 가장 합리적이고 압도적인 성취를 경험하세요.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                        <div className="info-card" style={{ borderTop: '4px solid var(--accent-purple)' }}>
                            <div className="saving-badge" style={{ background: 'rgba(124, 77, 255, 0.15)', color: '#b794ff' }}>FOR INDIVIDUAL</div>
                            <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Plan R</h3>
                            <p style={{ color: 'var(--accent-teal)', fontWeight: 900, fontSize: '2.5rem', marginBottom: '2rem' }}>연간 200,000원</p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.1rem' }}><CheckCircle size={22} color="var(--accent-teal)" /> 유니온 R 전 시즌 30% 상시 할인</li>
                                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.1rem' }}><CheckCircle size={22} color="var(--accent-teal)" /> 검토진 명단 등재 및 전용 봉투 증정</li>
                                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.1rem' }}><CheckCircle size={22} color="var(--accent-teal)" /> <strong>추가 제공</strong> : 교사용 PDF, PPT 자료</li>
                            </ul>
                        </div>
                        <div className="info-card" style={{ border: '2px solid var(--accent-teal)' }}>
                            <div className="saving-badge" style={{ background: 'var(--accent-teal)', color: 'var(--bg-deep)' }}>FOR ACADEMY</div>
                            <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>Plan X</h3>
                            <p style={{ color: 'var(--accent-teal)', fontWeight: 900, fontSize: '2.5rem', marginBottom: '2rem' }}>연간 400,000원</p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.1rem' }}><CheckCircle size={22} color="var(--accent-teal)" /> <strong>Plan R 모든 혜택 포함</strong></li>
                                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.1rem' }}><CheckCircle size={22} color="var(--accent-teal)" /> 유니온 X(오프라인용) 20% 추가 상담 할인</li>
                                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.1rem' }}><CheckCircle size={22} color="var(--accent-teal)" /> <strong>HWP 원본 파일 추가 제공</strong></li>
                                <li style={{ display: 'flex', gap: '1rem', fontSize: '1.1rem' }}><CheckCircle size={22} color="var(--accent-teal)" /> 학원 전용 고사실 관리 시스템 이용</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        ),
        order: (
            <section className="section">
                <div className="container">
                    <h2 className="section-title">ORDER SYSTEM</h2>
                    <p className="section-subtitle">멤버십 회원을 위한 빠르고 편리한 주문 및 조회 시스템입니다.</p>
                    <div className="info-card" style={{ padding: '5rem 4rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(22,27,34,0.8), rgba(0,242,254,0.05))' }}>
                        <h3 style={{ fontSize: '2.4rem', marginBottom: '1.5rem' }}>멤버십 전용 서비스</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                            가입 확인 후 즉시 할인 주문이 가능하며, 카카오 채널을 통한 1:1 밀착 상담을 지원합니다.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="http://localhost:5182/membership" target="_blank" rel="noreferrer" className="nav-item active" style={{ width: 'auto', padding: '1.8rem 4rem', fontSize: '1.2rem', borderRadius: '50px', boxShadow: '0 0 30px rgba(0,242,254,0.2)' }}>
                                바로 주문하기 <ArrowRight size={22} style={{ marginLeft: '10px' }} />
                            </a>
                            <a href="#" className="nav-item" style={{ width: 'auto', padding: '1.8rem 4rem', fontSize: '1.2rem', borderRadius: '50px', border: '1px solid var(--border-glass)' }}>
                                카카오 채널 연결 <MessageSquare size={22} style={{ marginLeft: '10px' }} />
                            </a>
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
                                별도의 로그인 없이 즉시 상세 정보를 조회할 수 있습니다.
                            </p>
                            <a href="http://localhost:5182" target="_blank" rel="noreferrer" className="nav-item active" style={{ width: 'fit-content', padding: '1.2rem 3rem', borderRadius: '50px', margin: '0 auto' }}>
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
                            { q: 'Plan R과 Plan X 주문창이 통합되어 있나요?', a: '네, Order Center를 통해 통합 주문이 가능하지만 상품 성격에 따라 배송 공정이 다를 수 있습니다. 특히 UNION X는 전용 고사실 관리 시스템과 연계됩니다.' },
                            { q: '주문번호 조회가 되지 않습니다.', a: '카카오 채널을 통해 발급받으신 정식 주문번호(예: UNR-2027-XXXX)가 맞는지 확인해 주세요. 발급 직후에는 시스템 반영까지 최대 30분 정도 소요될 수 있습니다.' },
                            { q: '멤버십 결제 후 바로 할인이 적용되나요?', a: '신청서 작성 및 가입 승인 단계가 완료된 직후부터 멤버십 할인가가 적용된 전용 주문 링크를 이용하실 수 있습니다.' }
                        ].map((faq, idx) => (
                            <div key={idx} className="info-card">
                                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem' }}><HelpCircle size={20} color="var(--accent-teal)" style={{ display: 'inline', marginRight: '10px' }} /> {faq.q}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    };

    return sections[activeSection] || sections.intro;
};

export default Sections;
