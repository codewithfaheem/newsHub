import React from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import defaultImage from "../../img/default_image.jpg"
const NewsDetail = () => {

    const newsItems = useSelector((state) => state.newsItems.newsItems.payload)
    const currentNews = useSelector((state) => state.changePage.newsIndex)
    const newsDetail = newsItems[currentNews]
    const images = newsDetail.multimedia;

    const getLargeImage = (data) => {
        let a=0, url;
        for(let i=1; i<data.length-1; i++){
            if(data[i].width >= data[a].width)
              a = i
        }
        url = data[a].url
        return url;
    }
    const url = images ? getLargeImage(images) : null
    

    return(
        <>
            <Header/>
            <div className="max-w-screen-lg mx-auto mt-5">
                <div className="mb-5">
                    {url? 
                        <img src={url} className="h-full mx-auto" alt={newsDetail.title}/>
                    :
                        <img src={defaultImage} className="h-full mx-auto" alt={newsDetail.title}/>
                    }
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">{newsDetail.title}</h2>
                    <p className="text-base">{newsDetail.abstract}</p>
                    <a href={newsDetail.url} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>           
        </>
    )
}
export default NewsDetail;