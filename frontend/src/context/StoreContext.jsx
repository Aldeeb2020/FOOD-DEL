import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState({});

    // Add to cart items
    const addItemToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }else{
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }
    }

    const removeItemFromCart = (itemId) => {
        if(cartItems[itemId]){
            if(cartItems[itemId] > 1){
                setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
            }else{
                cartItems.remove(itemId);
                setCartItems({...cartItems});
            }
        }
    }

    useEffect(function(){
        console.log(cartItems);
    },[cartItems])
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addItemToCart,
        removeItemFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}   
export default StoreContextProvider;