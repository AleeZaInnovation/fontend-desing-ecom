import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
    const getTokenFromLocalStorage = localStorage.getItem("customer")
        ? JSON.parse(localStorage.getItem("customer"))
        : null;

    return getTokenFromLocalStorage?.token !== undefined ? children : (<Navigate to='/login' replace={true} />)
}