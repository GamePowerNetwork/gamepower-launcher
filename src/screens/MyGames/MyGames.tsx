import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameThumbnail from "../../components/GameThumbnail/GameThumbnail";

const api: any = (window as any).api;

const games = [
  {
    title: "Interloper",
    image: "assets/images/games/interloper/game-thumb.png",
  },
  {
    title: "NeroBot Command",
    image: "assets/images/games/command/image.png",
  },
  {
    title: "NeroVerse: Spaces",
    image: "assets/images/games/interloper/game-thumb.png",
  },
  {
    title: "NeroPet Battle Arena",
    image: "assets/images/games/interloper/game-thumb.png",
  },
];

function MyGames() {
  const navigate = useNavigate();

  const onAppClick = () => {
    navigate("/game");
    //api.launch('async ping')
  };

  return (
    <div className="fixed bottom-0 w-full">
      <div className="py-2 w-full px-10">
        <div className="max-w-7xl m-auto py-8">
          <h2 className="text-3xl text-slate-900 dark:text-white my-5 font-bold font-[Comfortaa] shadow-lg">
            Jump Into The NeroVerse
          </h2>
          {/* Games List */}
          <ul className="grid grid-cols-4 gap-10 bg-black bg-opacity-10 rounded-lg p-4">
            {games.map((game, i) => {
              return (
                <GameThumbnail
                  onClick={onAppClick}
                  key={i}
                  size="sm"
                  {...game}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyGames;
