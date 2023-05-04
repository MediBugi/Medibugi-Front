import { useNavigate } from 'react-router-dom';
import "./Main.css";

function Clinics() {
    const navigate = useNavigate();

    const handleClick = e => {
      const msg = e.target.getAttribute('id');
      navigate('/list', {
        state: {
          id: msg
        }
      });  
    }

    return(
        <section class="py-5">
            <h2 class="section-title">병과 목록</h2>
            <div class="artists">
              <button class="artist" id="8" onClick={handleClick}>
                <img class="artist-profile" id="8" src="img/neuro.png"></img>
                <div class="artist-name" id="8" >신경외과</div>
              </button>
              <button class="artist" id="12" onClick={handleClick}>
                <img class="artist-profile" id="12" src="img/ortho.png"></img>
                <div class="artist-name" id="12">정형외과</div>
              </button>
              <button class="artist" id="13" onClick={handleClick}>
                <img class="artist-profile" id="13" src="img/dentist.png"></img>
                <div class="artist-name" id="13">치과</div>
              </button>
              <button class="artist" id="9" onClick={handleClick}>
                <img class="artist-profile" id="9" src="img/ophth.png"></img>
                <div class="artist-name" id="9">안과</div>
              </button>
              <button class="artist" id="10" onClick={handleClick}>
                <img class="artist-profile" id="10" src="img/ENT.png"></img>
                <div class="artist-name" id="10">이비인후과</div>
              </button>
              <button class="artist" id="5" onClick={handleClick}>
                <img class="artist-profile" id="5" src="img/obest.png"></img>
                <div class="artist-name" id="5">산부인과</div>
              </button>
              <button class="artist" id="11" onClick={handleClick}>
                <img class="artist-profile" id="11" src="img/psych.png"></img>
                <div class="artist-name" id="11">정신과</div>
              </button>
            </div>
        </section>
    );
}

export default Clinics;