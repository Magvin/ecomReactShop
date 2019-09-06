export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem=> cartItem.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem=> 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quanitity: cartItem.quanitity + 1} : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quanitity: 1}]
}