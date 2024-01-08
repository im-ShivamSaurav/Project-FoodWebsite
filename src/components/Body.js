import Card from "./Card";
import Hero from "./Hero";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resdata from "../utils/resdata"
import { Link } from "react-router-dom";

export default function Body() {
  const [ResList, setResList] = useState(resdata);
  const [TopResList, setTopResList] = useState(resdata);
  const [filterValue, setfilterValue] = useState("Top Rated Restaurant");
  const [SearchValue, setSearchValue] = useState("");
  const [SearchButtonValue, setSearchButtonValue] = useState("🔍");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D20.3532772%26lng%3D85.8265977%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return ResList.length == 0 ? (
    <div>
      <Hero/>
      <div className="Header">
        <h1>Explore Today's Favourite...</h1>
      </div>
      <div className="srch-cnt">
        <input
          id="search"
          type="search"
          placeholder="Search your favourite Restraunts and Dishes..."
          value={SearchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              const SearchList = ResList.filter((e) =>
                e.info.name.toLowerCase().includes(SearchValue.toLowerCase())
              );
              setTopResList(SearchList);
              if (SearchValue.length === 0) {
                setSearchButtonValue("🔍");
              } else {
                setSearchButtonValue("❌");
              }
            }
          }}
        ></input>
        <button
          className="srch-button"
          onClick={() => {
            if (SearchValue !== "") {
              if (SearchButtonValue === "🔍") {
                const SearchList = ResList.filter(
                  (e) =>
                    e.info.name
                      .toLowerCase()
                      .includes(SearchValue.toLowerCase()) ||
                    e.info.cuisines.map((i) =>
                      i.toLowerCase.includes(SearchValue.toLowerCase())
                    )
                );
                setTopResList(SearchList);
                setSearchButtonValue("❌");
              } else {
                setTopResList(ResList);
                setSearchButtonValue("🔍");
                setSearchValue("");
              }
            } else {
              setTopResList(ResList);
              setSearchButtonValue("🔍");
            }
          }}
        >
          {SearchButtonValue}
        </button>
      </div>
      <Shimmer />
    </div>
  ) : (
    <div className="rootContainer">
      <Hero/>
      <div className="Menu">
        <div className="Header">
          <h1>Explore Today's Favourite...</h1>
          <button
            className="filter rated-btn"
            onClick={() => {
              if (filterValue === "Show all Restaurants") {
                setTopResList(ResList);
                setfilterValue("Top Rated Restaurants");
              } else {
                const filteredResList = TopResList.filter(
                  (e) => e.info.avgRating >= 4.5
                );
                setTopResList(filteredResList);
                setfilterValue("Show all Restaurants");
              }
            }}
          >
            {filterValue}
          </button>
        </div>
        <div className="srch-cnt">
          <div className="srch-box">
            <input
              id="search"
              type="search"
              placeholder="Search your favourite Restraunts and Dishes..."
              value={SearchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  const SearchList = ResList.filter((e) =>
                    e.info.name
                      .toLowerCase()
                      .includes(SearchValue.toLowerCase())
                  );
                  setTopResList(SearchList);
                  if (SearchValue.length === 0) {
                    setSearchButtonValue("🔍");
                  } else {
                    setSearchButtonValue("❌");
                  }
                }
              }}
            ></input>
            <button
              className="srch-button"
              onClick={() => {
                if (SearchValue !== "") {
                  if (SearchButtonValue === "🔍") {
                    const SearchList = ResList.filter(
                      (e) =>
                        e.info.name
                          .toLowerCase()
                          .includes(SearchValue.toLowerCase()) ||
                        e.info.cuisines.map((i) =>
                          i.toLowerCase.includes(SearchValue.toLowerCase())
                        )
                    );
                    setTopResList(SearchList);
                    setSearchButtonValue("❌");
                  } else {
                    setTopResList(ResList);
                    setSearchButtonValue("🔍");
                    setSearchValue("");
                  }
                } else {
                  setTopResList(ResList);
                  setSearchButtonValue("🔍");
                }
              }}
            >
              {SearchButtonValue}
            </button>
          </div>
        </div>
        <div className="cardList">
          {TopResList.length === 0 ? (
            <div>
              <h1 class="Seachinput">No matches found for "{SearchValue}"</h1>
              {/* <Shimmer/> */}
            </div>
          ) : (
            TopResList?.map((x) =><Link to={"/restaurants/"+x?.info.id} ><Card key={x?.info.id} resData={x} /></Link>)
          )}
        </div>
      </div>
    </div>
  );
}

//https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3532772&lng=85.8265977&page_type=DESKTOP_WEB_LISTING
