import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const HomeLoading = () => {
    return(
        <>
            <article className=" max-w-xl flex-col items-start justify-start hidden"> {/*hidden option */}
                <div className="w-full h-1/2 flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={150} />
                </div>
                <div className="w-full mt-6">
                    <h2 className="mb-3 text-sm">
                        <Skeleton containerClassName='flex-1' />
                    </h2>
                    <p className="text-xs">
                        <Skeleton count={3} containerClassName='flex-' />
                    </p>
                </div>
            </article>            
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-start">
                <div className="w-full flex justify-center items-center">
                    <Skeleton containerClassName='flex-1' height={300} />
                </div>
            </article>
        </>
    )
}

export default HomeLoading;