// Rolling/src/data/messages.jsx
// (파일 이름은 .jsx이지만, 내용은 JavaScript 객체입니다)

export const messages = [
    {
        id: 1,
        author: "친구 A",
        content: "생일 축하해! 넌 최고야! 🎉\n이 사진 기억나? 우리 작년에 놀러 갔을 때!",

        // 1. /public/images/friend_a.jpg 경로를 의미합니다.
        imageUrl: "/images/friend_a.jpg",

        // 2. 날짜 필드를 추가합니다.
        date: "2025년 11월 13일",

        color: "#FFFACD", // Light Yellow
        position: { top: "15%", left: "5%" },
        rotation: -5,
    },
    {
        id: 2,
        author: "동료 B",
        content: "그동안 고마웠습니다.\n새로운 곳에서도 항상 응원하겠습니다!",

        // 3. 이미지가 없는 경우 null
        imageUrl: null,
        date: "2025년 11월 14일",

        color: "#E0FFFF", // Light Cyan
        position: { top: "35%", left: "30%" },
        rotation: 3,
    },
    {
        id: 3,
        author: "가족 C",
        content: "사랑해! 항상 건강하고 행복하자 ❤️",
        imageUrl: null,
        date: "2025년 11월 10일",
        color: "#FFE4E1", // Misty Rose
        position: { top: "55%", left: "60%" },
        rotation: -2,
    },
    {
        id: 4,
        author: "선배 D",
        content: "졸업 축하한다! 사회에서도 멋진 모습 보여줘!",
        imageUrl: null,
        date: "2025년 11월 12일",
        color: "#F0FFF0", // Honeydew
        position: { top: "20%", left: "70%" },
        rotation: 4,
    },
];