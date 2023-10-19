import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
    const getTokenFromLocalStorage = localStorage.getItem("customer")
        ? JSON.parse(localStorage.getItem("customer"))
        : null;

    return getTokenFromLocalStorage?.token === undefined ? children : (<Navigate to='/' replace={true} />)
}