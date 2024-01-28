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
      "https://corsproxy.io/?"+"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return ResList?.length == 0 ? (
    <div>
      <Hero/>
      <div className="Header flex p-6 m-4 mx-auto max-w-[1700px] bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent shadow-md shadow-slate-300 rounded-3xl justify-between">
        <h1 className="hidden sm:block my-auto w-auto font-bold text-4xl">Explore Today's Favourite...</h1>
      </div>
      <div className="srch-cnt my-4 sticky bg-gray-100 top-20 py-1">
      <div className="srch-box w-[200px] sm:w-[550px] mr-auto ml-auto">
        <input
          id="search"
          className="w-[130px] border border-gray-300 p-1 sm:p-3 rounded-l-3xl sm:w-[450px] placeholder:text-gray-300 sm:placeholder:line-clamp-1"
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
          className="srch-button border border-gray-300 bg-white p-1 sm:p-3 px-4 rounded-r-3xl hover:bg-cyan-200"
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
      <Shimmer />
    </div>
  ) : (
    <div className="rootContainer">
      <Hero/>
      <div className="Menu">
        <div className="Header flex p-6 m-4 mx-auto max-w-[1700px] bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent shadow-md shadow-slate-300 rounded-3xl justify-between">
          <h1 className="hidden sm:block my-auto w-auto font-bold text-4xl">Explore Today's Favourite...</h1>
          <button
            className="filter rated-btn p-1 sm:p-3 font-normal rounded-xl bg-slate-40 bg-gradient-to-l from-red-600 to-blue-600 text-white shadow-md shadow-cyan-200 sm:w-52 mx-auto sm:mx-1"
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
        <div className="srch-cnt my-4 sticky bg-gray-100 top-20 py-1">
          <div className="srch-box w-[200px] sm:w-[550px] mr-auto ml-auto">
            <input
              id="search"
              className="w-[130px] border border-gray-300 p-1 sm:p-3 rounded-l-3xl sm:w-[450px] placeholder:text-gray-300 sm:placeholder:line-clamp-1"
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
              className="srch-button border border-gray-300 bg-white p-1 sm:p-3 px-4 rounded-r-3xl hover:bg-cyan-200"
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
        <div className="cardList flex flex-wrap justify-center">
          {TopResList?.length === 0 ? (
            <div>
              <h1 class="Seachinput">No matches found for "{SearchValue}"</h1>
              {/* <Shimmer/> */}
            </div>
          ) : (
            TopResList?.map((x) =><Link to={"/restaurants/"+x?.info.id} onClick={()=>{
              window.scrollTo(0,0);
            }}><Card key={x?.info.id} resData={x} /></Link>)
          )}
        </div>
      </div>
    </div>
  );
}

//https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3532772&lng=85.8265977&page_type=DESKTOP_WEB_LISTING
