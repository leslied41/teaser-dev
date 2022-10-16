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
  loading: Boolean;
  setLoading?: (value?: boolean) => void;
};

enum ActionType {
  NAVBAR = "NAVBAR",
  LOADING = "LOADING",
}

type Action = {
  type: ActionType;
  payload?: any;
};

type StateType = {
  openNavbar: boolean;
  loading: boolean;
};

const defaultContextValue = {
  openNavbar: false,
  loading: false,
};

const initialState = {
  openNavbar: false,
  loading: false,
};

const reducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case ActionType.NAVBAR:
      if (action.payload !== undefined)
        return { ...state, openNavbar: action.payload };
      else return { ...state, openNavbar: !state.openNavbar };
    case ActionType.LOADING:
      return { ...state, loading: action.payload };
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
  const setLoading = useCallback(
    (value?: boolean) => dispatch({ type: ActionType.LOADING, payload: value }),
    [dispatch]
  );
  const openNavbar: boolean = useMemo(
    () => state.openNavbar,
    [state.openNavbar]
  );
  const loading: boolean = useMemo(() => state.loading, [state.loading]);

  const value = useMemo(
    () => ({
      setOpenNavbar,
      openNavbar,
      loading,
      setLoading,
    }),
    [openNavbar, setOpenNavbar, loading, setLoading]
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
