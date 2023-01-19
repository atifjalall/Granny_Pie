import "./home.css";
export const Home = (props) => {
  return (
    <div id="home">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <center>
            <h2>HOME</h2>
          </center>

          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <div className="Home-text">
                <br />

                <p>
                  Make yourself at home by ordering nice creamy hot fruit pies
                  as your sweet dish after meal. You can learn more about the
                  flavor of authentic fruit pies by ordering them from Granny’s
                  Pie online. You can choose from a wide variety of
                  mouthwatering varieties, some of which are handcrafted in our
                  very own pie bakery.
                </p>
                <br />
                <p>
                  You'll discover that when you buy pies online from Granny’s
                  Pie, you're getting only the best pies for sale, made by
                  professionals using premium ingredients, including real, fresh
                  fruit and many items sourced from small, local farms, and come
                  topped by a flaky and delectable hand-crimped crust. Whether
                  you're looking for an apple pie delivery to finish your family
                  meal or Thanksgiving pies to serve at your next holiday
                  gathering. Our pies are genuine treats from an artisan bakery
                  that don't compromise on flavor or quality.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <br />
              <div className="home">
                <div className="home-image">
                  <img src="img/home.jpg" className="img-home" alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
