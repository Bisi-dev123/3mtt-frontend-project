import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  return (
    <div className="repository-cards-wrapper">
      <div className="left-card-wrapper">
        {/* =====Repository Image===== */}
        <div className="blog-image-wrapper">
          <img
            className="profile-image"
            src="./src/assets/image1.svg"
            alt="Fashion Image"
            width={60}
            height={60}
          />
        </div>

        {/* =======Card Title====== */}
        {/* <div className="title-wrapper">
        <h3>{item?.title}</h3>
      </div> */}

        {/* =========Card Description======== */}
        <div className="description-wrapper">
          <p>Bisi-dev123/Portfolio-web</p>
        </div>
      </div>

      {/* ========Card Button======= */}
      <div>
        <Link to="/full-card">
          <button className="card-button">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
