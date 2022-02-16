import React, { useEffect } from "react";
import AllGames from "../AllGames/AllGames";
import MyGames from "../MyGames/MyGames";
import FeaturedGames from "../FeaturedGames/FeaturedGames";

const api: any = (window as any).api;

function Home() {
  useEffect(() => {
    api.receive("fromMain", (reply: any) => {
      console.log(reply);
    });

    // Async message sender
    //api.launch('async ping')
  }, []);

  return (
    <div className="relative">
      <div className="inset-0 fixed -z-20">
        <img
          className="w-full h-full object-cover opacity-30 -z-20"
          src={`assets/images/games/interloper/hero.png`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
      </div>

      <MyGames />
    </div>
  );
}

export default Home;
