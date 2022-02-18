import type { ReactNode } from "react";
import { createContext, useReducer, useContext } from "react";

const defaultState = { logoVisible: true };

type NavbarState = typeof defaultState;
type Dispatch = (action: Action) => void;
type Action = "showMenu" | "hideMenu";

const NavbarContext = createContext<
  { state: NavbarState; dispatch: Dispatch } | undefined
>(undefined);

function navbarReducer(state: NavbarState, action: Action): NavbarState {
  switch (action) {
    case "showMenu":
      return {
        logoVisible: true,
      };
    case "hideMenu":
      return {
        logoVisible: false,
      };
  }

  return defaultState;
}

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(navbarReducer, defaultState);

  return (
    <NavbarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);

  if (!context)
    throw new Error("useNavbar must be used inside a context provider");

  return context;
}
