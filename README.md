# 🎉 탄죠비 롤링페이퍼 🎉

Vite와 React를 기반으로 제작된 정적 롤링페이퍼 웹사이트입니다.
데이터베이스 없이 `src/data/messages.jsx` 파일에 데이터를 하드코딩하여, 
특정 이벤트를 기념하고 축하 메시지를 아카이빙하기 위해 제작되었습니다.

## ✨ 주요 기능

- **정적 메시지 로드:** `src/data/messages.jsx` 파일에서 모든 메시지 목록을 불러옵니다.
- **포스트잇 스타일:** 각 메시지를 랜덤한 각도로 삐뚤빼뚤하게 붙인 포스트잇 형태로 스타일링합니다.
- **상세보기 모달:** 포스트잇(닉네임) 클릭 시, 상세 내용(이미지, 텍스트, 날짜)이 포함된 모달창이 열립니다.
- **배경 음악(BGM):** 🎵/⏸️ 버튼으로 배경 음악을 재생/정지할 수 있습니다. (`/public/audio/bgm.mp3`)
- **로드 애니메이션:** 페이지 진입 시 포스트잇이 순차적으로 나타나는 애니메이션이 적용됩니다.

## 🛠️ 사용 기술

- **React** (Vite)
- **JavaScript (ES6+)**
- **CSS** (Flexbox, Position Absolute, Animations, CSS Variables)

## ✍️ 메시지 추가/수정 방법

이 프로젝트는 DB를 사용하지 않습니다. 모든 메시지는 **`Rolling/src/data/messages.jsx`** 파일에서 직접 관리합니다.

메시지를 추가하거나 수정하려면 이 파일을 열고 아래와 같은 객체 형식에 맞춰 데이터를 입력하세요.

```javascript
// Rolling/src/data/messages.jsx

export const messages = [
  {
    id: 1,
    author: "작성자 닉네임",
    content: "메시지 본문입니다. \n 줄바꿈도 가능합니다.",
    
    // 이미지는 /public/images/ 폴더에 넣고 경로를 입력합니다.
    imageUrl: "/images/my_image.jpg", 
    
    // 모달에 표시될 날짜입니다.
    date: "2025년 11월 14일",
    
    color: "#FFFACD", // 포스트잇 색상
    position: { top: "15%", left: "5%" }, // 포스트잇 위치
    rotation: -5, // 포스트잇 회전 각도 (deg)
  },
  {
    id: 2,
    author: "이미지가 없는 경우",
    content: "이미지 없이 텍스트만 보여집니다.",
    imageUrl: null, // 이미지가 없으면 null
    date: "2025년 11월 15일",
    color: "#E0FFFF",
    position: { top: "35%", left: "30%" },
    rotation: 3,
  },
  // ... 다른 메시지들
];