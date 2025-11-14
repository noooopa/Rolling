// Rolling/src/components/MessageNote/MessageNote.jsx

import React from 'react';
import './MessageNote.css';

const MessageNote = ({ author, content, color, position, rotation, onNoteClick, animationIndex, isFocused }) => {

    const delay = `${animationIndex * 0.15}s`;

    const style = {
        backgroundColor: color,

        // 3. 픽셀(px) 값으로 'top'을 설정합니다.
        top: `${position.top}px`,

        left: position.left,
        '--note-rotation': `${rotation}deg`,
        '--animation-delay': delay,
    };

    const containerClasses = `note-container ${isFocused ? 'focused' : ''}`;

    return (
        <div className={containerClasses} style={style} onClick={onNoteClick}>
            <div className="note-author-main">
                {author}
            </div>
        </div>
    );
};

export default MessageNote;