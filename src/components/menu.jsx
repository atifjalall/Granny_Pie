import { Image } from "./image";

export const Menu = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Menu</h2>
          <p>A taste of home in every slice</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      price={d.price}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
