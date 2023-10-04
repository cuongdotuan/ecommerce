import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, ButtonGroup, Grid } from '@mui/material'
import { formatPrice } from '../helper'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { CartContext } from '../contexts/CartContext'

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)
  const result = useParams()
  const [quantity, setQuantity] = useState(1)
  const store = useContext(CartContext)

  const { cart, setCart } = store
  useEffect(() => {
    let ignore = false
    const getProductDetail = async () => {
      try {
        const res = await axios.get(`https://648704aabeba6297278facac.mockapi.io/products/${result.productId}`)
        if (!ignore) {
          setProduct(res.data)
        }
      }
      catch (error) {
        console.log(error)
      }
    }
    getProductDetail()
    return () => { ignore = true }
  }, [])

  if (!product) return <>loading detail</>


  const { imgs, name, price, stock, type } = product

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity === 1) {
      alert("The default quantity of the product must be 1")
      return
    }

    setQuantity(quantity - 1)
  }
  const imgArr = imgs.map((img, index) => {
    const handleChangeImage = (idx) => {
      setImgIndex(idx)
    }

    return <img className='w-full' key={index} src={img} alt="" onClick={() => handleChangeImage(index)} />
  })



  const addToCart = () => {
    const foundProduct = cart.find(p => p.id === product.id)
    if (!foundProduct) {
      const newProduct = { ...product, quantity }
      setCart([...cart, newProduct])
      return
    }

    const newProducts = cart.map(p => {
      if (p.id === product.id) {
        const newProduct = { ...p, quantity: p.quantity + quantity }
        return newProduct
      }
      return p
    })
    setCart(newProducts)
  }

  return (
    <Grid container className='px-10' columnSpacing={2}>
      {/* Ảnh */}
      <Grid item xs={12} sm={6}>
        <Grid item >
          <div className='flex gap-3'>
            {/* ảnh chính */}
            <div className='flex-[4]'>
              <img className='w-full' src={imgs[imgIndex]} alt="" />
            </div>

            {/* các ảnh phụ */}
            <div className='flex flex-col gap-3 cursor-pointer flex-1 h-96 overflow-y-auto'>
              {imgArr}
            </div>
          </div>
        </Grid>

      </Grid>

      {/* Nội dung chi tiết sản phẩm*/}
      <Grid item xs={12} sm={6}>
        <div className='flex flex-col gap-3'>
          <span className='text-3xl font-semibold'>{name}</span>
          <span className='text-2xl font-medium'>{formatPrice(price)} đ</span>
          <span className='text-base font-normal'>Type: {type.toUpperCase()}</span>
        </div>

        <ul className='list-none pt-4 pb-7 leading-6'>
          <li>Information: </li>
          <li>Vải Polyester cao cấp chống thấm nước</li>
          <li>Nhiều ngăn nhỏ đựng đồ cá nhân</li>
          <li>Có ngăn lấy đồ nhanh bên hông balo</li>
        </ul>

        {/* add sản phẩm vào giỏ */}
        <div className='flex gap-2'>

          {/* số lượng */}
          {stock > 0 && <ButtonGroup className='flex justify-center items-center gap-2 flex-1 border-solid border-[1px]'>
            <Button className='border-none text-black text-lg' onClick={decreaseQuantity}>
              <FiMinus />
            </Button>

            <span className='text-lg'>{quantity}</span>

            <Button className='border-none text-black text-lg' onClick={increaseQuantity}>
              <FiPlus />
            </Button>
          </ButtonGroup>}

          {/* nút add */}
          <Button disabled={stock === 0} variant='contained' className='flex-[6] text-base bg-zinc-900 disabled:bg-zinc-300 disabled:text-red-500' onClick={addToCart}>Add to cart</Button>
        </div>
      </Grid>

    </Grid>
  )
}

export default ProductDetail