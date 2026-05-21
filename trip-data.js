// ══════════ TRIP DATA ══════════
// 멀티 여행 시드. 각 trip = meta + days. localStorage/Firebase에 저장된 값이 없을 때만 사용됨.
// 새 여행 추가 시 DEFAULT_TRIPS 배열에 항목 추가.
window.DEFAULT_TRIPS=[
{id:'spain-2026',
 meta:{
  name:'🇪🇸 스페인 · 포르투갈 신혼여행',
  shortName:'스페인 · 포르투갈',
  coverEmoji:'🇪🇸',
  dateRange:'2026.09.13 — 09.26 · 14일',
  startDate:'2026-09-13', endDate:'2026-09-26',
  themeColor:'#E8725A',
  allowedEmails:['rachel506wnsgk@gmail.com','3hosungo@gmail.com'],
  currency:{code:'EUR',symbol:'€',defaultRate:1450,apiEnabled:true},
  timezone:{default:'CET',hourOffsets:{KST:9,CET:2,WEST:1},
    regionMap:[{matches:['포르투','도우로','마투지','아베이루'],tz:'WEST'}]},
  mapBounds:{center:[41.3851,2.1734],zoom:13,viewbox:'-9.5,43.8,4.5,36.0'},
  prefetchAreas:[
    {name:'바르셀로나',lat:41.39,lng:2.17,radius:.12},
    {name:'포르투',lat:41.15,lng:-8.61,radius:.10},
    {name:'마요르카',lat:39.57,lng:2.65,radius:.20},
    {name:'도우로',lat:41.10,lng:-7.78,radius:.15}
  ],
  weatherStatic:[
    {matches:['바르셀로나','라로카','한국→'],city:'바르셀로나',icon:'☀️',temp:'22-28°C',desc:'맑음'},
    {matches:['포르투','도우로','마투지','아베이루'],city:'포르투',icon:'⛅',temp:'17-24°C',desc:'구름 약간'},
    {matches:['마요르카','발데모사','소예르','팔마'],city:'마요르카',icon:'☀️',temp:'23-29°C',desc:'맑음'}
  ],
  liveWeatherCities:{barcelona:{lat:41.39,lon:2.17,name:'바르셀로나'},porto:{lat:41.15,lon:-8.61,name:'포르투'},mallorca:{lat:39.57,lon:2.65,name:'마요르카'}},
  defaultPhraseLang:'es',
  sosHeaderHtml:'유럽 통합 긴급번호: <a href="tel:112" style="color:#f87171;font-size:16px;font-weight:800">112</a>',
  taxRefund:{enabled:true,defaultCountry:'spain',rates:{spain:{name:'스페인',vat:21,minPurchase:90.16,refundPct:15.7},portugal:{name:'포르투갈',vat:23,minPurchase:61.50,refundPct:16}},countryOptions:[{value:'spain',label:'🇪🇸 스페인 (VAT 21%)'},{value:'portugal',label:'🇵🇹 포르투갈 (VAT 23%)'}],tipsHtml:'💡 스페인: 1회 €90.16 이상 구매 시 환급 가능<br>💡 포르투갈: 1회 €61.50 이상 구매 시 환급 가능<br>💡 바르셀로나 공항 T1 Tax Free 카운터에서 수속'},
  dColorOptions:[{value:'#E8725A',label:'바르셀로나'},{value:'#2E86AB',label:'포르투'},{value:'#F5A623',label:'마요르카'},{value:'#10B981',label:'초록'},{value:'#888',label:'회색'}],
  tipsHtml:'• <span class="hl-y">사전 예약 필수</span>: 사그라다파밀리아, 구엘공원, 카사바트요, 가이아 와이너리<br>• <span class="hl-p">라로카빌리지</span>: 셔틀버스 예약 필수, 10% 추가 할인<br>• <span class="hl-g">바르셀로나 교통</span>: 알단테 교통카드 발급<br>• <span class="hl-o">마요르카 렌트카</span>: skyscanner 가격비교<br>• 스페인 식사시간: 점심 14시, 저녁 21시 이후<br>• 포르투 도시세, 마요르카 숙소세 <span class="hl-y">현장 현금 결제</span>'
 },
 days:[
{date:"9/13 (일)",region:"한국 → 바르셀로나 ✈️",color:"#E8725A",hotel:"머큐어 바르셀로나 콘도르 ⭐⭐⭐⭐\nMercure Barcelona Condor\n📋 트립비토즈 #3508557\n🕐 체크인 14시 (1/3박)\n💰 3박 764,355원 (앱할인)\n🍳 조식 €14/인 · 도시세 64,404원\n📍 시내 지하철 20분 / 자전거 15분",schedule:[
{time:"11:50",title:"✈️ 인천공항 출발",placeName:"Incheon International Airport",desc:"OZ0511 | 터미널2 | 14시간 비행\n수하물: 23kg",type:"flight",status:"confirmed",coords:[37.4602,126.4407]},
{time:"19:10",title:"🛬 바르셀로나 도착",placeName:"Barcelona El Prat Airport",desc:"엘프라트 공항 T1",type:"flight",coords:[41.2971,2.0785]},
{time:"20:00",title:"🚌 공항→호텔",desc:"A2공항버스→V13 환승 (약 1시간)",type:"move"},
{time:"21:00",title:"🏨 호텔 체크인",placeName:"Mercure Barcelona Condor",desc:"머큐어 바르셀로나 콘도르",type:"hotel",coords:[41.3920,2.1531]},
{time:"21:30",title:"🍽️ 가벼운 첫날 저녁",desc:"호텔 근처 간단히 식사",type:"food"}
]},
{date:"9/14 (월)",region:"바르셀로나 — 가우디 투어 🏛️",color:"#E8725A",hotel:"머큐어 바르셀로나 콘도르 (2/3박)\nMercure Barcelona Condor",schedule:[
{time:"08:00",title:"☀️ 조식 & 출발",placeName:"Mercure Barcelona Condor",desc:"동키 자전거 or 지하철",type:"etc",coords:[41.3920,2.1531]},
{time:"09:00",title:"⛪ 사그라다 파밀리아",placeName:"Sagrada Familia",desc:"가우디의 미완성 걸작\n오전 방문 추천",type:"spot",warn:"사전 예약 필수",coords:[41.4036,2.1744],url:"https://sagradafamilia.org/tickets"},
{time:"11:00",title:"🏠 카사 바트요 / 라 페드레라",placeName:"Casa Batlló",desc:"그라시아 거리 가우디 건축물\n옥상 포토존 필수",type:"spot",warn:"사전 예약 권장",coords:[41.3916,2.1649]},
{time:"13:00",title:"🍽️ Cerveceria Catalana",placeName:"Cerveceria Catalana",desc:"No.1 타파스집\n꿀대구, 감바스 추천\n13시 전 도착",type:"food",coords:[41.3932,2.1576],cost:50000},
{time:"15:00",title:"🛍️ 파세이그 데 그라시아",placeName:"Passeig de Gràcia",desc:"명품 쇼핑 & 라치나타",type:"shopping",coords:[41.3920,2.1650]},
{time:"16:30",title:"🏖️ 보른 지구",placeName:"El Born Barcelona",desc:"중세 분위기 탐방\n카페에서 휴식",type:"spot",coords:[41.3853,2.1836]},
{time:"18:00",title:"🌊 바르셀로네타 해변",placeName:"Barceloneta Beach",desc:"지중해 석양 감상",type:"spot",coords:[41.3784,2.1925]},
{time:"19:00",title:"🍽️ El Xampanyet",placeName:"El Xampanyet",desc:"보른 지구 타파스 & 카바",type:"food",coords:[41.3845,2.1820],cost:40000},
{time:"21:00",title:"🌃 야경 산책",desc:"해변 야경 & 귀환",type:"spot",coords:[41.3784,2.1925]}
]},
{date:"9/15 (화)",region:"바르셀로나 — 고딕지구 & 몬주익 🏰",color:"#E8725A",hotel:"머큐어 바르셀로나 콘도르 (3/3박)\nMercure Barcelona Condor\n🕐 익일 체크아웃 12시",schedule:[
{time:"08:00",title:"☀️ 조식 & 출발",placeName:"Mercure Barcelona Condor",desc:"시내 관광 시작",type:"etc",coords:[41.3920,2.1531]},
{time:"08:30",title:"🛒 보케리아 시장",placeName:"Mercat de la Boqueria",desc:"200개+ 점포\n과일주스, 하몽 시식",type:"spot",coords:[41.3816,2.1719]},
{time:"09:30",title:"🏛️ 고딕지구 산책",placeName:"Barcelona Cathedral",desc:"대성당, 레이알 광장",type:"spot",coords:[41.3833,2.1761]},
{time:"11:00",title:"🎨 피카소 미술관",placeName:"Museu Picasso Barcelona",desc:"피카소 초기작 소장",type:"spot",warn:"예약 권장",coords:[41.3853,2.1811]},
{time:"12:00",title:"🍽️ El Paraguayo",placeName:"El Paraguayo Barcelona",desc:"고딕지구 추천 식당",type:"food",coords:[41.3825,2.1770],cost:35000},
{time:"13:00",title:"🚡 몬주익 이동",placeName:"Montjuïc Cable Car",desc:"지하철+케이블카",type:"move",coords:[41.3639,2.1592]},
{time:"14:00",title:"🏰 몬주익 성",placeName:"Castell de Montjuïc",desc:"바르셀로나 전경 최고 뷰",type:"spot",coords:[41.3635,2.1660]},
{time:"15:30",title:"🏛️ 카탈루냐 국립미술관",placeName:"Museu Nacional d'Art de Catalunya",desc:"스페인 광장 파노라마",type:"spot",coords:[41.3685,2.1533]},
{time:"17:00",title:"🍽️ La Pepita",placeName:"La Pepita Barcelona",desc:"몬타디토 맛집",type:"food",coords:[41.3978,2.1584],cost:30000},
{time:"18:30",title:"✨ 마법의 분수 쇼",placeName:"Magic Fountain of Montjuïc",desc:"9월 목/금/토 운영",type:"spot",coords:[41.3712,2.1518]},
{time:"20:00",title:"🧳 숙소 복귀",placeName:"Mercure Barcelona Condor",desc:"체크아웃 준비",type:"hotel",coords:[41.3920,2.1531]}
]},
{date:"9/16 (수)",region:"바르셀로나 → 포르투 🌉",color:"#2E86AB",hotel:"레전드 하우스 바이 스위트 포르토\nLegends House by Sweet Porto\n📋 아고다 #1694479710\n🕐 체크인 15시 (1/4박)\n💰 4박 924,036원 (쿠폰)\n🍳 조식 있음 · 무취 가능\n📍 상벤투역 바로앞 · 루이스강 도보 10분\n💵 도시세 41,088원 (현장 결제)",schedule:[
{time:"08:00",title:"🏨 체크아웃",placeName:"Mercure Barcelona Condor",desc:"머큐어 콘도르 체크아웃",type:"hotel",coords:[41.3920,2.1531]},
{time:"09:00",title:"☕ 브런치",desc:"바르셀로나 마지막 아침",type:"food"},
{time:"10:00",title:"🚌 공항 이동",placeName:"Barcelona El Prat Airport",desc:"지하철 약 40분",type:"move",coords:[41.2971,2.0785]},
{time:"17:35",title:"✈️ 바르셀로나→포르투",placeName:"Barcelona El Prat Airport",desc:"라이언에어 | 약 1시간",type:"flight",warn:"예약 확인",coords:[41.2971,2.0785]},
{time:"18:35",title:"🛬 포르투 도착",placeName:"Porto Airport",desc:"메트로 탑승 (알단테 카드)",type:"flight",coords:[41.2370,-8.6700]},
{time:"19:30",title:"🏨 숙소 체크인",placeName:"Legendary Porto Hotel",desc:"레전드 하우스\n상벤투역 앞",type:"hotel",coords:[41.1460,-8.6110]},
{time:"20:30",title:"🌉 동 루이스 다리",placeName:"Ponte Dom Luís I",desc:"야경 감상 & 강변 카페",type:"spot",coords:[41.1403,-8.6098]},
{time:"21:00",title:"🐙 Botequim da Ribeira",placeName:"Botequim da Ribeira",desc:"문어 맛집, 첫날 저녁",type:"food",coords:[41.1407,-8.6126],cost:40000}
]},
{date:"9/17 (목)",region:"포르투 — 가이아 & 크루즈 🍷",color:"#2E86AB",hotel:"레전드 하우스 바이 스위트 포르토 (2/4박)",schedule:[
{time:"08:30",title:"☀️ 조식",placeName:"São Bento Station Porto",desc:"상벤투역 아줄레주 감상",type:"etc",coords:[41.1459,-8.6106]},
{time:"09:00",title:"🗼 클레리구스 탑",placeName:"Torre dos Clérigos",desc:"360도 파노라마",type:"spot",coords:[41.1458,-8.6145]},
{time:"10:00",title:"📚 렐루 서점",placeName:"Livraria Lello",desc:"해리포터 영감 서점\n입장료 8유로",type:"spot",warn:"10시 오픈",coords:[41.1467,-8.6153],cost:12000},
{time:"11:00",title:"🚢 도우루강 크루즈",placeName:"Cais da Ribeira Porto",desc:"6개교 크루즈 약 1시간",type:"spot",warn:"사전 예약",coords:[41.1407,-8.6126],cost:25000},
{time:"12:30",title:"🍽️ Do Norte Café",placeName:"Do Norte Café Porto",desc:"숙소 도보 1분",type:"food",coords:[41.1460,-8.6110],cost:25000},
{time:"14:00",title:"🍷 가이아 와이너리",placeName:"Taylor's Port Vila Nova de Gaia",desc:"Taylor's or Graham's\n포트 와인 시음",type:"spot",warn:"예약 권장",coords:[41.1378,-8.6098],cost:20000},
{time:"16:00",title:"🌇 가이아 전망대",placeName:"Jardim do Morro",desc:"리베이라 파노라마",type:"spot",coords:[41.1375,-8.6105]},
{time:"17:00",title:"💙 카르무 성당",placeName:"Igreja do Carmo Porto",desc:"아줄레주 타일 포토스팟",type:"spot",coords:[41.1479,-8.6163]},
{time:"18:00",title:"🥚 만테이가리아",placeName:"Manteigaria Porto",desc:"에그타르트 맛집",type:"food",coords:[41.1458,-8.6126],cost:5000},
{time:"19:30",title:"🍽️ Taberna Dos Mercadores",placeName:"Taberna dos Mercadores",desc:"문어밥, 농어구이",type:"food",coords:[41.1418,-8.6114],cost:45000},
{time:"21:00",title:"🌃 리베이라 야경",placeName:"Cais da Ribeira Porto",desc:"도우루 강변 야경",type:"spot",coords:[41.1407,-8.6126]}
]},
{date:"9/18 (금)",region:"포르투 — 도우로 밸리 🍇",color:"#2E86AB",hotel:"레전드 하우스 바이 스위트 포르토 (3/4박)",schedule:[
{time:"08:00",title:"☀️ 투어 집결",placeName:"Legendary Porto Hotel",desc:"도우로 밸리 풀데이 투어",type:"etc",coords:[41.1460,-8.6110]},
{time:"09:00",title:"🚌 투어 출발",desc:"약 8시간, 포르투에서 1시간",type:"move",coords:[41.1460,-8.6110],cost:80000},
{time:"10:30",title:"🍇 도우루 강변",placeName:"Douro Valley",desc:"포도밭 절경",type:"spot",coords:[41.1631,-7.7917]},
{time:"11:30",title:"🏰 킨타 와이너리",placeName:"Quinta do Seixo",desc:"포트 와인 시음",type:"spot",coords:[41.1600,-7.7800]},
{time:"13:00",title:"🍽️ 투어 점심",desc:"투어 포함 식사",type:"food",coords:[41.1550,-7.7750]},
{time:"14:30",title:"🚤 도우로 보트",placeName:"Pinhão Douro",desc:"포도밭 강 유람",type:"spot",coords:[41.1600,-7.7850]},
{time:"17:30",title:"🚌 포르투 귀환",desc:"약 1.5시간",type:"move",coords:[41.1460,-8.6110]},
{time:"19:30",title:"🍽️ 저녁",desc:"숙소 근처 음식점",type:"food",coords:[41.1460,-8.6110],cost:35000}
]},
{date:"9/19 (토)",region:"포르투 — 마투지뉴스 & 아베이루 🏖️",color:"#2E86AB",hotel:"레전드 하우스 (4/4박)\n🕐 익일 체크아웃 11시\n→ 다음 숙소: 엘리오스 마요르카",schedule:[
{time:"08:30",title:"☀️ 출발",desc:"수영복 챙기기!",type:"etc",coords:[41.1460,-8.6110]},
{time:"09:00",title:"🏖️ 마투지뉴스 해변",placeName:"Praia de Matosinhos",desc:"포르투 근교 해변 (30분)",type:"spot",coords:[41.1829,-8.6886]},
{time:"11:00",title:"🦞 O Gaveto",placeName:"O Gaveto Matosinhos",desc:"해산물 맛집",type:"food",coords:[41.1825,-8.6880],cost:55000},
{time:"13:00",title:"🛶 아베이루 이동",placeName:"Aveiro",desc:"기차 약 40분",type:"move",coords:[40.6443,-8.6455]},
{time:"14:00",title:"🚣 몰리세이루 보트",placeName:"Aveiro Canal",desc:"전통 곤돌라 투어",type:"spot",coords:[40.6405,-8.6538],cost:15000},
{time:"15:00",title:"🍮 오부스 몰레스",placeName:"Confeitaria Peixinho Aveiro",desc:"아베이루 전통 디저트",type:"food",coords:[40.6443,-8.6455],cost:5000},
{time:"17:00",title:"🚂 포르투 귀환",placeName:"São Bento Station Porto",desc:"상벤투역",type:"move",coords:[41.1459,-8.6106]},
{time:"18:00",title:"🛍️ 마지막 쇼핑",placeName:"Rua de Santa Catarina Porto",desc:"산타 카테리나 거리",type:"shopping",coords:[41.1490,-8.6095]},
{time:"21:00",title:"✈️ 포르투→마요르카",placeName:"Porto Airport",desc:"라이언에어",type:"flight",warn:"예약 확인",coords:[41.2370,-8.6700]}
]},
{date:"9/20 (일)",region:"마요르카 — 팔마 도착 🌴",color:"#F5A623",hotel:"엘리오스 마요르카 호텔 앤 아파트먼트\nHelios Mallorca Hotel & Apartments\n📋 아고다 #1694459164\n🕐 익스프레스 체크인/아웃 (1/2박)\n💰 2박 511,844원\n🍳 조식 유료 추가 · 무취 불가 (50% 수수료)\n📍 공항 바로 근처 · 주차 €10/일\n💵 세금/봉사료 15,064원 (현장)\n⚠️ 트윈베드일 수 있음",schedule:[
{time:"—",title:"🛬 팔마 도착 (밤 12시)",placeName:"Palma de Mallorca Airport",desc:"택시 약 10분",type:"flight",coords:[39.5517,2.7388]},
{time:"—",title:"🏨 체크인",placeName:"Helios Mallorca Hotel",desc:"공항 근처, 조식 포함",type:"hotel",coords:[39.5550,2.7350]},
{time:"—",title:"😴 휴식",desc:"바로 취침",type:"etc"}
]},
{date:"9/21 (월)",region:"마요르카 — 팔마 & 칼로데스모로 🏖️",color:"#F5A623",hotel:"엘리오스 마요르카 (2/2박)\n🕐 익일 체크아웃",schedule:[
{time:"08:00",title:"🍳 호텔 조식",placeName:"Helios Mallorca Hotel",desc:"수영복 준비",type:"food",coords:[39.5550,2.7350]},
{time:"09:00",title:"🌊 칼로데스모로",placeName:"Caló des Moro",desc:"마요르카 최고 해변",type:"spot",coords:[39.3340,3.1190]},
{time:"11:00",title:"🏊 수영 & 휴식",placeName:"Caló des Moro",desc:"절벽 뷰 포토타임",type:"spot",coords:[39.3340,3.1190]},
{time:"13:00",title:"🍽️ Es Caragol",placeName:"Platja des Caragol",desc:"해변 해산물",type:"food",coords:[39.3350,3.1200],cost:45000},
{time:"15:00",title:"🚌 팔마 이동",placeName:"Palma de Mallorca",desc:"버스 약 30분",type:"move",coords:[39.5696,2.6502]},
{time:"16:00",title:"🏛️ 팔마 대성당",placeName:"Cathedral of Palma de Mallorca",desc:"고딕 양식, 가우디 참여",type:"spot",coords:[39.5674,2.6486]},
{time:"17:00",title:"🏰 알무다이나 왕궁",placeName:"Royal Palace of La Almudaina",desc:"아랍+고딕 궁전",type:"spot",coords:[39.5683,2.6478]},
{time:"18:30",title:"🌇 팔마 항구 석양",placeName:"Port of Palma",desc:"요트 배경 포토",type:"spot",coords:[39.5630,2.6350]},
{time:"19:30",title:"🍽️ Celler Sa Premsa",placeName:"Celler Sa Premsa",desc:"마요르카 전통 음식",type:"food",coords:[39.5720,2.6520],cost:40000}
]},
{date:"9/22 (화)",region:"마요르카 — 발데모사 & 소예르 🏔️",color:"#F5A623",hotel:"그란 호텔 소예르 ⭐⭐⭐⭐⭐\nGran Hotel Sóller\n📋 트립비토즈 #3510267\n🕐 체크인 15시 (1/2박)\n💰 2박 622,354원 (앱할인)\n🍳 조식·스파 포함 · 무취 가능\n📍 주차 €18/일\n💵 현장결제 30,131원",schedule:[
{time:"08:00",title:"🍳 조식 & 체크아웃",placeName:"Helios Mallorca Hotel",desc:"렌트카 준비",type:"food",coords:[39.5550,2.7350]},
{time:"09:00",title:"🚗 발데모사",placeName:"Valldemossa",desc:"렌트카 25분, 트라문타나 드라이브",type:"move",coords:[39.7108,2.6224]},
{time:"10:00",title:"⛪ 발데모사 수도원",placeName:"Real Cartuja de Valldemossa",desc:"쇼팽 기념관",type:"spot",coords:[39.7108,2.6224],cost:15000},
{time:"11:00",title:"🥐 마을 산책",placeName:"Valldemossa",desc:"엔사이마다 빵",type:"spot",coords:[39.7115,2.6230]},
{time:"12:00",title:"🚗 데이아 이동",placeName:"Deià Mallorca",desc:"절벽 해안 드라이브 20분",type:"move",coords:[39.7482,2.6494]},
{time:"12:30",title:"🍽️ Café Sa Fonda",placeName:"Café Sa Fonda Deià",desc:"테라스 산 전망",type:"food",coords:[39.7482,2.6494],cost:35000},
{time:"14:00",title:"🏘️ 데이아 산책",placeName:"Deià Mallorca",desc:"예술가의 마을",type:"spot",coords:[39.7482,2.6494]},
{time:"15:00",title:"🚗 소예르 체크인",placeName:"Gran Hotel Sóller",desc:"그란 호텔 소예르",type:"hotel",coords:[39.7660,2.7155]},
{time:"16:00",title:"🧖 호텔 스파",placeName:"Gran Hotel Sóller",desc:"트라문타나 뷰 수영장",type:"etc",coords:[39.7660,2.7155]},
{time:"17:30",title:"🍊 소예르 구시가지",placeName:"Plaça Constitució Sóller",desc:"오렌지 광장 카페",type:"spot",coords:[39.7655,2.7148]},
{time:"19:00",title:"🍽️ Brises del Mar",placeName:"Brises del Mar Port de Sóller",desc:"소예르 항구 빠에야",type:"food",coords:[39.7952,2.6908],cost:50000}
]},
{date:"9/23 (수)",region:"마요르카 — 소예르 & 트램 🚃",color:"#F5A623",hotel:"그란 호텔 소예르 (2/2박)\n🕐 익일 체크아웃 12시",schedule:[
{time:"08:30",title:"☀️ 조식",placeName:"Gran Hotel Sóller",desc:"테라스 산맥 뷰",type:"food",coords:[39.7660,2.7155]},
{time:"09:30",title:"🚃 소예르 트램",placeName:"Tranvía de Sóller",desc:"오렌지 밭 뷰 20분",type:"spot",warn:"사전 예약",coords:[39.7655,2.7148],cost:10000},
{time:"10:30",title:"🏖️ 포르트 데 소예르",placeName:"Port de Sóller",desc:"수영 & 스노클링",type:"spot",coords:[39.7952,2.6908]},
{time:"13:00",title:"🍽️ Nautilus Soller",placeName:"Restaurante Nautilus Port de Sóller",desc:"절벽 위 빠에야 인생뷰",type:"food",warn:"예약 필수",coords:[39.7952,2.6908],cost:60000},
{time:"14:30",title:"🍊 오렌지 광장",placeName:"Plaça Constitució Sóller",desc:"셔벗 아이스크림",type:"spot",coords:[39.7655,2.7148]},
{time:"16:00",title:"🚗 팔마 공항",placeName:"Palma de Mallorca Airport",desc:"렌트카 반납 40분",type:"move",coords:[39.5517,2.7388]},
{time:"—",title:"✈️ 팔마→바르셀로나",placeName:"Palma de Mallorca Airport",desc:"부엘링 IHHNHP\n25kg 수하물",type:"flight",status:"confirmed",coords:[39.5517,2.7388]},
{time:"19:00",title:"🏨 H10 메트로폴리탄",placeName:"H10 Metropolitan Hotel Barcelona",desc:"예약번호: 1694841847",type:"hotel",coords:[41.3887,2.1640]}
]},
{date:"9/24 (목)",region:"바르셀로나 — 라로카빌리지 🛍️",color:"#E8725A",hotel:"H10 메트로폴리탄 호텔\nH10 Metropolitan Hotel\n📋 아고다 #1694841847\n🕐 체크인 15시 (1/1박)\n💰 1박 394,984원 (앱할인)\n🍳 조식 미포함 · 무취 가능\n💵 도시세 18,660원 (현장)",schedule:[
{time:"08:00",title:"☀️ 쇼핑 준비",placeName:"H10 Metropolitan Hotel Barcelona",desc:"셔틀버스 예약 확인",type:"etc",coords:[41.3887,2.1640]},
{time:"09:00",title:"🚌 라로카빌리지",placeName:"La Roca Village",desc:"셔틀버스",type:"move",warn:"사전 예약 필수",coords:[41.6103,2.3422]},
{time:"10:00",title:"🛍️ 라로카빌리지",placeName:"La Roca Village",desc:"150개+ 부티크 60% 할인",type:"shopping",coords:[41.6103,2.3422],cost:500000},
{time:"13:00",title:"🍽️ 아울렛 점심",placeName:"La Roca Village",desc:"아울렛 내 레스토랑",type:"food",coords:[41.6103,2.3422],cost:25000},
{time:"15:00",title:"🚌 복귀",placeName:"Passeig de Gràcia",desc:"그라시아 거리",type:"move",coords:[41.3920,2.1650]},
{time:"16:00",title:"🏡 구엘공원",placeName:"Park Güell",desc:"모자이크 테라스",type:"spot",warn:"사전 예약 필수",coords:[41.4145,2.1527],cost:15000},
{time:"17:30",title:"🛍️ 고딕지구 쇼핑",placeName:"Barcelona Gothic Quarter",desc:"라치나타, 기념품",type:"shopping",coords:[41.3833,2.1761]},
{time:"19:00",title:"🌇 마지막 타파스",placeName:"Barcelona Gothic Quarter",desc:"고딕지구 타파스바",type:"food",coords:[41.3833,2.1761],cost:40000},
{time:"21:00",title:"🧳 귀국 준비",placeName:"H10 Metropolitan Hotel Barcelona",desc:"택스리펀 서류 확인",type:"hotel",coords:[41.3887,2.1640]}
]},
{date:"9/25 (금)",region:"바르셀로나 → 한국 ✈️🇰🇷",color:"#888",hotel:"귀국일 · H10 메트로폴리탄 체크아웃 12시\n→ 짐 호텔 보관 가능",schedule:[
{time:"08:00",title:"☀️ 마지막 아침",placeName:"H10 Metropolitan Hotel Barcelona",desc:"체크아웃 준비",type:"food",coords:[41.3887,2.1640]},
{time:"10:00",title:"🛍️ 마지막 쇼핑",placeName:"Mercadona Barcelona",desc:"mercadona 마트",type:"shopping",coords:[41.3833,2.1761]},
{time:"12:00",title:"🏨 체크아웃",placeName:"H10 Metropolitan Hotel Barcelona",desc:"짐 호텔에 보관",type:"hotel",coords:[41.3887,2.1640]},
{time:"13:00",title:"🍽️ 마지막 점심",placeName:"El Xampanyet",desc:"La Pepita or El Xampanyet",type:"food",coords:[41.3845,2.1820],cost:40000},
{time:"16:00",title:"🚌 공항 이동",placeName:"Barcelona El Prat Airport",desc:"에어로버스 40분",type:"move",coords:[41.2971,2.0785]},
{time:"18:30",title:"🛍️ 면세점",placeName:"Barcelona El Prat Airport Terminal 1",desc:"택스리펀 수속 필수!",type:"shopping",coords:[41.2971,2.0785]},
{time:"20:50",title:"✈️ 바르셀로나 출발",placeName:"Barcelona El Prat Airport",desc:"OZ0512 | 12시간\n인천 9/26 16:20 도착",type:"flight",status:"confirmed",coords:[41.2971,2.0785]}
]},
{date:"9/26 (토)",region:"한국 도착 🇰🇷",color:"#888",hotel:"—",schedule:[
{time:"16:20",title:"🛬 인천공항 도착",placeName:"Incheon International Airport",desc:"14일간의 여행 무사 귀환!",type:"flight",coords:[37.4602,126.4407]}
]}
]
},
{id:'jeju-2026',
 meta:{
  name:'🍊 제주 가족여행',
  shortName:'제주',
  coverEmoji:'🍊',
  dateRange:'2026.06.01 — 06.04 · 3박4일',
  startDate:'2026-06-01', endDate:'2026-06-04',
  themeColor:'#2E86AB',
  allowedEmails:['3hosungo@gmail.com','h2eungil24@gmail.com'],
  currency:{code:'KRW',symbol:'₩',defaultRate:1,apiEnabled:false},
  timezone:{default:'KST',hourOffsets:{KST:9},regionMap:[]},
  mapBounds:{center:[33.4890,126.4983],zoom:11,viewbox:'126.10,33.60,126.95,33.15'},
  prefetchAreas:[
    {name:'제주 서부',lat:33.35,lng:126.22,radius:.18},
    {name:'제주 시내',lat:33.50,lng:126.51,radius:.10},
    {name:'제주 전역',lat:33.40,lng:126.55,radius:.30}
  ],
  weatherStatic:[
    {matches:['서부','점보','돌고래'],city:'제주 서부',icon:'☀️',temp:'19-24°C',desc:'맑음'},
    {matches:['시내','베스트웨스턴'],city:'제주 시내',icon:'⛅',temp:'20-25°C',desc:'맑음/구름'},
    {matches:['제주','한국'],city:'제주',icon:'🌤️',temp:'19-25°C',desc:'맑음'}
  ],
  liveWeatherCities:{jeju_west:{lat:33.34,lon:126.21,name:'제주 서부'},jeju_city:{lat:33.49,lon:126.50,name:'제주 시내'}},
  defaultPhraseLang:'jeju',
  sosHeaderHtml:'긴급: <a href="tel:112" style="color:#f87171;font-size:16px;font-weight:800">112</a> · <a href="tel:119" style="color:#f87171;font-size:16px;font-weight:800">119</a> · 관광 안내 <a href="tel:1330" style="color:#60a5fa;font-size:14px;font-weight:800">1330</a>',
  taxRefund:{enabled:false},
  dColorOptions:[{value:'#E8725A',label:'도착/오렌지'},{value:'#2E86AB',label:'바다/블루'},{value:'#F5A623',label:'시내/옐로'},{value:'#10B981',label:'자연/초록'},{value:'#888',label:'귀국/회색'}],
  tipsHtml:'• <span class="hl-y">렌트카 반납</span>: 6/4 19:30 쏘카 / 19:00 퓨어베베 카시트<br>• <span class="hl-p">키즈앤돌핀펜션</span>: 키즈 장난감 풀세팅, 하윤이 놀기 최적<br>• <span class="hl-g">아르떼뮤지엄</span>: 사전 예약 권장 (현장 매진 잦음)<br>• <span class="hl-o">돌고래 스팟</span>: 신창풍차해안도로 / 김녕 일대<br>• 제주 서부 식당은 브레이크타임 多 — 점심 14시 전 도착 권장<br>• 캐스퍼 30kg 초과 시 <span class="hl-y">1kg당 240원</span> 추가 과금'
 },
 days:[
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
{time:"13:00",title:"🍜 한림칼국수 (옹포)",placeName:"한림칼국수 옹포본점",desc:"한림 옹포리 보말칼국수 도민맛집\n점보빌리지에서 차로 약 10분",type:"food",coords:[33.4080,126.2620],cost:35000},
{time:"15:00",title:"🐬 돌고래 스팟",placeName:"신창풍차해안도로",desc:"남방큰돌고래 출몰 포인트\n해안 산책 & 풍차 뷰",type:"spot",coords:[33.3389,126.1797]},
{time:"16:30",title:"☕ 어니스트 한경",placeName:"어니스트 한경 두모리",desc:"한경면 두모리 도민 카페\n돌고래 스팟에서 차로 약 10분, 펜션 방향",type:"food",coords:[33.3470,126.1880],cost:15000},
{time:"17:30",title:"🛒 농협 장보기",placeName:"한경농협",desc:"저녁용 고기 & 식재료",type:"shopping",coords:[33.3420,126.2200]},
{time:"18:30",title:"🍖 한라산아래첫마을 (봉성)",placeName:"한라산아래첫마을 봉성리",desc:"안덕 봉성 직화 흑돼지·메밀 도민 1위급\n펜션에서 차로 약 25분 · 예약 권장",type:"food",warn:"예약 권장 · 웨이팅 多",coords:[33.3290,126.3520],cost:80000},
{time:"21:00",title:"🧸 펜션 키즈룸",placeName:"제주키즈앤돌핀펜션",desc:"하윤이 장난감 놀이",type:"etc",coords:[33.3340,126.2050]}
]},
{date:"6/3 (수)",region:"제주 시내 이동 — 베스트웨스턴 🏨",color:"#F5A623",hotel:"베스트웨스턴 제주\n📋 1박 82,846원 결제 완료\n🕐 체크인 15시 (1/1박)\n📍 시내권 · 공항 가까움",schedule:[
{time:"08:30",title:"☀️ 펜션 마지막 아침",placeName:"제주키즈앤돌핀펜션",desc:"체크아웃 준비",type:"food",coords:[33.3340,126.2050]},
{time:"11:00",title:"🧳 키즈앤돌핀 체크아웃",placeName:"제주키즈앤돌핀펜션",desc:"짐 차에 싣고 출발",type:"hotel",coords:[33.3340,126.2050]},
{time:"11:30",title:"🌳 곶자왈 / 산책",desc:"이동 중 간단 산책지\n(저지리 일대 추천)",type:"spot"},
{time:"13:00",title:"🍲 은희네해장국 (노형)",placeName:"은희네해장국 노형점",desc:"제주 도민 소고기해장국 1위급\n시내 진입 직전 · 호텔 차로 5분",type:"food",warn:"웨이팅 多",coords:[33.4760,126.4860],cost:40000},
{time:"15:00",title:"🏨 베스트웨스턴 체크인",placeName:"Best Western Plus Jeju Airest City Hotel",desc:"시내 호텔 체크인",type:"hotel",coords:[33.4870,126.4980]},
{time:"16:00",title:"🌲 한라수목원",placeName:"한라수목원",desc:"가볍게 산책 (유모차 OK)",type:"spot",coords:[33.4561,126.4756]},
{time:"18:00",title:"🌅 이호테우 해변",placeName:"이호테우해변",desc:"말 등대 & 노을\n공항 근처 노을 명소",type:"spot",coords:[33.4998,126.4607]},
{time:"19:30",title:"🍖 흑돼지가야지 (노형)",placeName:"흑돼지가야지 노형점",desc:"베스트웨스턴 호텔에서 차로 5분\n도민 직화 흑돼지 · 예약 권장",type:"food",warn:"예약 권장",coords:[33.4790,126.4790],cost:90000},
{time:"21:00",title:"🛌 호텔 휴식",placeName:"Best Western Plus Jeju Airest City Hotel",desc:"하윤이 재우고 마무리",type:"hotel",coords:[33.4870,126.4980]}
]},
{date:"6/4 (목)",region:"제주 → 한국 ✈️🇰🇷",color:"#888",hotel:"귀국일 · 베스트웨스턴 체크아웃 11시",schedule:[
{time:"08:00",title:"☀️ 호텔 조식",placeName:"Best Western Plus Jeju Airest City Hotel",desc:"여유로운 아침",type:"food",coords:[33.4870,126.4980]},
{time:"11:00",title:"🧳 호텔 체크아웃",placeName:"Best Western Plus Jeju Airest City Hotel",desc:"짐 차에 싣고 출발",type:"hotel",coords:[33.4870,126.4980]},
{time:"11:30",title:"🛍️ 동문시장 / 기념품",placeName:"제주동문시장",desc:"오메기떡, 옥돔 등 선물",type:"shopping",coords:[33.5118,126.5275],cost:50000},
{time:"13:00",title:"🍜 삼대국수회관 일도점",placeName:"삼대국수회관 일도점",desc:"제주시 일도동 고기국수 도민맛집\n공항에서 차로 약 10분",type:"food",coords:[33.5158,126.5346],cost:50000},
{time:"15:00",title:"🌊 용두암 / 해안 산책",placeName:"용두암",desc:"마지막 바다 산책",type:"spot",coords:[33.5158,126.5125]},
{time:"17:00",title:"☕ 도두봉 카페거리",placeName:"도두봉 카페거리",desc:"공항 인근 도두동 바다 뷰 카페 골목\n체크인 전 잠시 휴식",type:"food",coords:[33.5070,126.4720],cost:15000},
{time:"19:00",title:"🪑 퓨어베베 카시트 반납",placeName:"Pure Bebe Jeju",desc:"19시 반납 데드라인",type:"move",warn:"19시까지 반납",coords:[33.5060,126.4790]},
{time:"19:30",title:"🚗 쏘카 반납",placeName:"Socar Jeju Airport",desc:"19:30 반납 데드라인\n주유 & 사진 확인",type:"move",warn:"19:30까지 반납",coords:[33.5077,126.4920]},
{time:"19:45",title:"🛫 제주공항 도착",placeName:"Jeju International Airport",desc:"국내선 체크인",type:"flight",coords:[33.5113,126.4914]},
{time:"20:50",title:"✈️ 제주항공 제주→김포",placeName:"Jeju International Airport",desc:"제주항공 | 1시간 15분",type:"flight",status:"confirmed",coords:[33.5113,126.4914]},
{time:"22:05",title:"🛬 김포공항 도착",placeName:"Gimpo International Airport",desc:"3박4일 제주 여행 무사 귀환!",type:"flight",coords:[37.5587,126.7913]}
]}
]
}
];
// 기존 코드 호환: 첫 trip의 days만 노출
window.DEFAULT_TRIP_DAYS=window.DEFAULT_TRIPS[0].days;
