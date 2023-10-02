import React, { useContext } from 'react'
import { formatPrice } from '../helper'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { CartContext } from '../contexts/CartContext'

const Product = ({ product }) => {
    const { name, imgs, price, id } = product
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()

    const addToCart = (id) => {
        const foundProduct = cart.find(p => p.id === id)
        if (!foundProduct) {
            const newProduct = { ...product, quantity: 1 }
            setCart([...cart, newProduct])
            return
        }
        const newProducts = cart.map(p => {
            if (p.id === id) {
                const newProduct = { ...p, quantity: p.quantity + 1 }
                return newProduct
            }
            return p
        })
        setCart(newProducts)
    }
    return (
        <div className='px-2 mb-4 flex flex-col items-center gap-3 cursor-pointer duration-200 hover:shadow-md hover:scale-105  ' >
            <img onClick={() => { navigate(`/products/${id}`) }} className='w-full  p-2' src={imgs[0]} alt={name} />
            <span onClick={() => { navigate(`/products/${id}`) }} className='pt-2 text-lg font-bold'>{name}</span>
            <span onClick={() => { navigate(`/products/${id}`) }}>{formatPrice(price)} đ</span>
            <Button
                variant="contained"
                className='mb-3 text-black bg-gray-200 hover:bg-gradient-to-r from-zinc-950 to-zinc-500 hover:text-white duration-500'
                onClick={() => addToCart(id)}
            >

                Add to cart</Button>
        </div>
    )
}

export default Product