// Rolling/src/components/Modal/Modal.jsx

import React from 'react';
import './Modal.css'; // 모달 전용 스타일

const Modal = ({ message, onClose }) => {
    if (!message) {
        return null;
    }

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>

                {/* 1. 작성자 이름 */}
                <h2 className="modal-author">- {message.author} -</h2>

                {/* 2. (신규) 이미지가 있을 경우, 이미지 먼저 출력 */}
                {message.imageUrl && (
                    <img
                        src={message.imageUrl}
                        alt={`${message.author}의 이미지`}
                        className="modal-image"
                    />
                )}

                {/* 3. 텍스트 내용 */}
                {/* 텍스트 내용이 비어있지 않을 때만 <pre> 태그 표시 */}
                {message.content && (
                    <pre className="modal-body">{message.content}</pre>
                )}

                {/* 4. (신규) 날짜가 있을 경우, 날짜 출력 */}
                {message.date && (
                    <p className="modal-date">{message.date}</p>
                )}

            </div>
        </div>
    );
};

export default Modal;