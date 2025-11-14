import React, { useState, useRef } from 'react';
import './BgmPlayer.css';

const BgmPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // 3. 함수를 'async'로 변경합니다.
    const togglePlay = async () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false); // 상태를 '정지'로 변경
        } else {
            try {
                // 4. audioRef.current.play()가 Promise를 반환하므로 'await'합니다.
                await audioRef.current.play();
                setIsPlaying(true); // '재생 성공' 시 상태를 '재생 중'으로 변경
            } catch (error) {
                // 5. 브라우저 정책 등으로 재생이 실패하면 여기서 오류를 잡습니다.
                console.error("BGM 재생 오류:", error);
                // (예: "DOMException: play() failed because the user didn't interact with the document first.")
                setIsPlaying(false); // 재생에 실패했으므로 상태를 '정지'로 둡니다.
            }
        }
    };

    return (
        <div>
            <audio ref={audioRef} src="/audio/bgm.mp3" loop />

            <button className="bgm-player-button" onClick={togglePlay}>
                {isPlaying ? '⏸️' : '🎵'}
            </button>
        </div>
    );
};

export default BgmPlayer;