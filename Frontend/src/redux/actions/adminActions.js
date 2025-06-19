import { toast } from "react-hot-toast";
import api from "../../axios";
export const addCar = (car) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING_ADMIN",
    });
    try {
      const response = await api.post("/admin/addCar", car);
      if (response.data.success === true) {
        dispatch({
          type: "ADD_CAR_SUCCESS",
        });
        toast.success(response.data.message);
      } else {
        dispatch({
          type: "ADD_CAR_FAILURE",
        });
        toast.error(response.data.message);
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || error.message || "Unexpected error";

      dispatch({
        type: "ADD_CAR_FAILURE",
      });
      toast.error(msg);
    }
  };
};

export const getCars = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING_ADMIN",
    });
    try {
      const response = await api.get("/admin/cars");
      if (response.data.success === true) {
        dispatch({
          type: "GET_CARS_SUCCESS",
          payload: response.data.cars,
        });
      } else {
        dispatch({
          type: "GET_CARS_FAILURE",
        });
        toast.error(response.data.message);
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || error.message || "Unexpected error";

      dispatch({
        type: "ADD_CAR_FAILURE",
      });
      toast.error(msg);
    }
  };
};

export const getBookings = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING_ADMIN",
    });
    try {
      const response = await api.get("/admin/bookings");
      if (response.data.success === true) {
        dispatch({
          type: "GET_BOOKINGS_SUCCESS",
          payload: response.data.bookings,
        });
      } else {
        dispatch({
          type: "GET_BOOKINGS_FAILURE",
        });
        toast.error(response.data.message);
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || error.message || "Unexpected error";

      dispatch({
        type: "ADD_CAR_FAILURE",
      });
      toast.error(msg);
    }
  };
};
