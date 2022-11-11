import Navbar from "../Components/navbar/Navbar";
import Header from "../Components/header/Header";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../Components/searchItem/SearchItem";
// import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const ListPage = () => {
  // const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  const [destination, setDestination] = useState("");
  // const [dates, setDates] = useState(location.state.dates);
  const [dates, setDates] = useState("");
  const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
  const [options, setOptions] = useState("");
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  // Temp States.
  const [loading, setLoading] = useState("");
  const [data, setData] = useState("");
  const history = useHistory();

  // function reFetch() {}

  // const { data, loading, error, reFetch } = useFetch(
  //   `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  // );

  // const handleClick = () => {
  //   reFetch();
  // };

  return (
    <Wrapper>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              {/* <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span> */}
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                history.push("/HotelPage");
              }}
            >
              Search
            </button>
            {/* <button onClick={handleClick}>Search</button> */}
          </div>
          <div className="listResult">
            {/* {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )} */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ListPage;

const Wrapper = styled.section`
  .listContainer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .listWrapper {
    width: 100%;
    max-width: 1024px;
    display: flex;
    gap: 20px;
  }

  .listSearch {
    flex: 1;
    background-color: #febb02;
    padding: 10px;
    border-radius: 10px;
    position: sticky;
    top: 10px;
    height: max-content;
  }

  .lsTitle {
    font-size: 20px;
    color: #555;
    margin-bottom: 10px;
  }

  .lsItem {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
  }

  .lsItem > label {
    font-size: 12px;
  }

  .lsItem > input {
    height: 30px;
    border: none;
    padding: 5px;
  }
  .lsItem > span {
    height: 30px;
    padding: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .lsOptions {
    padding: 10px;
  }

  .lsOptionItem {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
    font-size: 12px;
  }

  .lsOptionInput {
    width: 50px;
  }

  .listSearch > button {
    padding: 10px;
    background-color: #0071c2;
    color: white;
    border: none;
    width: 100%;
    font-weight: 500;
    cursor: pointer;
  }

  .listResult {
    flex: 3;
  }
`;
