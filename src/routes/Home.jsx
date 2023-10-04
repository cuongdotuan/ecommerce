import React from 'react'
import { Grid } from '@mui/material'
import { FiRotateCcw, FiHeart } from 'react-icons/fi'
import { FaShippingFast } from 'react-icons/fa'
const Home = () => {
  return (
    <>
      <div className='mb-7'>
        <img className='w-full ' src="/photos/home-page/home-1.jpg" alt="" />
      </div>

      <Grid container columnSpacing={4} className='max-w-7xl mx-auto my-0 w3-container'>
        <Grid item xs={4}>
          <div className='relative cursor-pointer '>
            <img src="/photos/home-page/backpack.jpg" alt="" className='w-full max-h-[394px] ' />
            <div className='absolute flex justify-center items-center top-0 left-0 w-full h-full text-white font-medium text-xl bg-black opacity-0 hover:opacity-70 transition-opacity'>BACKPACK</div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='relative cursor-pointer' >
            <img src="/photos/home-page/wallet.jpg" alt="" className='w-full max-h-[394px]' />
            <div className='absolute flex justify-center items-center top-0 left-0 w-full h-full text-white font-medium text-xl bg-black opacity-0 hover:opacity-70 transition-opacity'>WALLET</div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='relative cursor-pointer'>
            <img src="/photos/home-page/bag.jpg" alt="" className='w-full max-h-[394px]' />
            <div className='absolute flex justify-center items-center top-0 left-0 w-full h-full text-white font-medium text-xl bg-black opacity-0 hover:opacity-70 transition-opacity'>BAG</div>
          </div>
        </Grid>
      </Grid>
      <div className='text-center mb-7'>
        <img src="/photos/home-page/footer.jpg" alt="" className='w-full ' />
      </div>
      <div className='flex justify-between gap-2 px-2'>
        <div className='flex flex-col flex-1 justify-center items-center py-4 leading-6 bg-zinc-100'><FiRotateCcw className='text-4xl mb-4' /><span className='font-semibold'>ĐỔI/TRẢ</span><span>Miễn phí đổi trả trong vong 7 ngày</span></div>
        <div className='flex flex-col flex-1 justify-center items-center py-4 leading-6 bg-zinc-100'><FaShippingFast className='text-4xl mb-4' /><span className='font-semibold'>VẬN CHUYỂN</span><span>Giao nhanh 2H</span></div>
        <div className='flex flex-col flex-1 justify-center items-center py-4 leading-6 bg-zinc-100'><FiHeart className='text-4xl mb-4' /> <span className='font-semibold'>BẢO HÀNH</span><span>Miễn phí bảo hành trọn đời</span></div>
      </div>
    </>
  )
}

export default Home