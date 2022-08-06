import React from 'react'
import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/620027.webp?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Thimphu</h1>
                    <h2>1250 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/684568.webp?k=2e0d30ebcaf31e7469617ea53a01cdaf68d14c506d1167af9b9b38e53832f156&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Paro</h1>
                    <h2>890 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured