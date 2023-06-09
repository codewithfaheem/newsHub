import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ImageLoading = () => {
    return(
        <>
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
        </>
    )
}

export default ImageLoading;