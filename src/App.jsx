import { useState } from "react";
import { chillHop } from "./data";

function App() {
  const [music, setMusic] = useState(chillHop()[0]);

  const handleMusic = (music) => {
    setMusic(music);
  };

  return (
    <div className="flex">
      <ul
        role="list"
        className="divide-y divide-gray-100 w-1/4 shadow-2xl pl-20 pt-10 pr-4"
      >
        <h2 className="ml-2 mb-4 font-bold text-2xl">Library</h2>
        {chillHop().map((el) => (
          <a href="#h" onClick={() => handleMusic(el)}>
            <li
              key={el.id}
              className={`flex justify-between gap-x-6 py-5 ${
                el.name === music.name ? "bg-blue-300" : ""
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
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
          <img
            src={music.cover}
            alt="Album Cover"
            className="w-64 h-64 rounded-3xl mb-6"
          />
          <p className="text-gray-400">{music.arUst}</p>
          <h1 className="text-lg text-black font-bold">Player</h1>
          <audio controls className="mt-6">
            <source src={music.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default App;
