import { useState } from "react";
import GameThumbnail from "../../components/GameThumbnail/GameThumbnail";

const api: any = (window as any).api;

const games = [
  {
    image: "assets/images/games/interloper/game-thumb.png",
    hero: "assets/images/games/interloper/hero.png",
    logo: "assets/images/games/neroverse/logo.png",
  },
];

function FeaturedGames() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const onAppClick = () => {
    api.launch("async ping");
  };

  return (
    <div className="relative min-h-[820px] bg-slate-500 flex flex-col justify-end">
      <img
        className="absolute w-full h-full object-cover"
        src={games[currentFeature].hero}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900"></div>
      <div className="absolute top-0 p-10">
        <img className="w-96" src={games[currentFeature].logo} />
      </div>
      <div className="px-8 py-2">
        <div className="max-w-7xl py-8 align-baseline">
          <h2 className="text-3xl text-slate-900 dark:text-white my-10">
            Featured Games
          </h2>
          {/* Games List */}
          <div className="grid grid-cols-4 gap-8">
            {games.map((game, i) => {
              return (
                <GameThumbnail
                  onClick={() => setCurrentFeature(i)}
                  key={i}
                  outline={true}
                  size="sm"
                  image={game.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedGames;
