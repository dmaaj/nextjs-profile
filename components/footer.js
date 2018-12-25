import React from 'react'
import {Button} from 'reactstrap'

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <div className="container foot">
                    <div className="icon_set">
                        <svg className="icons">
                            <use xlinkHref="../static/img/icons.svg#fb"/>
                        </svg>
                        <svg className="icons">
                            <use xlinkHref="../static/img/icons.svg#fb"/>
                        </svg>
                        <svg className="icons">
                            <use xlinkHref="../static/img/icons.svg#fb"/>
                        </svg>
                        <svg className="icons">
                            <use xlinkHref="../static/img/icons.svg#fb"/>
                        </svg>
                    </div>

                    <div className="navbar-brand">
                        <h1 className="tags">&#60; /</h1>
                        <img src="../static/img/profile2.jpg" alt="kng_maaj" className="cl_profile"/>
                        <h1 className="tags">&#62;</h1>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;