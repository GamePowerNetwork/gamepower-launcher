import React, { useEffect } from "react";
import GameThumbnail from "../../components/GameThumbnail/GameThumbnail";

const api: any = (window as any).api;

const games = [
  {
    title: "Interloper",
    image: "assets/images/games/interloper/game-thumb.png",
  },
];

function AllGames() {
  const onAppClick = () => {
    api.launch("async ping");
  };

  return (
    <div className="min-h-[600px] pb-20 bg-zinc-900">
      <div className="px-8 py-2">
        <div className="max-w-7xl m-auto">
          <h2 className="text-3xl text-slate-900 dark:text-white my-10">
            All Games
          </h2>
          {/* Games List */}
          <div className="grid grid-cols-3 gap-8">
            {games.map((game, i) => {
              return <GameThumbnail key={i} size="lg" {...game} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllGames;
