import React, { useState } from 'react';
import './RollingPaperBoard.css';

// 1. '.jsx'가 아닌 '.js'로 올바르게 수정합니다.
import { messages } from '../../data/messages.jsx';

import MessageNote from '../MessageNote/MessageNote.jsx';
import Modal from '../Modal/Modal.jsx';

const RollingPaperBoard = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleNoteClick = (msg) => {
        setSelectedMessage(msg);
    };

    const handleCloseModal = () => {
        setSelectedMessage(null);
    };

    return (
        <div className="board-container">
            <h1 className="board-title">🎉ㄹ 탄죠비 롤링페이퍼🎉</h1>

            {/* 2. map 함수에 (msg, index)로 'index'를 추가합니다. */}
            {messages.map((msg, index) => (
                <MessageNote
                    key={msg.id}
                    author={msg.author}
                    content={msg.content}
                    color={msg.color}
                    position={msg.position}
                    rotation={msg.rotation}
                    onNoteClick={() => handleNoteClick(msg)}

                    // 3. 'index'를 'animationIndex'라는 prop으로 전달합니다.
                    animationIndex={index}
                />
            ))}

            {selectedMessage && (
                <Modal message={selectedMessage} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default RollingPaperBoard;