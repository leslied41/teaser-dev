import React, {
  FC,
  createContext,
  useMemo,
  useCallback,
  useContext,
  useReducer,
} from "react";

interface GlobalProviderProps {
  children?: any;
}

type GlobalProviderContextType = {
  openNavbar: Boolean;
  setOpenNavbar?: (value?: boolean) => void;
};

enum ActionType {
  NAVBAR = "NAVBAR",
}

type Action = {
  type: ActionType;
  payload?: any;
};

type StateType = {
  openNavbar: boolean;
};

const defaultContextValue = {
  openNavbar: false,
};

const initialState = {
  openNavbar: false,
};

const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case ActionType.NAVBAR:
      if (action.payload !== undefined)
        return { ...state, openNavbar: action.payload };
      else return { ...state, openNavbar: !state.openNavbar };
  }
};

const GlobalProviderContext =
  createContext<GlobalProviderContextType>(defaultContextValue);

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setOpenNavbar = useCallback(
    (value?: boolean) => dispatch({ type: ActionType.NAVBAR, payload: value }),
    [dispatch]
  );
  const openNavbar = useMemo(() => state.openNavbar, [state.openNavbar]);

  const value = useMemo(
    () => ({
      setOpenNavbar,
      openNavbar,
    }),
    [openNavbar, setOpenNavbar]
  );
  return (
    <GlobalProviderContext.Provider value={value}>
      {children}
    </GlobalProviderContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => {
  const context = useContext<GlobalProviderContextType>(GlobalProviderContext);
  return context;
};
