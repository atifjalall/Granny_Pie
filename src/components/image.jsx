export const Image = ({ title, largeImage, smallImage, price }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text"></div>
          <img src={smallImage} className="img-responsive" alt={title} />
          <h4>{title}</h4>
          <p>{price}</p>
        </a>
      </div>
    </div>
  );
};
