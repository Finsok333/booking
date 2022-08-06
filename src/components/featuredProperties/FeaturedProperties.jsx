import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="" className="fpImg" />
                <span className="fpName">Sugar Loft Apartments</span>
                <span className="fpCity">Rio de Janeiro</span>
                <span className="fpPrice">Starting from Nu. 1500</span>
                <div className="fpRating">
                    <button>4.5</button>
                    <span>Wonderful</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=" alt="" className="fpImg" />
                <span className="fpName">The Apartments by The Sloane Club</span>
                <span className="fpCity">London</span>
                <span className="fpPrice">Starting from Nu. 8000</span>
                <div className="fpRating">
                    <button>9.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/74065694.jpg?k=7d852b0255118faf9ca8f22ac30b033f8b7448ad7f47867f13bd213c6cb2e411&o=" alt="" className="fpImg" />
                <span className="fpName">VIP Residence Budapest</span>
                <span className="fpCity">Budapest</span>
                <span className="fpPrice">Starting from Nu. 7800</span>
                <div className="fpRating">
                    <button>9.5</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/112346687.jpg?k=b0c1b36d31151ed463b8960c21e868584043522f4f380c0f382994d4b3e7ada2&o=" alt="" className="fpImg" />
                <span className="fpName">A casa di Edi</span>
                <span className="fpCity">Rome</span>
                <span className="fpPrice">Starting from Nu. 8852</span>
                <div className="fpRating">
                    <button>5.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties