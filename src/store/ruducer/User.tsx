export const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };
    case "SET_CUSTOMER":
      return { ...state, customer: action.payload };
    default:
      return state;
  }
};
