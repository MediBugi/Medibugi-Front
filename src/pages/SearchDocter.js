import Searchdoc from "../components/Content/Searchdoc";
import HosList from "../components/List/HosList";
import "./pages.css";
import { getHosInfo } from "../components/API/api";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CurrentLocation from "../components/Info/CurrentLocation";

let department = [
  "전체",
  "내과",
  "한방내과",
  "소아청소년과",
  "침구과",
  "피부과",
  "정형외과",
  "한방부인과",
  "한방소아과",
  "치과",
  "한방안·이비인후·피부과",
  "한방신경정신과",
  "이비인후과",
  "한방재활의학과",
  "외과",
  "사상체질과",
  "가정의학과",
  "신경외과",
  "비뇨의학과",
  "재활의학과",
  "치과보철과",
  "치주과",
  "치과보존과",
  "마취통증의학과",
  "구강악안면외과",
  "소아치과",
  "구강내과",
  "치과교정과",
  "예방치과",
  "신경과",
  "영상치의학과",
  "영상의학과",
  "산부인과",
  "구강병리과",
  "안과",
  "정신건강의학과",
  "성형외과",
  "통합치의학과",
  "진단검사의학과",
  "한방응급",
  "심장혈관흉부외과",
  "병리과",
  "응급의학과",
  "직업환경의학과",
  "방사선종양학과",
  "예방의학과",
  "핵의학과",
  "결핵과",
  "비뇨기과",
  "흉부외과",
  "한방안이비인후피부과",
];
function getDistance(lat1, lng1, lat2, lng2) {
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lng2 - lng1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}
function setHosOpen(item) {
  const date = new Date("June, 2 2023 15:00:00");
  const time = date.toTimeString();
  const hour = Number(time[0] + time[1] + time[3] + time[4]);
  switch (date.getDay()) {
    case 0:
      if (Number(item.chSunStart) < hour && hour < Number(item.chSunEnd)) {
        return item;
      } else {
        return;
      }
    case 1:
      if (Number(item.chMonStart) < hour && hour < Number(item.chMonEnd)) {
        return item;
      } else {
        return;
      }
    case 2:
      if (Number(item.chTueStart) < hour && hour < Number(item.chTueEnd)) {
        return item;
      } else {
        return;
      }
    case 3:
      if (Number(item.chWenStart) < hour && hour < Number(item.chWenEnd)) {
        return item;
      } else {
        return;
      }
    case 4:
      if (Number(item.chThuStart) < hour && hour < Number(item.chThuEnd)) {
        return item;
      } else {
        return;
      }
    case 5:
      if (Number(item.chFriStart) < hour && hour < Number(item.chFriEnd)) {
        return item;
      } else {
        return;
      }
    case 6:
      if (Number(item.chSatStart) < hour && hour < Number(item.chSatEnd)) {
        return item;
      } else {
        return;
      }
    default:
      return;
  }
}

function SortButton({ selected, children, onClick }) {
  return (
    <button
      disabled={selected}
      className={`SortButton ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SearchDoctor() {
  const location = useLocation();
  let id;
  if (!location.state) id = 0;
  else id = location.state;
  const [sort, setSort] = useState("direction");
  const [items, setItems] = useState([]);
  const [paramOptions, setParamOptions] = useState({
    sido: undefined,
    sggu: undefined,
    depart: department[id],
    page: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const currentloc = CurrentLocation();

  const recent_search = JSON.parse(localStorage.getItem("data"));
  console.log(JSON.parse(localStorage.getItem("data")));
  const sortedItems = () => {
    if (sort === "direction") {
      return items.sort(
        (a, b) =>
          getDistance(currentloc.latitude, currentloc.longitude, a.y, a.x) -
          getDistance(currentloc.latitude, currentloc.longitude, b.y, b.x)
      );
    } else {
      return items.sort((a, b) => b[sort] - a[sort]);
    }
  };
  const sortedItem = sortedItems();
  const handleBestClick = () => {
    setSort("rating");
  };

  const handleNearClick = () => {
    setSort("direction");
  };
  const handleLoad = async (options) => {
    setIsLoading(true);
    const items = await getHosInfo(options);

    const rmNullLocation = items.map((item) => {
      if (!item.x || (!item.chMonEnd && !item.chTueEnd && !item.chWedEnd)) {
        return;
      } else {
        return setHosOpen(item);
      }
    });

    let copy = rmNullLocation.filter((item) => item != null);
    setIsLoading(false);
    setItems(copy);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target["search"].value);
  };

  useEffect(() => {
    setParamOptions((pre) => ({
      ...pre,
      page: false,
    }));
  }, [paramOptions.page]);

  useEffect(() => {
    handleLoad({
      sido: `${paramOptions.sido}`,
      sggu: `${paramOptions.sggu}`,
      depart: `${paramOptions.depart}`,
      search: search,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramOptions.sido, paramOptions.sggu, paramOptions.depart, search]);

  return (
    <>
      <div className="main">
        <div className="p">병원찾기</div>
        <Searchdoc setData={setParamOptions} currentLocation={currentloc} />
      </div>
      <div className="content-top search-flex">
        <form className="search" onSubmit={handleSearchSubmit}>
          <input
            className="search-input"
            name="search"
            placeholder="병원 이름"
          />
          <button className="search-button" type="submit">
            <img src={"/img/ic-search.png"} alt="검색" />
          </button>
        </form>
        <div>
          <SortButton selected={sort === "direction"} onClick={handleNearClick}>
            거리순
          </SortButton>
          <SortButton selected={sort === "rating"} onClick={handleBestClick}>
            베스트순
          </SortButton>
        </div>
      </div>
      <div className="content hos_list_top">
        {!isLoading && (
          <>
            <HosList
              items={items}
              pageFlag={paramOptions.page}
              departOption={paramOptions.depart}
            />
          </>
        )}
      </div>
      {recent_search && !isLoading && (
        <>
          <div className="recent">
            <p className="recent-title">최근 본 병원</p>
            {recent_search
              ? recent_search.map((a, i) => (
                  <div className="recent-hos-div" key={a.hoscnt}>
                    ·
                    <Link
                      className="recent-hos"
                      to={"/infolist/info"}
                      state={recent_search[i]}
                    >
                      {recent_search[i].yadmNm}
                    </Link>
                  </div>
                ))
              : null}
          </div>
        </>
      )}
    </>
  );
}

export default SearchDoctor;
