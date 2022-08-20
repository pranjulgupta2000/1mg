export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_SPEED='ADD_SPEED';

export const addItemToCart = data => ({
    type: ADD_ITEM,
    payload: data,
});
export const addAddress = address => ({
    type: ADD_ADDRESS,
    payload: address,
});
export const addSpeed = speed => ({
    type: ADD_SPEED,
    payload: speed,
});

export const removeItemFromCart = index => ({
    type: REMOVE_ITEM,
    payload: index,
});