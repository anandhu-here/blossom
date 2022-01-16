import React from 'react';

const initialState = {displayName: null, email: null, emailVerified: false, isAnonymous: false, phoneNumber: null, photoURL: null,  uid: null, firstName:null, lastName:null, jobPosition:null}

export const auth = (state=initialState, action)=>{
    switch(action.type){

        case "auth_success":
            console.log(action.payload, "pay")
            return {
                ...state,
                displayName:action.payload.displayName,
                email:action.payload.email,
                emailVerified:action.payload.emailVerified,
                uid:action.payload.uid
            }
        case "register_success":
            return{
                ...state,
                ...action.payload
            }
        case 'logout_success':
            return{
            }
        default:
            return state;
    }
}
