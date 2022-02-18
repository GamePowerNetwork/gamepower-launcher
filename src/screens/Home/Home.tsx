import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import MyGames from "../MyGames/MyGames";

const api: any = (window as any).api;

function Home() {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);

    api.receive("fromMain", (reply: any) => {
      console.log(reply);
    });

    // Async message sender
    //api.launch('async ping')
  }, []);

  return (
    <div className="relative">
      <Transition
        show={animateIn}
        enter="transition-opacity duration-[500ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="inset-0 fixed -z-20">
          <img
            className="w-full h-full object-cover opacity-30 -z-20"
            src={`assets/images/games/interloper/hero.jpg`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        </div>

        <MyGames />
      </Transition>
    </div>
  );
}

export default Home;
