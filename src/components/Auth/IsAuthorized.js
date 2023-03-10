import { Navigate, useLocation } from "react-router-dom";

const IsAuthorized = ({ children }) => {
    let isLogin = localStorage.getItem('isLogin');
    if (isLogin === null) {
        isLogin = false
    }
    const location = useLocation();

    if (!isLogin) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }

    return children;
};

export default IsAuthorized;