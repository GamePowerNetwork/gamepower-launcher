import GameThumbnail from "../../../components/GameThumbnail/GameThumbnail";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { PlayIcon } from "@heroicons/react/solid";

const api: any = (window as any).api;

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function PlaySection() {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return (
    <div className="flex flex-col justify-end">
      <Transition
        show={animateIn}
        enter="transition-opacity delay-[100ms] duration-[500ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="inset-0 fixed -z-20">
          <img
            className="w-full h-full object-cover opacity-30 -z-20"
            src={`assets/images/games/interloper/hero2.jpg`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        </div>
      </Transition>

      <Transition
        show={animateIn}
        enter="transition-all delay-[500ms] duration-[1500ms]"
        enterFrom="opacity-0 translate-y-10"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full px-20 m-auto flex flex-row">
          <div className="flex flex-col w-1/2 justify-end">
            <h1 className="text-white w-40 xl:w-auto text-5xl xl:text-8xl py-2 font-[Comfortaa]">
              Interloper
            </h1>
            <div className="py-6">
              <button className="group text-white text-lg xl:text-xl rounded-full py-4 px-6 xl:px-12 bg-white hover:bg-orange-500 bg-opacity-20 hover:bg-opacity-20 uppercase flex flex-row space-x-4 justify-center items-center">
                <PlayIcon className="h-8 w-8 xl:h-10 xl:w-10 text-white group-hover:text-orange-500 text-opacity-80 text-right" />
                <span>Download</span>
              </button>
            </div>
          </div>

          <div className="w-1/2 grid grid-cols-3 gap-4 h-28 xl:h-40">
            {/* Stats */}
            <div className="w-full rounded-lg py-6 xl:py-10 bg-black bg-opacity-30">
              <p className="text-gray-200 text-md sm:text-xl sm:text-center">
                <span className="font-bold text-orange-500 block">
                  Playtime
                </span>
                <span className="text-xl xl:text-5xl pt-4 block">
                  34 <span className="text-sm">/hours</span>
                </span>
              </p>
            </div>

            <div className="w-full rounded-lg py-6 xl:py-10 bg-black bg-opacity-30">
              <p className="text-gray-200 text-md sm:text-xl sm:text-center">
                <span className="font-bold text-orange-500 block">
                  Trophies
                </span>
                <span className="text-xl xl:text-5xl pt-4 block">12</span>
              </p>
            </div>

            <div className="w-full rounded-lg py-6 xl:py-10 bg-black bg-opacity-30">
              <p className="text-gray-200 text-md sm:text-xl sm:text-center">
                <span className="font-bold text-orange-500 block">
                  Collectibles
                </span>
                <span className="text-xl xl:text-5xl pt-4 block">5</span>
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default PlaySection;
