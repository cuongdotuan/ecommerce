import React from 'react'
import { Grid, Skeleton } from '@mui/material'

const Loading = () => {
    return (
        <Grid container className='px-10'>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <div className='h-[462px] flex items-center flex-col gap-3'>
                    <div className='bg-[#e3e3e3] w-11/12 h-80 flex justify-center items-center'><span className="loader"></span></div>
                    <Skeleton animation="wave" className='w-3/4 h-12 pt-2' />
                    <Skeleton animation="wave" className='w-1/4 h-12' />
                </div>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <div className='h-[462px] flex items-center flex-col gap-3'>
                    <div className='bg-[#e3e3e3] w-11/12 h-80 flex justify-center items-center'><span className="loader"></span></div>
                    <Skeleton animation="wave" className='w-3/4 h-12 pt-2' />
                    <Skeleton animation="wave" className='w-1/4 h-12' />
                </div>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <div className='h-[462px] flex items-center flex-col gap-3'>
                    <div className='bg-[#e3e3e3] w-11/12 h-80 flex justify-center items-center'><span className="loader"></span></div>
                    <Skeleton animation="wave" className='w-3/4 h-12 pt-2' />
                    <Skeleton animation="wave" className='w-1/4 h-12' />
                </div>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <div className='h-[462px] flex items-center flex-col gap-3'>
                    <div className='bg-[#e3e3e3] w-11/12 h-80 flex justify-center items-center'><span className="loader"></span></div>
                    <Skeleton animation="wave" className='w-3/4 h-12 pt-2' />
                    <Skeleton animation="wave" className='w-1/4 h-12' />
                </div>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <div className='h-[462px] flex items-center flex-col gap-3'>
                    <div className='bg-[#e3e3e3] w-11/12 h-80 flex justify-center items-center'><span className="loader"></span></div>
                    <Skeleton animation="wave" className='w-3/4 h-12 pt-2' />
                    <Skeleton animation="wave" className='w-1/4 h-12' />
                </div>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <div className='h-[462px] flex items-center flex-col gap-3'>
                    <div className='bg-[#e3e3e3] w-11/12 h-80 flex justify-center items-center'><span className="loader"></span></div>
                    <Skeleton animation="wave" className='w-3/4 h-12 pt-2' />
                    <Skeleton animation="wave" className='w-1/4 h-12' />
                </div>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <div className='h-[462px] flex items-center flex-col gap-3'>
                    <div className='bg-[#e3e3e3] w-11/12 h-80 flex justify-center items-center'><span className="loader"></span></div>
                    <Skeleton animation="wave" className='w-3/4 h-12 pt-2' />
                    <Skeleton animation="wave" className='w-1/4 h-12' />
                </div>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <div className='h-[462px] flex items-center flex-col gap-3'>
                    <div className='bg-[#e3e3e3] w-11/12 h-80 flex justify-center items-center'><span className="loader"></span></div>
                    <Skeleton animation="wave" className='w-3/4 h-12 pt-2' />
                    <Skeleton animation="wave" className='w-1/4 h-12' />
                </div>
            </Grid>


        </Grid>
    )
}

export default Loading