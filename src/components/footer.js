import React from "react";

function Footer() {
  return (
    <footer>
      <div class="row">
        {/* <!-- Contact Us Column --> */}
        <div class="col-md-4">
          <h5>Contact Us</h5>

          <i class="fi-xnsuxl-house-solid"></i>
          <p>Address: Allentown,PA, 12332</p>

          <br />

          <i class="fi-xnsuxl-close-envelope-solid"></i>
          <p>Email: HudsonSchool@gmail.com</p>

          <br />

          <i class="fi-xnsrxl-phone-solid"></i>
          <p>Phone Number: (765) 947-8098</p>
        </div>

        {/* <!-- About Column --> */}
        <div class="col-md-4">
          <h5>About</h5>

          <i class="fi-cnsuxl-exclamation-mark-rounded"></i>
          <p>About Us</p>

          <br />

          <i class="fi-xnsuxl-user-lock-solid"></i>
          <p>Privacy</p>

          <br />

          <i class="fi-cwsuxl-check"></i>
          <p>Terms and Conditions</p>
        </div>

        {/* <!-- Social Media Column --> */}
        <div class="col-md-4">
          <h5>Social Media</h5>

          <a href="https://twitter.com/">
            <i class="fi-xnsuxl-twitter"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i class="fi-snsuxl-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i class="fi-snsuxl-linkedin"></i>
          </a>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Your email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />

            <div class="input-group-append">
              <form>
                <button type="submit" id="Submit1" class="btn btn-light">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
