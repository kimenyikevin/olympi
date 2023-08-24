import React from "react";
const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
        />
      </svg>
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clipRule="evenodd"
            d="M1.5 0.125C1.73206 0.125 1.95462 0.217187 2.11872 0.381282C2.28281 0.545376 2.375 0.767936 2.375 1V15C2.375 15.2321 2.28281 15.4546 2.11872 15.6187C1.95462 15.7828 1.73206 15.875 1.5 15.875C1.26794 15.875 1.04538 15.7828 0.881282 15.6187C0.717187 15.4546 0.625 15.2321 0.625 15V1C0.625 0.767936 0.717187 0.545376 0.881282 0.381282C1.04538 0.217187 1.26794 0.125 1.5 0.125V0.125ZM8.5 0.125C8.73206 0.125 8.95462 0.217187 9.11872 0.381282C9.28281 0.545376 9.375 0.767936 9.375 1V15C9.375 15.2321 9.28281 15.4546 9.11872 15.6187C8.95462 15.7828 8.73206 15.875 8.5 15.875C8.26794 15.875 8.04538 15.7828 7.88128 15.6187C7.71719 15.4546 7.625 15.2321 7.625 15V1C7.625 0.767936 7.71719 0.545376 7.88128 0.381282C8.04538 0.217187 8.26794 0.125 8.5 0.125V0.125Z"
            fill="black"
          />
        </svg>
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 10 16"
        >
          <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
        </svg>
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    </button>
  </div>
);

export default AudioControls;
