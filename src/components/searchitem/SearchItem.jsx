import "./searchitem.css"
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
    const navigate = useNavigate();
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle" href={navigate("/tower")}>Tower Street Apartment</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Airconditioning
                </span>
                <span className="siFeatures">
                    Entire studio ~ 1 bathroom ~ 21m 1 full faBed
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later,so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$1234</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem