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
  setOpenNavbar?: () => void;
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
      return { ...state, openNavbar: !state.openNavbar };
  }
};

const GlobalProviderContext =
  createContext<GlobalProviderContextType>(defaultContextValue);

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setOpenNavbar = useCallback(
    () => dispatch({ type: ActionType.NAVBAR }),
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
