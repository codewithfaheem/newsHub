import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { DETAIL_PAGE } from "../../store/Constants";
import {addNewsItems, setLoading} from '../../store/slice/NewsSlice'
import {setPage, setNewsIndex} from '../../store/slice/ChangePage'
import InfiniteScroll from "react-infinite-scroll-component";
import HomeLoading from "../Loading/HomeLoading";
import Header from "../../Components/Header/Header";
import getNewsData from "../../Components/API/NewsApi";
import defaultImage from "../../img/default_image.jpg"

const NewsLanding = () => {
    const newsCategory = useSelector((state) => state.newsItems.newsCategory)
    const newsItems = useSelector((state) => state.newsItems.newsItems.payload)
    const loading = useSelector((state) => state.newsItems.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        getNewsData(newsCategory).then(response => {
            dispatch(addNewsItems(response.data.results))
            dispatch(setLoading(false))


        })
    }, [newsCategory, dispatch])

    const getLargeImage = (data) => {
        let a=0, url;
        for(let i=1; i<data.length-1; i++){
            if(data[i].width >= data[a].width)
              a = i
        }
        url = data[a].url

        return url;
    }

    const detailPageHandler = (a) => {
        dispatch(setPage(DETAIL_PAGE))
        dispatch(setNewsIndex(a))
    }

    const fetchMoreData = () => {
        console.log("fetching data")
    }


    return(
        <>
            <Header/>
            {(newsItems !== undefined) && (loading === false) ? 
                <InfiniteScroll
                    dataLength={300}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                    w-full pt-5 px-8 gap-x-6 gap-y-6 
                    border-t border-gray-200"
                >
                        {newsItems.map((Item,i)=>{
                            let url = Item.multimedia? getLargeImage(Item.multimedia) : null
                            return(
                                <article className="flex max-w-xl flex-col items-start justify-start cursor-pointer" onClick={() => detailPageHandler(i)} key={Item.title + i}>
                                    <div className="w-full sm:h-48 md:h-50 lg:h-30 xl:h-40 2xl:h-60 flex justify-center items-center">
                                        {url ? 
                                            <img src={url} className="w-full h-full object-cover" alt={"Item.title"}/>
                                        :
                                            <img src={defaultImage} className="w-full h-full object-cover" alt={"Item.title"}/>
                                        }
                                    </div>
                                    <div className="mt-6 2xl:">
                                        <h2 className="mb-3 text-sm">{Item.title}</h2>
                                        <p className="text-xs">{Item.abstract}</p>
                                    </div>
                                </article>
                            )
                        })}
                    
                </InfiniteScroll>
            :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full pt-5 px-8 gap-x-6 gap-y-6 border-t border-gray-200">
                    <HomeLoading/>
                </div>
            }
        </>
    )
}
export default NewsLanding;