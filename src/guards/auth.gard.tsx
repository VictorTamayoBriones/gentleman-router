import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";
import { AppStore } from "../redux/store"

export const AuthGard = () =>{
    const userState = useSelector((store: AppStore) => store.user);
    return userState.id ? <Outlet/> : <Navigate to={PublicRoutes.LOGIN} />
}