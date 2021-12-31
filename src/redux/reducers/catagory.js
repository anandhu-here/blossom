export const catagory = (state={}, action) =>{
    switch(action.type){
        case "men_hood":
            return{
                ...state,
                list:"Men's Hoodies"
            }
        default:
            return state
    }
}