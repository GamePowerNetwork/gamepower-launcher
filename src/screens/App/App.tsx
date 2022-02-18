import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GameView from "../GameView/GameView";
import Home from "../Home/Home";
import Navigation from "../../components/Navigation/Navigation";
import { NavbarProvider } from "../../contexts/NavbarContext";
import { DeeplinkingProvider } from "../../contexts/DeeplinkingContext";

const api: any = (window as any).api;

function App() {
  useEffect(() => {
    api.receive("fromMain", (reply: any) => {
      console.log(reply);
    });

    // Async message sender
    //api.launch('async ping')
  }, []);

  return (
    <Router basename="/">
      <DeeplinkingProvider>
        <NavbarProvider>
          <div className="title-bar fixed top-0 w-full h-10"></div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GameView />} />
          </Routes>
        </NavbarProvider>
      </DeeplinkingProvider>
    </Router>
  );
}

export default App;
