export const user = (state={}, action) =>{
    switch (action.type) {
        case 'user_loaded':
            return{
                ...state,
                ...action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}