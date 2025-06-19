const initialState = {
  user: null,
  loading: true,
  isLogged: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        isLogged: true,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        isLogged: false,
        user: null,
      };
    default:
      return state;
  }
}
