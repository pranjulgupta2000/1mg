import { ADD_ITEM, REMOVE_ITEM, ADD_ADDRESS, ADD_SPEED } from "../actions/action";

const initialState = {
    cart: [],
    reduxAddress: [],
    reduxSpeed: [],
}
export const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log(state.cart);
            console.log(action.payload);
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case ADD_ADDRESS:
            return {
                ...state,
                reduxAddress: [
                    action.payload
                ]
            }
        case ADD_SPEED:
            return {
                ...state,
                reduxSpeed: [
                    action.payload
                ]
            }

        case REMOVE_ITEM:
            const deleteArray = state.cart.filter((item, index) => {
                return index !== action.payload;
            });
            return {
                ...state, 
                cart:deleteArray};
        default:
            return state;
    }
};