import { createContext, useEffect, useState } from "react";
import { CART } from "../helper";

export const CartContext = createContext([])

let initCart = []
try {
    const localCart = localStorage.getItem(CART)
    const parsed = JSON.parse(localCart)
    if (parsed) {
        initCart = parsed
    }

} catch {

}
const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initCart)
    useEffect(() => {
        localStorage.setItem(CART, JSON.stringify(cart))
    }, [cart])

    return <CartContext.Provider
        value={{
            cart,
            setCart
        }}>
        {children}
    </CartContext.Provider>
}
export default CartProvider