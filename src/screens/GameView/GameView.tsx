import { useNavbar } from "../../contexts/NavbarContext";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import PlaySection from "./sections/PlaySection";

const api: any = (window as any).api;

function classNames(...classes: any) {
 return classes.filter(Boolean).join(" ");
}

const menu = [
 { title: "Play" },
 { title: "About" },
 { title: "News" },
 { title: "Store" },
];

function GameView() {
 const nav = useNavbar();
 const [animateIn, setAnimateIn] = useState(false);
 const [selectedMenuItem, setSelectedMenuItem] = useState(0);

 useEffect(() => {
  setAnimateIn(true);
 }, []);

 return (
  <div className="absolute inset-0 flex flex-col justify-end py-8 overflow-hidden">
   <Transition
    show={animateIn}
    enter="transition-opacity delay-[500ms] duration-[1000ms]"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
   >
    <nav className="text-white top-0 mt-10 w-full absolute z-20">
     <ul className="flex flex-row justify-between max-w-xl m-auto">
      {menu.map((item, i) => {
       return (
        <li key={i} className="group flex flex-col items-center">
         <button
          className={classNames(
           i == selectedMenuItem ? "text-orange-500" : "text-white",
           "uppercase text-lg font-[Comfortaa] font-bold hover:text-orange-500 block"
          )}
         >
          {item.title}
         </button>

         {i == selectedMenuItem && (
          <div className="relative w-2 h-2 rounded-full bg-orange-500">
           <div className="absolute -inset-1 h-full bg-gradient-to-r from-yellow-600 to-red-600 rounded-lg shadow-lg blur"></div>
          </div>
         )}
        </li>
       );
      })}
     </ul>
    </nav>
   </Transition>

   <PlaySection />
  </div>
 );
}

export default GameView;
