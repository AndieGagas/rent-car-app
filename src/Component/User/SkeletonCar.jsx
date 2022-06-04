import React from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';

function SkeletonCar(){
    return(
        <Card className='w-80'>
            <CardContent className='p-6'>
                <Skeleton variant="rectangular" className='h-34 mb-4' />
                <Skeleton variant='text' className='h-6 mb-2'/>
                <Skeleton variant='text' className='h-6 mb-2'/>
                <Skeleton variant='text' className='h-16 mb-3'/>
                <Skeleton variant='text' className='h-28 w-2/4 mb-4'/>
                <Skeleton variant="rectangular" className='h-12' />
            </CardContent>
        </Card>
    )
}

export default SkeletonCar