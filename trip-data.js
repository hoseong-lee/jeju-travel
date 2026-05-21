// ══════════ TRIP DATA ══════════
// 여행 일정 원본 데이터. localStorage/Firebase에 저장된 값이 없을 때만 사용되는 seed.
// 앱 로직과 분리되어 있어 일정만 수정할 때 app.js를 건드리지 않아도 된다.
// placeName: Google Maps 검색용 장소명. 비어있으면 hotel 타입은 day.hotel, 그 외엔 제목 휴리스틱 fallback.
window.DEFAULT_TRIP_DAYS=[
{date:"6/1 (월)",region:"한국 → 제주 도착 ✈️",color:"#E8725A",hotel:"제주키즈앤돌핀펜션\n📋 2박 276,442원 결제 완료\n🕐 체크인 15시 (1/2박)\n🧸 키즈 펜션 · 장난감 多\n📍 한경면, 아르떼뮤지엄에서 29km / 40분",schedule:[
{time:"11:00",title:"✈️ 김포공항 출발 준비",placeName:"Gimpo International Airport",desc:"국내선 청사 도착",type:"flight",coords:[37.5587,126.7913]},
{time:"12:45",title:"✈️ 진에어 김포→제주",placeName:"Gimpo International Airport",desc:"진에어 | 1시간 15분\n항공 222,000원 (왕복)",type:"flight",status:"confirmed",coords:[37.5587,126.7913]},
{time:"14:00",title:"🛬 제주공항 도착",placeName:"Jeju International Airport",desc:"국내선 도착장",type:"flight",coords:[33.5113,126.4914]},
{time:"14:40",title:"🚗 쏘카 픽업 (캐스퍼)",placeName:"Socar Jeju Airport",desc:"쏘카 188,790원 (3박4일)\n캐스퍼 30kg 초과 1kg당 240원\n6/4 19:30까지 반납",type:"move",status:"confirmed",coords:[33.5077,126.4920]},
{time:"15:00",title:"🪑 퓨어베베 카시트 픽업",placeName:"Pure Bebe Jeju",desc:"카시트 대여 24,000원\n6/4 19:00까지 반납\n쏘카터미널에서 3.8km / 15분",type:"move",status:"confirmed",coords:[33.5060,126.4790]},
{time:"16:00",title:"🎨 아르떼뮤지엄 제주",placeName:"ARTE MUSEUM JEJU",desc:"몰입형 미디어아트\n퓨어베베에서 24km / 40분\n관람 약 1시간",type:"spot",warn:"사전 예약 권장",coords:[33.3957,126.2375]},
{time:"17:30",title:"🏨 키즈앤돌핀 체크인",placeName:"제주키즈앤돌핀펜션",desc:"아르떼뮤지엄에서 29km / 40분\n키즈 장난감 풀세팅",type:"hotel",coords:[33.3340,126.2050]},
{time:"18:30",title:"🛒 홍마트 장보기",placeName:"한경면 홍마트",desc:"펜션에서 12km / 25분\n저녁 식재료, 간식, 음료",type:"shopping",coords:[33.3411,126.2189]},
{time:"19:30",title:"🍖 첫날 저녁",desc:"펜션에서 직접 구워먹기\n하윤이랑 천천히",type:"food"}
]},
{date:"6/2 (화)",region:"제주 서부 — 점보빌리지 & 돌고래 🐬",color:"#2E86AB",hotel:"제주키즈앤돌핀펜션 (2/2박)\n🕐 익일 체크아웃",schedule:[
{time:"08:30",title:"☀️ 펜션 아침",placeName:"제주키즈앤돌핀펜션",desc:"여유롭게 아침 식사",type:"food",coords:[33.3340,126.2050]},
{time:"10:00",title:"🦒 점보빌리지",placeName:"점보빌리지 제주",desc:"펜션에서 18km / 35분\n하윤이 신나게 놀기 좋은 곳",type:"spot",coords:[33.4000,126.2200],cost:30000},
{time:"13:00",title:"🍽️ 점심",desc:"점보빌리지 근처 식당",type:"food",cost:35000},
{time:"15:00",title:"🐬 돌고래 스팟",placeName:"신창풍차해안도로",desc:"남방큰돌고래 출몰 포인트\n해안 산책 & 풍차 뷰",type:"spot",coords:[33.3389,126.1797]},
{time:"16:30",title:"☕ 카페 휴식",desc:"해안가 카페에서 잠시 쉬기",type:"food",cost:15000},
{time:"17:30",title:"🛒 농협 장보기",placeName:"한경농협",desc:"저녁용 고기 & 식재료",type:"shopping",coords:[33.3420,126.2200]},
{time:"18:30",title:"🍖 고기 구워주는집",desc:"펜션 인근 직접 구워주는 고깃집\n자리 미리 확인",type:"food",warn:"예약 확인",cost:80000},
{time:"21:00",title:"🧸 펜션 키즈룸",placeName:"제주키즈앤돌핀펜션",desc:"하윤이 장난감 놀이",type:"etc",coords:[33.3340,126.2050]}
]},
{date:"6/3 (수)",region:"제주 시내 이동 — 베스트웨스턴 🏨",color:"#F5A623",hotel:"베스트웨스턴 제주\n📋 1박 82,846원 결제 완료\n🕐 체크인 15시 (1/1박)\n📍 시내권 · 공항 가까움",schedule:[
{time:"08:30",title:"☀️ 펜션 마지막 아침",placeName:"제주키즈앤돌핀펜션",desc:"체크아웃 준비",type:"food",coords:[33.3340,126.2050]},
{time:"11:00",title:"🧳 키즈앤돌핀 체크아웃",placeName:"제주키즈앤돌핀펜션",desc:"짐 차에 싣고 출발",type:"hotel",coords:[33.3340,126.2050]},
{time:"11:30",title:"🌳 곶자왈 / 산책",desc:"이동 중 간단 산책지\n(저지리 일대 추천)",type:"spot"},
{time:"13:00",title:"🍽️ 점심",desc:"제주 시내 방향 맛집",type:"food",cost:40000},
{time:"15:00",title:"🏨 베스트웨스턴 체크인",placeName:"Best Western Plus Jeju Airest City Hotel",desc:"시내 호텔 체크인",type:"hotel",coords:[33.4870,126.4980]},
{time:"16:00",title:"🌲 한라수목원",placeName:"한라수목원",desc:"가볍게 산책 (유모차 OK)",type:"spot",coords:[33.4561,126.4756]},
{time:"18:00",title:"🌅 이호테우 해변",placeName:"이호테우해변",desc:"말 등대 & 노을\n공항 근처 노을 명소",type:"spot",coords:[33.4998,126.4607]},
{time:"19:30",title:"🍽️ 시내 저녁",desc:"제주 시내 맛집 (흑돼지/해물탕)",type:"food",cost:90000},
{time:"21:00",title:"🛌 호텔 휴식",placeName:"Best Western Plus Jeju Airest City Hotel",desc:"하윤이 재우고 마무리",type:"hotel",coords:[33.4870,126.4980]}
]},
{date:"6/4 (목)",region:"제주 → 한국 ✈️🇰🇷",color:"#888",hotel:"귀국일 · 베스트웨스턴 체크아웃 11시",schedule:[
{time:"08:00",title:"☀️ 호텔 조식",placeName:"Best Western Plus Jeju Airest City Hotel",desc:"여유로운 아침",type:"food",coords:[33.4870,126.4980]},
{time:"11:00",title:"🧳 호텔 체크아웃",placeName:"Best Western Plus Jeju Airest City Hotel",desc:"짐 차에 싣고 출발",type:"hotel",coords:[33.4870,126.4980]},
{time:"11:30",title:"🛍️ 동문시장 / 기념품",placeName:"제주동문시장",desc:"오메기떡, 옥돔 등 선물",type:"shopping",coords:[33.5118,126.5275],cost:50000},
{time:"13:00",title:"🍽️ 마지막 점심",desc:"공항 인근 흑돼지/고기국수",type:"food",cost:50000},
{time:"15:00",title:"🌊 용두암 / 해안 산책",placeName:"용두암",desc:"마지막 바다 산책",type:"spot",coords:[33.5158,126.5125]},
{time:"17:00",title:"☕ 공항 인근 카페",desc:"체크인 전 잠시 휴식",type:"food",cost:15000},
{time:"19:00",title:"🪑 퓨어베베 카시트 반납",placeName:"Pure Bebe Jeju",desc:"19시 반납 데드라인",type:"move",warn:"19시까지 반납",coords:[33.5060,126.4790]},
{time:"19:30",title:"🚗 쏘카 반납",placeName:"Socar Jeju Airport",desc:"19:30 반납 데드라인\n주유 & 사진 확인",type:"move",warn:"19:30까지 반납",coords:[33.5077,126.4920]},
{time:"19:45",title:"🛫 제주공항 도착",placeName:"Jeju International Airport",desc:"국내선 체크인",type:"flight",coords:[33.5113,126.4914]},
{time:"20:50",title:"✈️ 제주항공 제주→김포",placeName:"Jeju International Airport",desc:"제주항공 | 1시간 15분",type:"flight",status:"confirmed",coords:[33.5113,126.4914]},
{time:"22:05",title:"🛬 김포공항 도착",placeName:"Gimpo International Airport",desc:"3박4일 제주 여행 무사 귀환!",type:"flight",coords:[37.5587,126.7913]}
]}
];
