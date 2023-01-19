import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const initialState = {
  name: "",
  email: "",
  ph: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, ph, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, ph, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="mainform">
                <div className="mainframe2">
                  <div class="input-group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Name</label>
                  </div>
                  <div class="input-group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                  </div>
                  <div class="input-group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Address</label>
                  </div>
                  <div class="input-group">
                    <input type="number" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Phone</label>
                  </div>
                </div>
                <div class="input-group">
                  <textarea id="textarea" placeholder="Comments"></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 col-md-offset-1 contact-info">
            <div id="contact-img">
              <div className="contain">
                <div className="row">
                  <br />
                  <br />
                  <br />
                  <div className="col-xs-12 col-md-10"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
