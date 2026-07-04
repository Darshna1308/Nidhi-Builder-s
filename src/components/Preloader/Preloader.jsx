import "./Preloader.css";
import logo from "../../assets/logo/logo.png";

function Preloader() {
  return (
    <div className="preloader">

      <div className="loaderContent">

        <div className="loaderLogo">
          <img src={logo} alt="Nidhi Builders" />
        </div>

        <h2>NIDHI BUILDERS</h2>

        <p>Building Tomorrow's Landmarks</p>

        <div className="loadingBar">

          <div className="loadingFill"></div>

        </div>

      </div>

    </div>
  );
}

export default Preloader;