import { createContext, useReducer, ReactNode } from "react";
import { UserReducer } from "./ruducer/User";
import { IUser } from "~/interface";

interface IUserContext {
  isAuthenticated: boolean;
  user: IUser;
  setUser: (user: any) => void;
  setLogout: () => void;
}

const initialState: IUserContext = {
  isAuthenticated: false,
  user: {
    id: "",
    avatar: "",
    coverImage: "",
    firstName: "",
    lastName: "",
    follower: [],
  },
  setUser: () => null,
  setLogout: () => null,
};

const setUser = (payload: any, dispatch: any) => {
  dispatch({ type: "SET_USER", payload });
};

const setLogout = (dispatch: any) => {
  dispatch({ type: "SET_LOGOUT" });
};

export const UserCtx = createContext<IUserContext>(initialState);

const UserStore = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setter = {
    setUser: (user: any) => setUser(user, dispatch),
    setLogout: () => setLogout(dispatch),
  };

  return (
    <UserCtx.Provider value={{ ...state, ...setter }}>
      {children}
    </UserCtx.Provider>
  );
};

export default UserStore;
