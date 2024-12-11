import HumbergerIcon from "../assets/humberger.svg";
import YoutubeIcon from "../assets/youtube-icon.svg";
import ProfileIcon from "../assets/user-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux-store/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constants/constant";
import SEARCH_ICON from "../assets/search-icon.svg";
import { cacheResults } from "../redux-store/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((state) => state.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchValue]) {
        setSuggestions(cache[searchValue]);
      } else {
        getSearchedResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const getSearchedResults = async () => {
    if (searchValue) {
      const results = await fetch(YOUTUBE_SEARCH_API + `q=${searchValue}`);
      const json = await results.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchValue]: json[1] }));
    }
  };

  return (
    <div className="flex items-center p-2 m-2 shadow-lg">
      <div className="flex">
        <img
          className="h-10 cursor-pointer"
          alt="Humberger Icon"
          src={HumbergerIcon}
          onClick={() => {
            dispatch(toggleMenu());
          }}
        />
        <img className="h-10 mx-2" alt="Youtube Logo" src={YoutubeIcon} />
      </div>
      <div className="flex-1 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 px-5 py-2">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-96 shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestions.map((name) => (
                <li
                  className="flex items-center py-2 px-3 hover:bg-gray-100"
                  key={name}
                >
                  <img src={SEARCH_ICON} alt="search icon" className="h-5" />
                  <span className="mx-2">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img className="h-10" alt="Profile Icon" src={ProfileIcon} />
      </div>
    </div>
  );
};

export default Head;
