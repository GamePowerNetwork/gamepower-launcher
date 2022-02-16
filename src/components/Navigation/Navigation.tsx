import React, { useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../assets/branding/logo.png";
import { UserCircleIcon } from "@heroicons/react/outline";
import { ViewGridIcon } from "@heroicons/react/solid";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    if (location) {
      switch (location.pathname) {
        case "/game":
          handle_hideNavigation();
          break;

        default:
          handle_showNavigation();
      }
    }
  }, [location]);

  const handle_hideNavigation = () => {
    setIsShowing(false);
  };

  const handle_showNavigation = () => {
    setIsShowing(true);
  };

  const handle_navigateHome = () => {
    navigate("/");
  };

  return (
    <nav>
      <div className="flex flex-row mt-10 h-12">
        <div className="flex flex-row items-center fixed z-50 left-4 top-8">
          <Transition
            as={Fragment}
            show={!isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform transition duration-[400ms]"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-50"
          >
            <button
              onClick={() => handle_navigateHome()}
              className="p-2 rounded-lg bg-black bg-opacity-40 shadow-xl"
            >
              <ViewGridIcon className="h-10 w-10 text-gray-400 text-opacity-50 text-right" />
            </button>
          </Transition>
        </div>
        <div className="flex flex-row justify-center w-full">
          <Transition
            as={Fragment}
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-[1000ms] transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100"
            leaveTo="opacity-0 -translate-y-20"
          >
            <img src={logo} className="w-28" alt="logo" />
          </Transition>
        </div>
        <div className="flex flex-row items-center fixed z-50 right-4 top-8">
          <div className="p-2 rounded-lg bg-black bg-opacity-40 shadow-xl">
            <UserCircleIcon className="h-10 w-10 text-gray-400 text-opacity-50 text-right" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
