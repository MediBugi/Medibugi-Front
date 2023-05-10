import "./Content.css";
import Selectclinic from "../Search/Selectclinic";
import CurrentLocation from "../Info/CurrentLocation";

function Searchdoc(props) {
  function getDataFromChild(data) {
    props.setData(data);
  }

  const location = CurrentLocation();

  return (
    <>
      <div className="content">
        <img
          className="place_img"
          src="img/placeholder.png"
          alt="placeholder"
        />
        <div className="addr">{location.address}</div>
        <div>
          <Selectclinic getDataFromChild={getDataFromChild} />
        </div>
      </div>
    </>
  );
}

export default Searchdoc;
