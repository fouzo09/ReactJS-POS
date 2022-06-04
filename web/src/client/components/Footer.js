import React from "react";

const Footer = ()=>{
    const year = new Date().getFullYear();
    const copyright = ` Copyright ${year} All rights reserved.`
    return (
            <>
                <div className="colorlib-footer">
                    <p>
                        <small>
                            &copy; 
                            {copyright} <br/>
                            Made <i className="icon-heart" aria-hidden="true"></i> by
                            <a href="/" target="_blank"> fouzo09</a>
                        </small>
                    </p>
                    <ul>
                        <li><a href="/"><i className="icon-facebook2"></i></a></li>
                        <li><a href="/"><i className="icon-twitter2"></i></a></li>
                        <li><a href="/"><i className="icon-instagram"></i></a></li>
                        <li><a href="/"><i className="icon-linkedin2"></i></a></li>
                    </ul>
                </div>
            </>
    );
}

export default Footer;