import { Button, Input } from "@chakra-ui/react";
import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="common-subscribe">
        <div style={{ height: "5em" }} className="row containerFluid">
          <div className="col-md-12 col-xs-12">
            <div className="block-column">
              <div className="subscribe-message">
                <p
                  style={{ fontFamily: "Montserrat,sans", fontSize: "26.99px" }}
                  className="large title"
                >
                  Never miss a thing.
                </p>
              </div>
              <div className="subscribe-form">
                <form id="subscribeForm" className="subscribe-content-wrapper">
                  <p className="footnote alert subscribe-error">
                    Something went wrong
                  </p>

                  <fieldset className="block-field">
                    <Input
                      style={{ border: "solid 1px black" }}
                      className="emailInput"
                      type="email"
                      placeholder="Your email"
                      autoComplete="email"
                      required=""
                    />
                  </fieldset>
                  <fieldset>
                    <Button
                      // style={{border:"solid 1px black"}}
                      className="submit-button disabled"
                      color={"gray"}
                      type="submit"
                    >
                      Subscribe
                    </Button>
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
                <a
                  style={{ fontSize: "15px" }}
                  href="/reviews"
                  className="link footnote"
                >
                  Reviews
                </a>
                <a
                  style={{ fontSize: "15px" }}
                  href="/care"
                  className="link footnote"
                >
                  Care
                </a>
                <a
                  style={{ fontSize: "15px" }}
                  href="/returns"
                  className="link footnote"
                >
                  Returns
                </a>
                <a
                  style={{ fontSize: "15px" }}
                  href="/terms"
                  className="link footnote"
                >
                  Terms
                </a>
                <a
                  style={{ fontSize: "15px" }}
                  href="mailto:help@marchtee.com"
                  className="link footnote"
                >
                  Support
                </a>
                <a
                  href="https://www.instagram.com/marchtee/"
                  className="instagram link footnote"
                  style={{ color: "red", fontSize: "15px" }}
                >
                  Instagram
                </a>
              </nav>
              <nav className="store-picker-wrapper">
                <p className="large title">
                  <b>Hello, new world...</b>
                </p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
