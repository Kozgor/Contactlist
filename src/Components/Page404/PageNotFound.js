import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

class PageNotFound extends React.Component {
    render(){
        return(
            <div className = "div-404">
            <h2>404 PAGE NOT <span className='page-404-span'>FOUND</span></h2>
            <img src='https://us.123rf.com/450wm/plus69/plus691912/plus69191200191/135205101-raccoon-face-close-up-on-black-front-view.jpg?ver=6' alt='racoon'/>
            </div>
        )
    }
}
export default PageNotFound;