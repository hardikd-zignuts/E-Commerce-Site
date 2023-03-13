import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    let authToken = localStorage.getItem('authToken')
    return (
        (isLogin && authToken) ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes    