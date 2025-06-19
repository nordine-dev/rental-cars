const initialState = {
  loading: false,
  cars: [],
};

const publicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_CARS_SUCCESS":
      return {
        ...state,
        loading: false,
        cars: action.payload,
      };
    case "GET_CARS_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "BOOK_CAR_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "BOOK_CAR_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default publicReducer;
