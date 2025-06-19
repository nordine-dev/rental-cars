const initialState = {
    loading: true,
    isLogged: false,
    cars: [],
    bookings: [],
}

export function adminReducer(state = initialState, action) {
    switch (action.type) {
      case "LOADING_ADMIN":
        return {
          ...state,
          loading: true,
        };
      case "ADD_CAR_SUCCESS":
        return {
          ...state,
          loading: false,
          isLogged: true,
        };
      case "ADD_CAR_FAILURE":
        return {
          ...state,
          loading: false,
          isLogged: false,
        };
      case "GET_CARS_SUCCESS":
        return {
          ...state,
          loading: false,
          isLogged: true,
          cars: action.payload,
        };
      case "GET_CARS_FAILURE":
        return {
          ...state,
          loading: false,
          isLogged: false,
        };
      case "GET_BOOKINGS_SUCCESS":
        return {
          ...state,
          loading: false,
          isLogged: true,
          bookings: action.payload,
        };
      case "GET_BOOKINGS_FAILURE":
        return {
          ...state,
          loading: false,
          isLogged: false,
        };
        case "CHANGE_PASSWORD_SUCCESS":
          return {
            ...state,
            loading: false,
            isLogged: true,
          };
        case "CHANGE_PASSWORD_FAILURE":
          return {
            ...state,
            loading: false,
            isLogged: false,
          };
      default:
        return state;
    }
  }