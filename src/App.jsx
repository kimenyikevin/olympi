import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./components/AudioControls";
import { chillHop } from "./data";
import "./components/styles.css";

function App() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { name, arUst, color, cover, audio, id, acUve } =
    chillHop()[trackIndex];

  const audioRef = useRef(new Audio(audio));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  const time = (t) => {
    const sec = t ? t : 0;
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    return formattedTime;
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(chillHop().length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < chillHop().length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const handleMusic = (msc) => {
    const index = chillHop().findIndex((item) => item.name === msc.name);
    if (index !== -1) {
      setTrackIndex(index);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audio);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex">
      <ul
        role="list"
        className="divide-y divide-gray-100 w-1/4 shadow-2xl pl-20 pt-14 pb-20 pr-4"
      >
        <h2 className="ml-2 mb-4 font-bold text-2xl">Library</h2>
        {chillHop().map((el) => (
          <a href="#h" onClick={() => handleMusic(el)}>
            <li
              key={el.id}
              className={`flex justify-between gap-x-6 py-5  ${
                el.name === name ? "bg-blue-300" : ""
              } pl-4`}
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none  bg-gray-50"
                  src={el.cover}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {el.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {el.arUst}
                  </p>
                </div>
              </div>
            </li>
          </a>
        ))}
      </ul>

      <div className="ml-10 flex items-center justify-center w-full ">
        <div className="audio-player">
          <div className="track-info">
            <img className="artwork" src={cover} alt={arUst} />
            <h2 className="artist">{arUst}</h2>
            <h2 className="title">Player</h2>
            <div className="flex">
              <p className="text-black mr-4">{time(trackProgress)}</p>
              <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="progress"
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
              />
              <p className="text-black ml-4">{time(duration)}</p>
            </div>

            <AudioControls
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
