import "./about.css";
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <br />
          <br />
          <br />
          <div className="col-xs-12 col-md-6">
            {" "}
            <div className="about__me">
              <div className="about__me-image">
                <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <br />
              <br />
              <br />
              <h2>About Us</h2>

              <h4>{props.data ? props.data.Heading : "loading..."}</h4>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
