import Navbar from "../Components/navbar/Navbar";
import Header from "../Components/header/Header";
import MailList from "../Components/mailList/MailList";
import Footer from "../Components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SearchContext } from "../../context/SearchContext";
// import { AuthContext } from "../../context/AuthContext";
import Reserve from "../Components/reserve/Reserve";
import styled from "styled-components";

const HotelPage = () => {
  // const location = useLocation();
  // const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // Temp States.
  const [loading, setLoading] = useState("");
  const [data, setData] = useState("");
  const [days, setDays] = useState("");
  const [id, setId] = useState("");
  const [options, setOptions] = useState("");

  // const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    // if (user) {
    // setOpenModal(true);
    // } else {
    // navigate("/login");
    // }
  };
  return (
    <Wrapper>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </Wrapper>
  );
};

export default HotelPage;

const Wrapper = styled.section`
  .hotelContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .hotelWrapper {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  .bookNow {
    position: absolute;
    top: 10px;
    right: 0;
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }

  .hotelTitle {
    font-size: 24px;
  }

  .hotelAddress {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hotelDistance {
    color: #0071c2;
    font-weight: 500;
  }

  .hotelPriceHighlight {
    color: #008009;
    font-weight: 500;
  }

  .hotelImages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .hotelImgWrapper {
    width: 33%;
  }

  .hotelImg {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .hotelDetails {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
  }

  .hotelDetailsTexts {
    flex: 3;
  }

  .hotelDesc {
    font-size: 14px;
    margin-top: 20px;
  }

  .hotelDetailsPrice {
    flex: 1;
    background-color: #ebf3ff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .hotelDetailsPrice > h1 {
    font-size: 18px;
    color: #555;
  }
  .hotelDetailsPrice > span {
    font-size: 14px;
  }
  .hotelDetailsPrice > h2 {
    font-weight: 300;
  }
  .hotelDetailsPrice > button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }

  .slider {
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.613);
    z-index: 999;
    display: flex;
    align-items: center;
  }

  .sliderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sliderImg {
    width: 80%;
    height: 80vh;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: lightgray;
    cursor: pointer;
  }

  .arrow {
    margin: 20px;
    font-size: 50px;
    color: lightgray;
    cursor: pointer;
  }
`;
