import React from "react";
import { useSelector } from "react-redux";
import { HOME_PAGE, DETAIL_PAGE } from "../store/Constants";
import NewsLanding from "./NewsLanding/NewsLanding";
import NewsDetail from './NewsDetail/NewsDetail'

const PageSelector = () => {

    const currentPage = useSelector((state) => state.changePage.page)
    
    switch(currentPage) {
        case HOME_PAGE :
            return (<NewsLanding/>)
        case DETAIL_PAGE :
            return (<NewsDetail/>)
        default:
            return (<NewsLanding/>)
    }
        
}
export default PageSelector