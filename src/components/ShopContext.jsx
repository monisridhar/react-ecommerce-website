import { createContext, useState } from "react";
import all_product from '../assets/all_product'

export const ShopContext=createContext(null);

const getDefaultcart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const [cartItem,setcartItem]=useState(getDefaultcart());

    const addToCart=(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItem);
    }

    const removeFromCart=(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price* cartItem[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalitem=0;
        for(const item in cartItem){
            if(cartItem[item]>0)
            {
                totalitem+=cartItem[item];
            }
        }
        return totalitem;
    }

    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItem,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;