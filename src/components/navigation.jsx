export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/logonav.png" alt="logo" id="logo" />
          </a>{" "}
          <a className="navbar-brand page-scroll" id="logotxt" href="#page-top">
            Granny’s Pie
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Menu
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
