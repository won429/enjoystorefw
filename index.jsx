import React, { useState } from 'react';
import { Search, Star, ChevronLeft, Share, X, ChevronDown, Compass, Hand, FileText, AlertTriangle, ChevronRight, User } from 'lucide-react';

// --- 앱 데이터 ---
const APPS = [
  {
    id: 'enjoy_main',
    cardHeader: '새로운 만남을 원한다면',
    badge: '지금 이용 가능',
    updateTag: '대규모 업데이트',
    bannerTitle: '은랑 LV.999 등장!',
    bannerSubtitle: '<엔조이> 신규 업데이트 출시.',
    title: '엔조이',
    subtitle: '은하 판타지 RPG (소셜)',
    category: '소셜 네트워킹',
    rating: '4.7',
    ratingCount: '7.2천',
    age: '19+',
    ageDesc: '앱 내 제어',
    chart: '#2',
    chartCategory: '소셜',
    developer: 'ENJOY Corp.',
    size: '151.5 MB',
    compatibility: '이 iPhone에서 사용 가능',
    language: '한국어 외 9개',
    inAppPurchase: '사용 가능',
    version: '1.260416.0',
    updatedAt: '2일 전',
    releaseNotes: '일부 버그를 수정하고 전반적인 경험을 개선했습니다. ENJOY 드림',
    bgClass: "bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500",
    overlayClass: "bg-[#6d28d9]", 
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
    iconText: "E",
    screenshots: [
      {
        title: "간편 매칭",
        titleColor: "text-rose-700",
        desc: "나에게 최적화된 매칭 UI로\n새로운 인연을 찾아보세요.",
        bg: "bg-rose-50",
        mockupColor: "bg-gradient-to-b from-rose-400 to-pink-500"
      },
      {
        title: "안전한 대화",
        titleColor: "text-rose-700",
        desc: "철저한 인증 시스템으로\n안심하고 대화할 수 있습니다.",
        bg: "bg-pink-50",
        mockupColor: "bg-gradient-to-b from-pink-400 to-purple-400"
      }
    ],
  },
  {
    id: 'enjoy_sports',
    cardHeader: '힐링하는 시간',
    badge: '',
    updateTag: '모두에게 사랑받는 앱',
    bannerTitle: 'Zen Color',
    bannerSubtitle: '평온한 휴식처를 만들어보세요.',
    title: 'KBO (엔조이스포츠)',
    subtitle: '힐링 성인 색칠북 (스포츠)',
    category: '스포츠',
    rating: '4.6',
    ratingCount: '4.6천',
    age: '전체',
    ageDesc: '세',
    chart: '#33',
    chartCategory: '교육',
    developer: 'EBS(한국교육방송공사)',
    size: '52.8 MB',
    compatibility: '이 iPhone에서 사용 가능',
    language: '한국어 외 2개',
    inAppPurchase: '사용 가능',
    version: '1.5.0',
    updatedAt: '1주 전',
    releaseNotes: '학습에 최적화된 UI 구성으로 일부 기능을 개선했습니다.',
    bgClass: "bg-gradient-to-br from-teal-200 via-emerald-300 to-teal-500",
    overlayClass: "bg-[#336b64]", 
    iconBg: "bg-blue-600",
    iconText: "K",
    screenshots: [
      {
        title: "간편 홈",
        titleColor: "text-indigo-800",
        desc: "시청에 최적화된 UI 구성으로\n최근 시청한 경기 이어보기 등의\n기능을 제공합니다.",
        bg: "bg-[#eaf5f4]", 
        mockupColor: "bg-blue-600"
      },
      {
        title: "UI 업데이트",
        titleColor: "text-indigo-800",
        desc: "중계만 시청할 수 있도록\n야구 데이터 위주로\n새롭게 개편했습니다.",
        bg: "bg-[#eef2f6]",
        mockupColor: "bg-[#1f2940]"
      }
    ],
  }
];

