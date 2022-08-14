import { configureStore } from "@reduxjs/toolkit";
import { userInfo } from "../models";
import userSlice  from "./states/user";

export interface AppStore{
    user: userInfo;
}

export default configureStore<AppStore>({
    reducer:{
        user: userSlice
    }
})