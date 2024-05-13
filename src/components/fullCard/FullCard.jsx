import NavBar from "../navBar/NavBar";
import "./FullCard.css";

const FullCard = () => {
  return (
    <div>
      <NavBar />
      <div className="fullblog-card-wrapper">
        {/* =====Blog Image===== */}
        <div className="blog-image-wrapper">
          <img
            className="blog-image"
            src="./src/assets/image1.svg"
            alt="Olabisi Ajayi"
            width={40}
            height={40}
          />
        </div>



        {/* =========Card Description======== */}
        <div className="description-wrapper">
          <div>
            <h3>Name :</h3>
            <p>Olabisi Ajayi</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FullCard;