export default function AppStore() {
  const [activeTab, setActiveTab] = useState('투데이');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);

  const filteredApps = APPS.filter(app => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    app.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- [1] 투데이 탭 ---
  const renderToday = () => (
    <section className="px-4 pb-32 pt-12 sm:pt-6 flex flex-col gap-8">
      <div className="px-2 mb-2">
        <h1 className="text-[32px] font-extrabold tracking-tight text-gray-900">투데이</h1>
      </div>
      {APPS.map((app) => (
        <div key={`featured-${app.id}`} className="flex flex-col gap-3">
          <h2 className="text-[22px] font-bold text-gray-900 px-1 tracking-tight">
            {app.cardHeader}
          </h2>
          <div 
            className="w-full h-[420px] rounded-[24px] overflow-hidden flex flex-col shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-black/5 cursor-pointer transform active:scale-95 transition-transform flex-shrink-0 relative"
            onClick={() => setSelectedApp(app)}
          >
            <div className={`flex-1 relative ${app.bgClass} flex items-center justify-center overflow-hidden`}>
              {app.badge && (
                <div className="absolute top-0 left-0 bg-[#8b3dff] text-white text-[12px] font-bold px-3 py-1.5 rounded-br-[16px] z-10 shadow-sm">
                  {app.badge}
                </div>
              )}
              <div className="absolute w-full h-full opacity-20 flex items-center justify-center mix-blend-overlay">
                 <div className="text-[180px] font-black italic">{app.iconText}</div>
              </div>
            </div>
            
            <div className={`${app.overlayClass} flex flex-col text-white pb-4`}>
              <div className="px-4 pt-4 pb-3">
                <div className="text-[11px] text-white/90 font-bold mb-0.5">{app.updateTag}</div>
                <h2 className="text-[24px] font-extrabold mb-0.5 tracking-tight leading-tight">{app.bannerTitle}</h2>
                <p className="text-[12px] text-white/80">{app.bannerSubtitle}</p>
              </div>
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${app.iconBg} rounded-[10px] flex items-center justify-center text-white text-[20px] font-bold shadow-sm`}>
                    {app.iconText}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold mb-0.5">{app.title}</span>
                    <span className="text-[11px] text-white/70">{app.subtitle}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedApp(app); }}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md w-[64px] py-1.5 rounded-full text-[13px] font-bold transition mb-1"
                  >
                    받기
                  </button>
                  <span className="text-[9px] text-white/60 font-medium">앱 내 구입</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );

  // --- [2] 앱 리스트 탭 ---
  const renderApps = (title) => (
    <section className="px-5 pb-32 pt-12 sm:pt-8">
      <h2 className="text-[24px] font-extrabold text-gray-900 mb-5">{title} 차트</h2>
      <div className="flex flex-col gap-4">
        {APPS.map((app, index) => (
          <div key={`chart-${app.id}`} className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedApp(app)}>
            <div className="w-4 text-center font-bold text-gray-900 text-[15px]">{index + 1}</div>
            <div className={`w-[52px] h-[52px] flex-shrink-0 ${app.iconBg} rounded-[12px] flex items-center justify-center text-white text-xl font-black shadow-sm group-hover:scale-105 transition-transform`}>
              {app.iconText}
            </div>
            <div className="flex-1 border-b border-gray-100 pb-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-gray-900 text-[14px] mb-0.5">{app.title}</h4>
                <p className="text-[12px] text-gray-500">{app.category}</p>
              </div>
              <button onClick={(e) => { e.stopPropagation(); setSelectedApp(app); }} className="bg-gray-100 hover:bg-gray-200 text-blue-600 px-4 py-1 rounded-full text-[12px] font-bold transition">
                받기
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // --- [3] 검색 탭 ---
  const renderSearch = () => (
    <section className="px-5 pt-12 sm:pt-8 pb-32">
      <h2 className="text-[24px] font-extrabold text-gray-900 mb-3">검색</h2>
      <div className="relative mb-5">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <Search size={16} />
        </div>
        <input 
          type="text" 
          placeholder="게임, 앱, 스토리 등" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-100 text-gray-900 text-[14px] rounded-full py-2 pl-9 pr-9 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            <X size={16} />
          </button>
        )}
      </div>

      {searchQuery === '' ? (
        <div>
          <h3 className="text-[16px] font-bold text-gray-900 mb-3">추천 검색어</h3>
          <div className="flex flex-wrap gap-2">
            {["엔조이", "KBO", "야구", "소개팅"].map(term => (
              <button key={term} onClick={() => setSearchQuery(term)} className="bg-white border border-gray-200 text-blue-500 px-3 py-1.5 rounded-full text-[13px] hover:bg-gray-50 transition-colors flex items-center gap-1.5">
                <Search size={12} />{term}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredApps.length > 0 ? filteredApps.map((app) => (
            <div key={`search-${app.id}`} className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedApp(app)}>
              <div className={`w-[52px] h-[52px] ${app.iconBg} rounded-[12px] flex items-center justify-center text-white text-xl font-black shadow-sm`}>{app.iconText}</div>
              <div className="flex-1 flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h4 className="font-semibold text-gray-900 text-[14px]">{app.title}</h4>
                  <p className="text-[12px] text-gray-500">{app.category}</p>
                </div>
                <button className="bg-gray-100 text-blue-600 px-4 py-1 rounded-full text-[12px] font-bold">받기</button>
              </div>
            </div>
          )) : (
            <div className="text-center py-10 text-gray-400 text-sm">검색 결과가 없습니다.</div>
          )}
        </div>
      )}
    </section>
  );

  return (
    <div className="w-full h-[100dvh] max-w-[400px] mx-auto bg-white relative overflow-hidden flex flex-col font-sans sm:shadow-2xl sm:border-x border-gray-100">
      
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-white" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          {activeTab === '투데이' && renderToday()}
          {activeTab === '앱' && renderApps('인기 앱')}
          {activeTab === '검색' && renderSearch()}
        </main>

        {/* --- 하단 메뉴 (3개 메뉴, 알약 형태, 글래스 디자인 복구) --- */}
        <div className="absolute bottom-6 left-0 w-full px-4 flex justify-center z-30 pointer-events-none pb-[env(safe-area-inset-bottom)]">
          <nav className="pointer-events-auto w-full max-w-[320px] h-[72px] rounded-full flex justify-between items-center px-2 shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_2px_5px_rgba(255,255,255,0.9),inset_0_-2px_5px_rgba(255,255,255,0.4)] border border-white/60 bg-white/40 backdrop-blur-3xl">
            <NavItem 
              label="투데이" 
              active={activeTab === '투데이'} 
              onClick={() => { setActiveTab('투데이'); setSearchQuery(''); }}
              icon={(active) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="3" />
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <rect x="7" y="11.5" width="10" height="7" rx="1.5" fill={active ? "currentColor" : "none"} stroke={active ? "none" : "currentColor"} />
                </svg>
              )}
            />
            <NavItem 
              label="앱" 
              active={activeTab === '앱'} 
              onClick={() => { setActiveTab('앱'); setSearchQuery(''); }}
              icon={() => (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2L2 7l10 5 10-5-10-5z" />
                   <path d="M2 12l10 5 10-5-2.5-1.25L12 14.5 4.5 10.75 2 12z" />
                   <path d="M2 17l10 5 10-5-2.5-1.25L12 19.5 4.5 15.75 2 17z" />
                </svg>
              )}
            />
            <NavItem 
              label="검색" 
              active={activeTab === '검색'} 
              onClick={() => setActiveTab('검색')}
              icon={() => <Search strokeWidth={3} size={25} />}
            />
          </nav>
        </div>

        {/* --- [4] 앱 상세 화면 --- */}
        {selectedApp && (
          <div className="absolute inset-0 bg-white z-50 overflow-y-auto scrollbar-hide animate-slide-up block pb-10">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 px-4 py-3 flex justify-between items-center">
              <button onClick={() => setSelectedApp(null)} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition">
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition">
                <Share size={18} strokeWidth={2} />
              </button>
            </div>
            
            <div className="px-5 flex gap-4 mt-1">
              <div className={`w-[100px] h-[100px] ${selectedApp.iconBg} rounded-[22px] flex items-center justify-center text-white text-4xl font-black shadow-md`}>
                {selectedApp.iconText}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-[20px] font-bold text-gray-900 leading-tight mb-1">{selectedApp.title}</h1>
                <p className="text-[13px] text-gray-500 mb-3">{selectedApp.developer}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white w-[68px] py-1.5 rounded-full text-[13px] font-bold transition">받기</button>
              </div>
            </div>
            
            {/* === 🔥 수정 완료: 자석 스크롤(Snap) 제거! 부드러운 가로 스크롤 & 사진 완벽 일치 === */}
            <div 
              className="mt-6 border-y border-gray-100 py-3 flex overflow-x-auto px-2"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
              /* snap-x 속성을 삭제하여 한 칸씩 덜컥거리지 않고 부드럽게 스크롤되게 수정했습니다 */
            >
              {/* 항목 1: 평가 */}
              <div className="flex flex-col items-center flex-shrink-0 w-[110px]">
                <span className="text-[11px] text-gray-400 font-medium mb-1">{selectedApp.ratingCount}개의 평가</span>
                <span className="text-[24px] font-black text-gray-700 leading-none mb-1.5">{selectedApp.rating}</span>
                <div className="flex text-gray-400 gap-[1px]">
                   {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="currentColor" className={i <= Math.floor(selectedApp.rating) ? "text-gray-400" : "text-gray-200"} />)}
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200 flex-shrink-0 self-center"></div>
              
              {/* 항목 2: 연령 */}
              <div className="flex flex-col items-center flex-shrink-0 w-[100px]">
                <span className="text-[11px] text-gray-400 font-medium mb-1">연령</span>
                <span className="text-[24px] font-black text-gray-700 leading-none mb-1.5">{selectedApp.age}</span>
                <span className="text-[11px] text-gray-400 font-medium">{selectedApp.ageDesc}</span>
              </div>
              <div className="w-px h-10 bg-gray-200 flex-shrink-0 self-center"></div>
              
              {/* 항목 3: 차트 */}
              <div className="flex flex-col items-center flex-shrink-0 w-[100px]">
                <span className="text-[11px] text-gray-400 font-medium mb-1">차트</span>
                <span className="text-[24px] font-black text-gray-700 leading-none mb-1.5">{selectedApp.chart}</span>
                <span className="text-[11px] text-gray-400 font-medium">{selectedApp.chartCategory}</span>
              </div>
              <div className="w-px h-10 bg-gray-200 flex-shrink-0 self-center"></div>

              {/* 항목 4: 개발자 */}
              <div className="flex flex-col items-center flex-shrink-0 w-[110px]">
                <span className="text-[11px] text-gray-400 font-medium mb-1">개발자</span>
                <div className="w-7 h-7 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-gray-500 mb-1">
                  <User size={16} strokeWidth={2.5} />
                </div>
                <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis w-[90%] text-center">{selectedApp.developer}</span>
              </div>
            </div>

            {/* === 🔥 수정 완료: '새로운 소식' 레이아웃 사진과 100% 동일하게 복구 === */}
            <div className="px-5 pt-5 pb-2">
               <div className="flex justify-between items-center mb-3 cursor-pointer">
                 <h3 className="text-[22px] font-bold text-gray-900 flex items-center">
                   새로운 소식 <ChevronRight size={24} className="text-gray-400 ml-1"/>
                 </h3>
               </div>
               <div className="flex justify-between items-center mb-3">
                 <span className="text-[14px] text-gray-500 font-medium">버전 {selectedApp.version}</span>
                 <span className="text-[14px] text-gray-500 font-medium">{selectedApp.updatedAt}</span>
               </div>
               <p className="text-[15px] text-gray-800 leading-relaxed font-medium whitespace-pre-line">
                 {selectedApp.releaseNotes}
               </p>
            </div>

            {/* 스크린샷 뷰 (여기도 자석 효과인 snap-x 제거하여 부드럽게 스와이프 되도록 수정) */}
            <div 
              className="flex gap-4 overflow-x-auto px-5 py-5 mt-2" 
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {selectedApp.screenshots.map((s, i) => (
                <div key={i} className={`w-[260px] sm:w-[280px] h-[460px] flex-shrink-0 ${s.bg} rounded-[32px] flex flex-col pt-10 relative overflow-hidden shadow-sm border border-black/5`}>
                  <h3 className={`text-[22px] font-black ${s.titleColor} mb-2 text-center`}>{s.title}</h3>
                  <p className="text-[14px] text-[#555] text-center px-6 leading-relaxed whitespace-pre-line font-medium">{s.desc}</p>
                  
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[220px] h-[340px] bg-white rounded-t-[32px] shadow-[0_-5px_20px_rgba(0,0,0,0.06)] border-[6px] border-white overflow-hidden flex flex-col">
                    <div className="w-full h-[40px] bg-white flex justify-center items-center relative border-b border-gray-100/80">
                      <div className="w-16 h-4 bg-gray-100 rounded-full"></div>
                    </div>
                    <div className={`flex-1 ${s.mockupColor} p-3 flex flex-col gap-2`}>
                      <div className="w-full h-24 bg-white/20 rounded-2xl"></div>
                      <div className="w-full h-12 bg-white/20 rounded-xl"></div>
                      <div className="w-full h-12 bg-white/20 rounded-xl"></div>
                      <div className="w-full flex gap-2">
                        <div className="flex-1 h-20 bg-white/20 rounded-xl"></div>
                        <div className="flex-1 h-20 bg-white/20 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 정보 섹션 */}
            <div className="px-5 pb-24 pt-2">
               <h3 className="text-[19px] font-bold text-gray-900 mb-1">정보</h3>
               
               <div className="flex flex-col">
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                   <span className="text-[13px] text-gray-400 font-medium">제공자</span>
                   <span className="text-[13px] text-gray-900 font-medium">{selectedApp.developer}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                   <span className="text-[13px] text-gray-400 font-medium">크기</span>
                   <span className="text-[13px] text-gray-900 font-medium">{selectedApp.size}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                   <span className="text-[13px] text-gray-400 font-medium">카테고리</span>
                   <span className="text-[13px] text-gray-900 font-medium">{selectedApp.category}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer">
                   <span className="text-[13px] text-gray-400 font-medium">호환성</span>
                   <div className="flex items-center gap-1">
                     <span className="text-[13px] text-gray-900 font-medium">{selectedApp.compatibility}</span>
                     <ChevronDown size={16} className="text-gray-400" />
                   </div>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer">
                   <span className="text-[13px] text-gray-400 font-medium">언어</span>
                   <div className="flex items-center gap-1">
                     <span className="text-[13px] text-gray-900 font-medium">{selectedApp.language}</span>
                     <ChevronDown size={16} className="text-gray-400" />
                   </div>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer">
                   <span className="text-[13px] text-gray-400 font-medium">연령 등급</span>
                   <div className="flex items-center gap-1">
                     <span className="text-[13px] text-gray-900 font-medium">{selectedApp.age}</span>
                     <ChevronDown size={16} className="text-gray-400" />
                   </div>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer">
                   <span className="text-[13px] text-gray-400 font-medium">앱 내 구입</span>
                   <div className="flex items-center gap-1">
                     <span className="text-[13px] text-gray-900 font-medium">{selectedApp.inAppPurchase}</span>
                     <ChevronDown size={16} className="text-gray-400" />
                   </div>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100">
                   <span className="text-[13px] text-gray-400 font-medium">저작권</span>
                   <span className="text-[13px] text-gray-900 font-medium">©2026 {selectedApp.developer}</span>
                 </div>

                 <div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer group mt-1">
                   <span className="text-[13px] text-blue-500 font-medium group-hover:text-blue-600 transition-colors">개발자 웹사이트</span>
                   <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                     <Compass size={14} strokeWidth={2.5} />
                   </div>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer group">
                   <span className="text-[13px] text-blue-500 font-medium group-hover:text-blue-600 transition-colors">개인정보 처리방침</span>
                   <div className="w-6 h-6 text-blue-500 flex items-center justify-center group-hover:text-blue-600 transition-colors">
                     <Hand size={16} strokeWidth={2.5} />
                   </div>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer group">
                   <span className="text-[13px] text-blue-500 font-medium group-hover:text-blue-600 transition-colors">사용권 계약</span>
                   <div className="w-6 h-6 text-blue-500 flex items-center justify-center group-hover:text-blue-600 transition-colors">
                     <FileText size={16} strokeWidth={2.5} />
                   </div>
                 </div>
                 <div className="flex justify-between items-center py-3 cursor-pointer group">
                   <span className="text-[13px] text-blue-500 font-medium group-hover:text-blue-600 transition-colors">문제 리포트</span>
                   <div className="w-6 h-6 text-blue-500 flex items-center justify-center group-hover:text-blue-600 transition-colors">
                     <AlertTriangle size={16} strokeWidth={2.5} />
                   </div>
                 </div>

               </div>
            </div>

          </div>
        )}
      
      <style dangerouslySetInnerHTML={{__html: `
        /* 스크롤바 감추기 */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
}

// 하단 네비게이션 개별 아이템 (알약 모양 내부 블록 복구)
function NavItem({ label, active, onClick, icon }) {
  return (
    <div className="relative flex-1 h-[56px] flex justify-center items-center">
      {active && (
        <div className="absolute w-[88%] h-[100%] bg-white/60 backdrop-blur-md rounded-full z-0 shadow-sm border border-white/60"></div>
      )}
      <button 
        onClick={onClick}
        className={`relative flex flex-col items-center justify-center gap-[2px] w-full h-full z-10 ${
          active ? 'text-[#1C68F2]' : 'text-gray-600'
        }`}
      >
        <div className={`transition-transform duration-200 ${active ? 'scale-105' : 'scale-100'}`}>
          {icon(active)}
        </div>
        <span className="text-[11px] font-[800] tracking-tight">{label}</span>
      </button>
    </div>
  );
}
