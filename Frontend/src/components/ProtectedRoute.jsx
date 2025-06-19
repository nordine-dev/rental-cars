import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../redux/actions/userActions";

export default function ProtectedRoute() {
  const dispatch = useDispatch();

  const { loading, isLogged } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(isLoggedIn());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900">
          Loading...
        </div>
      </div>
    );
  }

  if (!isLogged && !loading) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
