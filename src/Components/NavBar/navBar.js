import React from 'react'
import { useDispatch } from 'react-redux'
import { changeNewsCategory, addNewsItems } from '../../store/slice/NewsSlice'
import getNewsData from '../API/NewsApi'

const NavBar = () => {

  const dispatch = useDispatch()

  const newsCategoryHandler = (a) => {
    
    dispatch(changeNewsCategory(a))
    
    getNewsData(a).then((response) => {
      dispatch(addNewsItems(response.data.articles))
    })

  }

  return (
    <nav className="flex flex-1 items-center justify-center mb-3">
        <div className="flex space-x-4">
            <a onClick={(()=>newsCategoryHandler(""))} className="hover:bg-gray-700 hover:text-white active:bg-gray-900 active:text-white text-slate-900 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
            <a onClick={(()=>newsCategoryHandler("business"))} className="hover:bg-gray-700 hover:text-white active:bg-gray-900 active:text-white focus:bg-gray-900 focus:text-white text-slate-900 rounded-md px-3 py-2 text-sm font-medium">Business</a>
            <a onClick={(()=>newsCategoryHandler("entertainment"))} className="hover:bg-gray-700 hover:text-white active:bg-gray-900 active:text-white text-slate-900 rounded-md px-3 py-2 text-sm font-medium">Entertainment</a>
            <a onClick={(()=>newsCategoryHandler("health"))} className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Health</a>
            <a onClick={(()=>newsCategoryHandler("science"))} className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Science</a>
            <a onClick={(()=>newsCategoryHandler("sports"))} className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sports</a>
            <a onClick={(()=>newsCategoryHandler("technology"))} className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Technology</a>
        </div>
    </nav>
  )
}

export default NavBar;