// ══════════ TRIP ASSETS ══════════
// trip-data.js의 메타에서 분리한 "큰" 자료 — phrases / sosContacts / transportDetails.
// setCurrentTrip(tripId)이 이 객체에서 골라 PHRASES / SOS_CONTACTS / TRANSPORT_DETAILS에 재할당한다.
window.TRIP_ASSETS={
'spain-2026':{
  phrases:{
    es:{name:'스페인어 🇪🇸',sections:{
      '👋 인사/기본':[
        {ko:'안녕하세요',local:'Hola',pron:'올라'},
        {ko:'감사합니다',local:'Gracias',pron:'그라시아스'},
        {ko:'부탁합니다/제발',local:'Por favor',pron:'뽀르 파보르'},
        {ko:'네/아니요',local:'Sí / No',pron:'시 / 노'},
        {ko:'실례합니다',local:'Perdón / Disculpe',pron:'뻬르돈 / 디스꿀뻬'},
        {ko:'좋은 하루!',local:'¡Buen día!',pron:'부엔 디아'},
        {ko:'안녕히 가세요',local:'Adiós',pron:'아디오스'},
        {ko:'영어 가능하세요?',local:'¿Habla inglés?',pron:'아블라 잉글레스?'}
      ],
      '🍽️ 식당':[
        {ko:'메뉴 주세요',local:'La carta, por favor',pron:'라 까르따, 뽀르 파보르'},
        {ko:'이거 주세요',local:'Esto, por favor',pron:'에스또, 뽀르 파보르'},
        {ko:'계산서 주세요',local:'La cuenta, por favor',pron:'라 꾸엔따, 뽀르 파보르'},
        {ko:'맛있어요!',local:'¡Está delicioso!',pron:'에스따 델리시오소!'},
        {ko:'물 주세요',local:'Agua, por favor',pron:'아구아, 뽀르 파보르'},
        {ko:'맥주/와인 한잔',local:'Una cerveza / Un vino',pron:'우나 세르베사 / 운 비노'},
        {ko:'예약했습니다',local:'Tengo una reserva',pron:'뗑고 우나 레세르바'},
        {ko:'2명이요',local:'Para dos, por favor',pron:'빠라 도스, 뽀르 파보르'}
      ],
      '🚌 교통/이동':[
        {ko:'~어디에 있나요?',local:'¿Dónde está...?',pron:'돈데 에스따...?'},
        {ko:'얼마나 걸려요?',local:'¿Cuánto tiempo?',pron:'꾸안또 띠엠뽀?'},
        {ko:'택시 불러주세요',local:'¿Puede llamar un taxi?',pron:'뿌에데 야마르 운 딱시?'},
        {ko:'여기서 세워주세요',local:'Pare aquí, por favor',pron:'빠레 아끼, 뽀르 파보르'},
        {ko:'~까지 얼마예요?',local:'¿Cuánto cuesta hasta...?',pron:'꾸안또 꾸에스따 아스따...?'},
        {ko:'왼쪽/오른쪽',local:'Izquierda / Derecha',pron:'이스끼에르다 / 데레차'}
      ],
      '🛍️ 쇼핑':[
        {ko:'얼마예요?',local:'¿Cuánto cuesta?',pron:'꾸안또 꾸에스따?'},
        {ko:'할인 되나요?',local:'¿Tiene descuento?',pron:'띠에네 데스꾸엔또?'},
        {ko:'카드 되나요?',local:'¿Aceptan tarjeta?',pron:'아셉딴 따르헤따?'},
        {ko:'택스리펀 되나요?',local:'¿Tax free?',pron:'탁스 프리?'},
        {ko:'이거 볼 수 있을까요?',local:'¿Puedo ver esto?',pron:'뿌에도 베르 에스또?'}
      ],
      '🚨 긴급':[
        {ko:'도와주세요!',local:'¡Ayuda!',pron:'아유다!'},
        {ko:'경찰을 불러주세요',local:'Llame a la policía',pron:'야메 아 라 뽈리시아'},
        {ko:'병원이 어디에요?',local:'¿Dónde está el hospital?',pron:'돈데 에스따 엘 오스삐딸?'},
        {ko:'아파요',local:'Me duele',pron:'메 두엘레'},
        {ko:'여권을 잃어버렸어요',local:'He perdido mi pasaporte',pron:'에 뻬르디도 미 빠사뽀르떼'},
        {ko:'대사관 전화번호',local:'Embajada de Corea: +34 91 353 2000',pron:''}
      ]
    }},
    pt:{name:'포르투갈어 🇵🇹',sections:{
      '👋 인사/기본':[
        {ko:'안녕하세요',local:'Olá',pron:'올라'},
        {ko:'감사합니다',local:'Obrigado(a)',pron:'오브리가두(다)'},
        {ko:'부탁합니다',local:'Por favor',pron:'뽀르 파보르'},
        {ko:'네/아니요',local:'Sim / Não',pron:'심 / 나웅'},
        {ko:'실례합니다',local:'Desculpe',pron:'데스쿨프'},
        {ko:'안녕히 가세요',local:'Adeus',pron:'아데우스'},
        {ko:'영어 가능하세요?',local:'Fala inglês?',pron:'팔라 잉글레스?'}
      ],
      '🍽️ 식당':[
        {ko:'메뉴 주세요',local:'A ementa, por favor',pron:'아 에멘따, 뽀르 파보르'},
        {ko:'계산서 주세요',local:'A conta, por favor',pron:'아 꼰따, 뽀르 파보르'},
        {ko:'맛있어요!',local:'Está delicioso!',pron:'이스따 델리시오주!'},
        {ko:'물 주세요',local:'Água, por favor',pron:'아구아, 뽀르 파보르'},
        {ko:'맥주/와인 한잔',local:'Uma cerveja / Um vinho',pron:'우마 세르베자 / 움 비뉴'},
        {ko:'2명이요',local:'Para dois, por favor',pron:'빠라 도이스, 뽀르 파보르'}
      ],
      '🚌 교통/이동':[
        {ko:'~어디에 있나요?',local:'Onde é...?',pron:'온드 에...?'},
        {ko:'얼마나 걸려요?',local:'Quanto tempo?',pron:'꽌뚜 뗌뿌?'},
        {ko:'여기서 세워주세요',local:'Pare aqui, por favor',pron:'빠르 아끼, 뽀르 파보르'},
        {ko:'왼쪽/오른쪽',local:'Esquerda / Direita',pron:'이스께르다 / 디레이따'}
      ],
      '🛍️ 쇼핑':[
        {ko:'얼마예요?',local:'Quanto custa?',pron:'꽌뚜 꾸스따?'},
        {ko:'카드 되나요?',local:'Aceita cartão?',pron:'아세이따 까르따웅?'}
      ],
      '🚨 긴급':[
        {ko:'도와주세요!',local:'Ajuda!',pron:'아주다!'},
        {ko:'경찰을 불러주세요',local:'Chame a polícia',pron:'샤미 아 뽈리시아'},
        {ko:'병원이 어디에요?',local:'Onde é o hospital?',pron:'온드 에 우 오스피따우?'},
        {ko:'대사관 전화번호',local:'Embaixada da Coreia: +351 21 793 7200',pron:''}
      ]
    }}
  },
  sosContacts:[
    {icon:'🏛️',title:'주스페인 한국대사관',sub:'마드리드 | 월-금 09:00-18:00',tel:'+34913532000',bg:'rgba(59,130,246,.1)',border:'rgba(59,130,246,.25)',btnBg:'rgba(59,130,246,.2)',btnColor:'#60a5fa'},
    {icon:'🏛️',title:'주포르투갈 한국대사관',sub:'리스본 | 월-금 09:00-18:00',tel:'+351217937200',bg:'rgba(59,130,246,.1)',border:'rgba(59,130,246,.25)',btnBg:'rgba(59,130,246,.2)',btnColor:'#60a5fa'},
    {icon:'🚔',title:'스페인 경찰 (Policía)',sub:'범죄/도난 신고',tel:'112',bg:'rgba(239,68,68,.08)',border:'rgba(239,68,68,.2)',btnBg:'rgba(239,68,68,.2)',btnColor:'#f87171'},
    {icon:'🚑',title:'유럽 공통 긴급번호',sub:'경찰/소방/구급 통합',tel:'112',bg:'rgba(239,68,68,.08)',border:'rgba(239,68,68,.2)',btnBg:'rgba(239,68,68,.2)',btnColor:'#f87171'},
    {icon:'🏥',title:'관광객 전용 핫라인 (스페인)',sub:'Tourist Helpline (영어 가능)',tel:'902102112',bg:'rgba(16,185,129,.08)',border:'rgba(16,185,129,.2)',btnBg:'rgba(16,185,129,.2)',btnColor:'#34d399'},
    {icon:'💳',title:'카드 분실 신고',sub:'비자: 800-811-1121 / 마스터: 900-971-231',tel:'800811121',bg:'rgba(245,166,35,.08)',border:'rgba(245,166,35,.2)',btnBg:'rgba(245,166,35,.2)',btnColor:'#F5A623'},
    {icon:'🛡️',title:'여행자보험 콜센터',sub:'보험사 연락처를 저장하세요',tel:'',bg:'rgba(139,92,246,.08)',border:'rgba(139,92,246,.2)',btnBg:'rgba(139,92,246,.2)',btnColor:'#c4b5fd'}
  ],
  transportDetails:{
    '공항→호텔':{routes:['A2 공항버스 → V13 환승'],fare:'€6.75',interval:'5~10분',taxi:'€35~45 (약 30분)'},
    '공항 이동':{routes:['L9 지하철 → 엘프라트 공항'],fare:'€5.15 (알단테)',interval:'7분',taxi:'€40~50'},
    '몬주익 이동':{routes:['L1/L3 지하철 → 텔레페릭'],fare:'€2.40+€13.50',interval:'5분',taxi:'€10~15'},
    '라로카빌리지':{routes:['Shopping Express 셔틀'],fare:'€20 왕복',interval:'사전예약',taxi:'€100~120'},
    '팔마 이동':{routes:['TIB 401/412 버스'],fare:'€8~10',interval:'30분',taxi:'€80~100'},
    '소예르 트램':{routes:['소예르 트램 (Port de Soller)'],fare:'€7',interval:'30분'},
    '아베이루 이동':{routes:['CP 기차 (상벤투→아베이루)'],fare:'€3.55',interval:'1시간'},
    '투어 출발':{routes:['GetYourGuide 픽업'],fare:'투어 포함',interval:'09:00 출발'}
  }
},
'jeju-2026':{
  phrases:{
    jeju:{name:'제주 사투리 🍊',sections:{
      '👋 인사/기본':[
        {ko:'안녕하세요',local:'안녕허우꽈?',pron:'안녕허우꽈'},
        {ko:'반갑수다',local:'반갑수다',pron:'반갑수다'},
        {ko:'어디서 오셨어요?',local:'어디서 오십디강?',pron:'어디서 오십디강'},
        {ko:'고맙습니다',local:'고맙수다',pron:'고맙수다'},
        {ko:'안녕히 가세요',local:'잘 갑서양',pron:'잘 갑서양'},
        {ko:'아이가 귀엽다',local:'아기 곱다',pron:'아기 곱다'}
      ],
      '🍽️ 식당/주문':[
        {ko:'이거 뭐예요?',local:'이거 뭐꽈?',pron:'이거 뭐꽈'},
        {ko:'맛있다',local:'맛조수다',pron:'맛조수다'},
        {ko:'배부르다',local:'베불러수다',pron:'베불러수다'},
        {ko:'천천히 드세요',local:'쉬멍쉬멍 드십서',pron:'쉬멍쉬멍 드십서'}
      ],
      '🐬 자연/관광':[
        {ko:'바람이 많다',local:'보름이 쎄다',pron:'보름이 쎄다'},
        {ko:'바다가 예쁘다',local:'바당이 곱다',pron:'바당이 곱다'},
        {ko:'돌고래',local:'곰생이',pron:'곰생이 (남방큰돌고래)'},
        {ko:'한라산',local:'한라산',pron:'한라산'}
      ],
      '🚨 긴급':[
        {ko:'경찰',local:'112',pron:''},
        {ko:'구급/소방',local:'119',pron:''},
        {ko:'관광 안내',local:'1330',pron:'한국관광공사 24시'},
        {ko:'제주 관광경찰',local:'064-746-1234',pron:''}
      ]
    }}
  },
  sosContacts:[
    {icon:'🚔',title:'경찰',sub:'범죄/사고/도난 신고',tel:'112',bg:'rgba(239,68,68,.08)',border:'rgba(239,68,68,.2)',btnBg:'rgba(239,68,68,.2)',btnColor:'#f87171'},
    {icon:'🚑',title:'구급/소방',sub:'화재·응급의료',tel:'119',bg:'rgba(239,68,68,.08)',border:'rgba(239,68,68,.2)',btnBg:'rgba(239,68,68,.2)',btnColor:'#f87171'},
    {icon:'🏛️',title:'관광 안내 (1330)',sub:'한국관광공사 24시 · 영중일 가능',tel:'1330',bg:'rgba(59,130,246,.1)',border:'rgba(59,130,246,.25)',btnBg:'rgba(59,130,246,.2)',btnColor:'#60a5fa'},
    {icon:'👮',title:'제주 관광경찰',sub:'관광지 안전·민원',tel:'06474612345',bg:'rgba(59,130,246,.1)',border:'rgba(59,130,246,.25)',btnBg:'rgba(59,130,246,.2)',btnColor:'#60a5fa'},
    {icon:'🏥',title:'제주대학교병원',sub:'응급실 24시 운영',tel:'0647172000',bg:'rgba(16,185,129,.08)',border:'rgba(16,185,129,.2)',btnBg:'rgba(16,185,129,.2)',btnColor:'#34d399'},
    {icon:'🚗',title:'쏘카 고객센터',sub:'사고/고장 신고',tel:'15660001',bg:'rgba(245,166,35,.08)',border:'rgba(245,166,35,.2)',btnBg:'rgba(245,166,35,.2)',btnColor:'#F5A623'},
    {icon:'🪑',title:'퓨어베베 카시트',sub:'반납/문의',tel:'',bg:'rgba(139,92,246,.08)',border:'rgba(139,92,246,.2)',btnBg:'rgba(139,92,246,.2)',btnColor:'#c4b5fd'},
    {icon:'💳',title:'카드 분실 신고',sub:'각 카드사 콜센터로 즉시 연락',tel:'',bg:'rgba(245,166,35,.08)',border:'rgba(245,166,35,.2)',btnBg:'rgba(245,166,35,.2)',btnColor:'#F5A623'}
  ],
  transportDetails:{
    '쏘카 픽업':{routes:['제주공항 쏘카 스토어'],fare:'188,790원 (3박4일)',interval:'14:40 픽업',taxi:''},
    '쏘카 반납':{routes:['제주공항 쏘카 스토어'],fare:'',interval:'19:30까지 반납',taxi:''},
    '카시트 픽업':{routes:['퓨어베베 매장 (공항 3.8km)'],fare:'24,000원',interval:'15:00 픽업',taxi:''},
    '카시트 반납':{routes:['퓨어베베 매장'],fare:'',interval:'19:00까지 반납',taxi:''},
    '김포→제주':{routes:['진에어 LJ'],fare:'222,000원 (왕복)',interval:'1시간 15분',taxi:''},
    '제주→김포':{routes:['제주항공 7C'],fare:'(왕복 포함)',interval:'1시간 15분',taxi:''}
  }
}
};
