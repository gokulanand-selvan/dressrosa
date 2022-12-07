import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer  >
      <div className="common-subscribe">
        <div className="row containerFluid">
          <div className="col-md-12 col-xs-12">
            <div className="block-column">
              <div className="subscribe-message">
                <p className="large title">Never miss a thing.</p>
              </div>
              <div className="subscribe-form">
                <form id="subscribeForm" className="subscribe-content-wrapper">
                  <p className="footnote alert subscribe-error">
                    Something went wrong
                  </p>

                  <fieldset className="block-field">
                    <input
                    style={{border:"solid 1px black"}}
                      className="emailInput"
                      type="email"
                      placeholder="Your email"
                      autoComplete="email"
                      required=""
                    />
                  </fieldset>
                  <fieldset>
                    <input
                    style={{border:"solid 1px black"}}
                      className="submit-button disabled"
                      type="submit"
                      value="Subscribe"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-menu">
        <div className="row containerFluid">
          <div className="col-md-12 col-xs-12">
            <div className="block-column">
              <nav className="links">
                <a href="/reviews" className="link footnote">
                  Reviews
                </a>
                <a href="/care" className="link footnote">
                  Care
                </a>
                <a href="/returns" className="link footnote">
                  Returns
                </a>
                <a href="/terms" className="link footnote">
                  Terms
                </a>
                <a href="mailto:help@marchtee.com" className="link footnote">
                  Support
                </a>
                <a
                  href="https://www.instagram.com/marchtee/"
                  className="instagram link footnote"
                >
                  Instagram
                </a>
              </nav>
              <nav className="store-picker-wrapper">
                <p className="large title">Hello, new world</p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}