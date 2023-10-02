import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { Grid } from '@mui/material'
import Loading from '../components/LoadingProducts'



const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    let ignore = false
    const getProducts = async () => {
      try {
        const res = await axios.get("https://648704aabeba6297278facac.mockapi.io/products")
        if (!ignore) {
          setProducts(res.data)
        }

      }
      catch (error) {
        console.log(error)
      }
    }
    getProducts()

    return () => { ignore = true }
  }, [])
  if (products.length === 0) return <Loading />



  return (
    <Grid className='px-10' container >

      {products.map(p => <Grid item key={p.id} lg={3} md={4} sm={6} xs={12}>
        <Product key={p.id} product={p} />
      </Grid>

      )}

    </Grid>

  )
}

export default Products