import type { ReactNode } from "react";
import { createContext, useReducer, useContext } from "react";

const defaultState = { params: "" };

type NavbarState = typeof defaultState;
type Dispatch = (action: Action) => void;
type Action = { type: "success" | "error"; payload: string };

const DeeplinkingContext = createContext<
  { state: NavbarState; dispatch: Dispatch } | undefined
>(undefined);

function deeplinkReducer(state: NavbarState, action: Action): NavbarState {
  switch (action.type) {
    case "success":
      return {
        params: action.payload,
      };
    case "error":
      return {
        params: "",
      };
  }

  return defaultState;
}

export function DeeplinkingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(deeplinkReducer, defaultState);

  return (
    <DeeplinkingContext.Provider value={{ state, dispatch }}>
      {children}
    </DeeplinkingContext.Provider>
  );
}

export function useDeeplink() {
  const context = useContext(DeeplinkingContext);

  if (!context)
    throw new Error("useDeeplink must be used inside a context provider");

  return context;
}
