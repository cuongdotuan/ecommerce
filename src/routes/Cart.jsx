import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../helper';
import { Button } from '@mui/material';
import { FiPlus, FiMinus, FiXCircle } from 'react-icons/fi'


const Cart = () => {
  const navigate = useNavigate()
  const data = useContext(CartContext)
  const { cart, setCart } = data


  let totalPrice = 0
  for (let p of cart) {
    totalPrice = totalPrice + (p.quantity * p.price)
  }
  const handleIncrease = (id) => {
    const foundProduct = cart.find(p => p.id === id)
    if (!foundProduct) return

    const newProducts = cart.map(p => {
      if (p.id === id) {
        const newProduct = { ...p, quantity: p.quantity + 1 }
        return newProduct
      }
      return p
    })
    setCart(newProducts)
  }

  const handleDecrease = (id) => {
    const foundProduct = cart.find(p => p.id === id)
    if (!foundProduct) return
    if (foundProduct.quantity === 1) {
      handleRemove(id)
      return
    }
    const newProducts = cart.map(p => {
      if (p.id === id) {

        const newProduct = { ...p, quantity: p.quantity - 1 }
        return newProduct
      }
      return p
    })
    setCart(newProducts)
  }

  const handleRemove = (id) => {
    const confirmRemove = confirm("Do you want to remove this item?")
    if (confirmRemove) {
      const filteredProducts = cart.filter(p => {
        return p.id !== id
      })
      setCart(filteredProducts)
    }

  }

  return (
    <>
      <TableContainer component={Paper} className='mb-10'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Amount</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className='hover:bg-zinc-200'
              >
                <TableCell align="center" className='cursor-pointer' > <FiXCircle className='text-lg' onClick={() => handleRemove(row.id)} /></TableCell>
                <TableCell align="center"><img className='w-14 cursor-pointer' onClick={() => navigate(`/products/${row.id}`)} src={row.imgs[0]} /></TableCell>
                <TableCell component="th" scope="row" >
                  <span className='text-lg cursor-pointer hover:text-orange-500' onClick={() => navigate(`/products/${row.id}`)} >{row.name}</span>
                </TableCell>
                <TableCell align="center" className='text-lg'>{formatPrice(row.price)} đ</TableCell>

                <TableCell align="center" className='text-lg'>
                  <Button onClick={() => handleDecrease(row.id)}><FiMinus /></Button>
                  <span>{row.quantity}</span>
                  <Button onClick={() => handleIncrease(row.id)}><FiPlus /></Button>
                </TableCell>
                <TableCell align="center" className='text-lg min-w-[186px]'>{formatPrice(row.quantity * row.price)} đ</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className='flex justify-end '>
        <div className=' flex flex-col text-end py-4 px-5 bg-zinc-200 max-w-lg rounded'>
          <span className='text-lg font-medium'>
            Total: {formatPrice(totalPrice)} đ
          </span>
          <span className='text-xs pb-6'>* Total amount does not include SHIPPING fee, Fees will be added to the payment section.</span>
          <Button variant='contained' className='text-lg cursor-pointer bg-zinc-900' onClick={() => navigate('/checkout')}>
            Go to the Checkout
          </Button>
        </div>
      </div>
    </>



  );
}

export default Cart



