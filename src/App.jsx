import React from 'react';
import './App.css'; // App 전체에 대한 스타일
import RollingPaperBoard from './components/RollingPaperBoard/RollingPaperBoard.jsx';
import BgmPlayer from './components/BgmPlayer/BgmPlayer.jsx';

function App() {
    // App 컴포넌트는 우리 앱의 '대문' 역할을 합니다.
    // 여기서는 롤링페이퍼 보드를 보여주는 것 외에 다른 일은 하지 않습니다.
    return (
        <div className="App">
            {/* 롤링페이퍼 보드 컴포넌트를 렌더링합니다. */}
            <RollingPaperBoard />
            {/* 2. BgmPlayer 컴포넌트를 렌더링합니다. */}
            <BgmPlayer />
        </div>
    );
}

export default App;