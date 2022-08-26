import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "../../models";
import { clearLocalStorage, persistLocalStorage } from "../../utilities";

export const EmptyUserState: userInfo = {
    id: 0,
    name: '',
    email: ''
}

export const UserKey = 'user';

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers:{
        createUser: (state, action)=>{
            persistLocalStorage<userInfo>(UserKey, action.payload)
            return action.payload
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload };
            persistLocalStorage<userInfo>(UserKey, result);
            return result;
        },
        resetUser: ()=>  {
            clearLocalStorage('user');
            return EmptyUserState
        }
        
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;