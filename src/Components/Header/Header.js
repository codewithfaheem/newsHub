import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { changeNewsCategory, setLoading } from '../../store/slice/NewsSlice'
import { setPage } from "../../store/slice/ChangePage";
import { HOME_PAGE } from "../../store/Constants";

export default function Header(props) {

    const currentPage = useSelector((state) => state.changePage.page)
    const newsCategory = useSelector((state) => state.newsItems.newsCategory)
    const dispatch = useDispatch()

    const newsCategoryHandler = (event, a) => {  
        if((newsCategory !== a) || (currentPage !== HOME_PAGE)){
            dispatch(changeNewsCategory(a))
            dispatch(setLoading(true))
            dispatch(setPage(HOME_PAGE))
        }
    }

    return(
        <header className="flex flex-col bg-slate-50">
            <h1 className='text-4xl text-center py-3'>New App</h1>
            <nav className="flex flex-1 items-center justify-center mb-3">
                <div className="flex flex-wrap space-x-4">
                    <a onClick={((event)=>newsCategoryHandler(event, "all"))} className={`hover:bg-gray-700 hover:text-white active:bg-gray-900 active:text-white text-slate-900 rounded-md px-3 py-2 text-sm font-medium cursor-pointer ${newsCategory === "" && "bg-gray-900 text-white"}`}>Home</a>
                    <a onClick={((event)=>newsCategoryHandler(event, "business"))} className={`hover:bg-gray-700 hover:text-white active:bg-gray-900 active:text-white text-slate-900 rounded-md px-3 py-2 text-sm font-medium cursor-pointer ${newsCategory === "business" && "bg-gray-900 text-white"}`}>Business</a>
                    <a onClick={((event)=>newsCategoryHandler(event, "movies"))} className={`hover:bg-gray-700 hover:text-white active:bg-gray-900 active:text-white text-slate-900 rounded-md px-3 py-2 text-sm font-medium cursor-pointer ${newsCategory === "entertainment" && "bg-gray-900 text-white"}`}>Entertainment</a>
                    <a onClick={((event)=>newsCategoryHandler(event, "health"))} className={`text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer ${newsCategory === "health" && "bg-gray-900 text-white"}`}>Health</a>
                    <a onClick={((event)=>newsCategoryHandler(event, "science"))} className={`text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer ${newsCategory === "science" && "bg-gray-900 text-white"}`}>Science</a>
                    <a onClick={((event)=>newsCategoryHandler(event, "sports"))} className={`text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer ${newsCategory === "sports" && "bg-gray-900 text-white"}`}>Sports</a>
                    <a onClick={((event)=>newsCategoryHandler(event, "technology"))} className={`text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer ${newsCategory === "technology" && "bg-gray-900 text-white"}`}>Technology</a>
                </div>
            </nav>
        </header>
    )
}