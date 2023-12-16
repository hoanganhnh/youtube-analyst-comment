import * as React from "react";

const USER_DATA = "user";

function getDataStorage(key) {
  const data =
    typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
  return data === null ? null : JSON.parse(data);
}

function setPersistentUser(user) {
  window.localStorage.setItem(USER_DATA, JSON.stringify(user));
}

function removeDataFromLocalStrorage(key) {
  typeof window !== "undefined" && window.localStorage.removeItem(key);
}

const userInfor = getDataStorage(USER_DATA) || null;

const AuthenticateStateContext = React.createContext({ user: userInfor });
AuthenticateStateContext.displayName = "AuthenticateSateContext";

const AuthenticateDispatchContext = React.createContext(() => {});
AuthenticateDispatchContext.displayName = "AuthenticateDispatchContext";

function authenReucder(state, action) {
  switch (action.type) {
    case "login":
      return { user: action.payload };
    case "logout":
      return {
        user: null,
      };
    default:
      return state;
  }
}

export function AuthenticateProvider({ children }) {
  const [state, dispatch] = React.useReducer(authenReucder, {
    user: userInfor,
  });
  return (
    <AuthenticateStateContext.Provider value={state}>
      <AuthenticateDispatchContext.Provider value={dispatch}>
        {children}
      </AuthenticateDispatchContext.Provider>
    </AuthenticateStateContext.Provider>
  );
}

function useAuthenState() {
  const context = React.useContext(AuthenticateStateContext);

  if (!context) {
    throw Error("useAuthen must use with AuthenticateContext");
  }
  return context;
}

function useAuthenDispatch() {
  const context = React.useContext(AuthenticateDispatchContext);

  if (!context) {
    throw Error("useAuthenDispatch must use with AuthenticateDispatchContext");
  }
  return context;
}

export function useUser() {
  const { user } = useAuthenState();
  const dispatch = useAuthenDispatch();

  const setUser = React.useCallback(
    (userData) => {
      dispatch({ type: "login", payload: userData });
      setPersistentUser(userData);
    },
    [dispatch]
  );

  const logoutUser = React.useCallback(() => {
    dispatch({ type: "logout", payload: null });
    removeDataFromLocalStrorage(USER_DATA);
  }, [dispatch]);

  const isAuthen = React.useMemo(() => !!user, [user]);

  return { user, setUser, logoutUser, isAuthen };
}
