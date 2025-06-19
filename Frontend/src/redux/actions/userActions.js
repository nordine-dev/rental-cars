import toast from "react-hot-toast";
import api from "../../axios";

export const login = (email, password, navigator) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING",
    });
    try {
      const response = await api.post("/auth/login", { email, password });
      if (response.data.success === true) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.user,
        });
        toast.success(response.data.message);
        navigator("/dashboard");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
        });
        toast.error(response.data.message);
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || error.message || "Unexpected error";

      dispatch({
        type: "LOGIN_FAILURE",
      });
      toast.error(msg);
    }
  };
};

export const isLoggedIn = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING",
    });
    try {
      const response = await api.get("/auth/isLoggedIn");
      if (response.data.success === true) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.user,
        });
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
        });
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || error.message || "Unexpected error";

      dispatch({
        type: "LOGIN_FAILURE",
      });
      toast.error(msg);
    }
  };
}

export const logout = (navigator) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING",
    });
    try {
      const response = await api.post("/auth/logout");
      if (response.data.success === true) {
        dispatch({
          type: "LOGIN_FAILURE",
        });
        toast.success(response.data.message);
        navigator("/login");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
        });
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || error.message || "Unexpected error";

      dispatch({
        type: "LOGIN_FAILURE",
      });
      toast.error(msg);
    }
  };
}