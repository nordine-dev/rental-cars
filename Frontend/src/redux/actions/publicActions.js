import { toast } from "react-hot-toast";
import api from "../../axios";
export const  getCars = ()=>{
    return async (dispatch) => {
        dispatch({
            type: "LOADING",
        });
        try {
            const response = await api.get("/public/cars");
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
}

export const bookCar = (bookingData) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING",
        });
        try {
            const response = await api.post("/public/bookCar", bookingData);
            if (response.data.success === true) {
                dispatch({
                    type: "BOOK_CAR_SUCCESS",
                });
                toast.success(response.data.message);
            } else {
                dispatch({
                    type: "BOOK_CAR_FAILURE",
                });
                toast.error(response.data.message);
            }
        } catch (error) {
            const msg =
                error.response?.data?.message || error.message || "Unexpected error";

            dispatch({
                type: "BOOK_CAR_FAILURE",
            });
            toast.error(msg);
        }
    };
}