import React from 'react';

const initialState = {
    isAuth:false,
    user:null,
    token: null
}

export const auth = (state=initialState, action)=>{
    switch(action.type){
        case "auth_success":
            return {
                ...state,
                user: action.payload.user,
                isAuth:true,
                token: action.payload.token
            }
        case 'logout_success':
            return{
                ...state,
                user: null,
                token:null,
                isAuth:false
            }
        default:
            return state;
    }
}
