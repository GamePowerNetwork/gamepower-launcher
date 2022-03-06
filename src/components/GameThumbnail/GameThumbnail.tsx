import React, { useEffect } from "react";

interface GameThumbnailConfig {
  size: "sm" | "md" | "lg";
  image?: string;
  title?: string;
  outline?: boolean;
  onClick?: Function;
}

const onButtonClick = (config: GameThumbnailConfig) => {
  if (config.onClick) config.onClick();
};

const renderButton = (thumb: GameThumbnailConfig) => {
  switch (thumb.size) {
    case "sm":
      return (
        <button
          onClick={() => onButtonClick(thumb)}
          className="relative w-full"
        >
          <div className="relative h-36 bg-slate-800 rounded-lg shadow-lg group-hover:ring ring-offset-4 ring-offset-[#1b1b1b] ring-orange-400 ring-opacity-40">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={thumb.image}
            />
          </div>
        </button>
      );
    case "md":
      return (
        <button
          onClick={() => onButtonClick(thumb)}
          className="relative w-full"
        >
          <div className="relative h-36 bg-slate-800 rounded-lg shadow-lg group-hover:ring ring-offset-4 ring-offset-[#1b1b1b] ring-orange-400 ring-opacity-40">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={thumb.image}
            />
          </div>
        </button>
      );
    case "lg":
      return (
        <button
          onClick={() => onButtonClick(thumb)}
          className="relative w-full"
        >
          <div className="relative h-72 bg-slate-800 rounded-lg shadow-lg group-hover:ring ring-offset-4 ring-offset-[#1b1b1b] ring-orange-400 ring-opacity-40">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={thumb.image}
            />
          </div>
        </button>
      );
    default:
      return (
        <button
          onClick={() => onButtonClick(thumb)}
          className="relative w-full"
        >
          <div className="relative h-36 bg-slate-800 rounded-lg shadow-lg group-hover:ring ring-offset-4 ring-offset-[#1b1b1b] ring-orange-400 ring-opacity-40">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={thumb.image}
            />
          </div>
        </button>
      );
  }
};

const renderButtonOutline = (thumb: GameThumbnailConfig) => {
  switch (thumb.size) {
    case "sm":
      return (
        <button
          onClick={() => onButtonClick(thumb)}
          className="relative w-full"
        >
          <div className="relative h-36 bg-slate-800 rounded-lg shadow-lg ring ring-offset-2 ring-offset-[#1b1b1b] ring-slate-400 group-hover:ring-orange-400 ring-opacity-10">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={thumb.image}
            />
          </div>
        </button>
      );
    case "md":
      return (
        <button
          onClick={() => onButtonClick(thumb)}
          className="relative w-full"
        >
          <div className="relative h-36 bg-slate-800 rounded-lg shadow-lg ring ring-offset-2 ring-offset-[#1b1b1b] group-hover:ring-orange-400 ring-opacity-10">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={thumb.image}
            />
          </div>
        </button>
      );
    case "lg":
      return (
        <button
          onClick={() => onButtonClick(thumb)}
          className="relative w-full"
        >
          <div className="relative h-72 bg-slate-800 rounded-lg shadow-lg ring ring-offset-2 ring-offset-[#1b1b1b] group-hover:ring-orange-400 ring-opacity-10">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={thumb.image}
            />
          </div>
        </button>
      );
    default:
      return (
        <button
          onClick={() => onButtonClick(thumb)}
          className="relative w-full"
        >
          <div className="relative h-36 bg-slate-800 rounded-lg shadow-lg ring ring-offset-2 ring-offset-[#1b1b1b] group-hover:ring-orange-400 ring-opacity-10">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={thumb.image}
            />
          </div>
        </button>
      );
  }
};

function GameThumbnail(props: GameThumbnailConfig) {
  return (
    <li className="group max-w-[230px]">
      <div className="relative group">
        <div className="absolute hidden group-hover:block -inset-1 h-full bg-gradient-to-r from-yellow-600 to-red-600 rounded-lg shadow-lg blur"></div>
        {props.outline ? renderButtonOutline(props) : renderButton(props)}
      </div>
      <div className="text-slate-900 dark:text-white font-bold text-sm xl:text-lg pt-2 group-hover:text-orange-500">
        {props.title ? props.title : ``}
      </div>
    </li>
  );
}

export default GameThumbnail;
