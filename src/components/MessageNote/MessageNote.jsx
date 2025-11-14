import React from 'react';
import './MessageNote.css';

const MessageNote = ({ author, content, color, position, rotation, onNoteClick, animationIndex, isFocused }) => {

    const delay = `${animationIndex * 0.15}s`;

    // 1. position 값을 CSS 변수로 전달합니다.
    const style = {
        backgroundColor: color,
        '--top': position.top,
        '--left': position.left,
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