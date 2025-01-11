import React, { useState, useRef } from "react";
import MpButton from "./components/MpButton/MpButton";
import rain from "./assets/sounds/rain.mp3";
import summer from "./assets/sounds/summer.mp3";
import winter from "./assets/sounds/winter.mp3";

import rainyBg from "./assets/rainy-bg.jpg";
import summerBg from "./assets/summer-bg.jpg";
import winterBg from "./assets/winter-bg.jpg";

import rainIcon from "./assets/icons/cloud-rain.svg";
import summerIcon from "./assets/icons/sun.svg";
import winterIcon from "./assets/icons/cloud-snow.svg";
import VolumeControl from "./components/VolumeControl/VolumeControl";

function App() {
    const [volume, setVolume] = useState(1);
    const [currentSound, setCurrentSound] = useState(null);
    const audioRef = useRef(null);

    const sounds = [
        { name: "rain", file: rain, image: rainyBg, icon: rainIcon },
        { name: "summer", file: summer, image: summerBg, icon: summerIcon },
        { name: "winter", file: winter, image: winterBg, icon: winterIcon },
    ];

    const handleSoundPlay = (sound) => {
        if (currentSound === sound.name) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            audioRef.current = new Audio(sound.file);
            audioRef.current.volume = volume;
            audioRef.current.play();
            setCurrentSound(sound.name);
            document.body.style.backgroundImage = `url(${sound.image})`;
        }
    };

    const handleVolumeChange = (newVolume) => {
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className="app">
            <div className="buttons-container">
                {sounds.map((sound) => (
                    <MpButton
                        key={sound.name}
                        sound={sound}
                        isPlaying={currentSound === sound.name}
                        onClick={() => handleSoundPlay(sound)}
                        background={sound.image}
                        icon={sound.icon}
                    />
                ))}
            </div>

            <VolumeControl value={volume} onChange={handleVolumeChange} />
        </div>
    );
}

export default App;
