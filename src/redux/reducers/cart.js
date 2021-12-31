const initialState={
    cart_items:[],

}
export const cart = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_ITEM_TO_CART":
            return{
                ...state,
                cart_items:[...state.cart_items, action.item]
            }
        case "REMOVE_ITEM_FROM_CART":
            return{
                ...state,
                cart_items:state.cart_items.filter(item=>item!==action.item)
            }
        default:
            return state
    }
}