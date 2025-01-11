import React from "react";

function VolumeControl({ value, onChange }) {
    return (
        <div className="volume-control">
            <label htmlFor="volume">Volume:</label>
            <input
                type="range"
                id="volume"
                min="0"
                max="1"
                step="0.1"
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
            />
        </div>
    );
}

export default VolumeControl;
