import React from 'react';
import './MessageNote.css';

const MessageNote = ({ author, content, color, position, rotation, onNoteClick, animationIndex }) => {

    // 3. 지연 시간을 계산합니다.
    const delay = `${animationIndex * 0.15}s`;

    const style = {
        backgroundColor: color,
        top: position.top,
        left: position.left,

        // 4. 'transform'을 직접 설정하는 대신, CSS 변수로 값을 전달합니다.
        '--note-rotation': `${rotation}deg`,
        '--animation-delay': delay,
    };

    return (
        // 5. 'transform'과 'animationDelay'가 제거된 style 객체를 전달합니다.
        <div className="note-container" style={style} onClick={onNoteClick}>
            <div className="note-author-main">
                {author}
            </div>
        </div>
    );
};

export default MessageNote;