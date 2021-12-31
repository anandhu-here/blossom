
const initialState = {
    auth_tab: 'login',

}

export const clicks = (state=initialState, action) =>{
    switch (action.type) {
        case 'login_tab':
            return{
                ...state,
                auth_tab:'login'
            }
            break;
        case 'signup_tab':
            return{
                ...state,
                auth_tab:'signup'
            }
        default:
            return state
    }
}