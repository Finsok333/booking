import "./single.css"
import { useState } from 'react'
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Single = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false)

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17178578.jpg?k=b542a5547511a50aed4e70dc9ce2b713d34213e79b119b2a1f527aeca0da03df&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17178720.jpg?k=0e5562f196f5947a98c3f38217073e5c05bf37a15142332ac41ce466de8e19dd&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17178737.jpg?k=e3714bd466b97b37cab70ae9a4de3f960f9c1617c9d56f906c2fd55c8eb9e0fd&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17178596.jpg?k=fc522ff520d9cd46c20e6a8fd928acf659ebd92c73681ada85e378845c0c6e6d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/306942213.jpg?k=e68cd038aaf4265de396bcf8d8a995db30993a7bd67552aff334f5313ec6617e&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/306943913.jpg?k=2c47d0b0d5cd0c2f32e2c7f5c3d24222e8e699e0c6978a0290012794f9671ce4&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/306942499.jpg?k=ae08174870557eba84c901efcefa7c227cc2305df41f89a29cf4381359ce1b44&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/306942803.jpg?k=4481294c2ae904ecf43a51e0de6a188516ab3d54ef7f7009de2378bf33076f4b&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17178720.jpg?k=0e5562f196f5947a98c3f38217073e5c05bf37a15142332ac41ce466de8e19dd&o=&hp=1"
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">
                        Reserve or Book Now!
                    </button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Experience World-class Service at Taj Tashi Bhutan
                            </h1>
                            <p className="hotelDesc">
                                You're eligible for a Genius discount at Taj Tashi Bhutan! To save at this property, all you have to do is sign in.

                                5-star luxury awaits guests at Taj Tashi Bhutan, in the heart of Bhutan’s Thimphu Valley. Featuring elaborate Bhutanese architecture, the hotel provides a fitness center and luxurious spa. 4 dining options are available in the hotel.

                                Taj Tashi Bhutan is 6.4 km from Buddha Point Thimphu. Paro International Airport is 59.5 km or an approximate 1-hour drive from the hotel.

                                The stylish rooms feature wooden décor, with select ones providing stunning views of Thimphu Valley. A flat-screen TV, minibar and tea/coffee-making facilities are provided. The suites include walk-in closets and luxurious bathrooms with a stand-alone bathtub.

                                Guests can unwind in The Jiva Spa, featuring a spa menu of Indian healing therapies. A concierge desk and business center are available to assist guests. Currency exchange and ticket services are available for guests' convenience.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9 night stay!</h1>
                            <span>Taj Tashi Bhutan has been welcoming Booking.com guests since May 30, 2012</span>
                            <h2><b>$945</b> (9 Nights)</h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Single