import React from "react";

function MpButton({ sound, isPlaying, onClick, background, icon }) {
    return (
        <button
            className={`sound-button ${isPlaying ? "playing" : ""}`}
            style={{ backgroundImage: `url(${background})` }}
            onClick={onClick}
        >
            <img src={icon} alt="icon" />
        </button>
    );
}

export default MpButton;
