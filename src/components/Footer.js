import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="f-item-con">
          <div class="app-info">
            <span class="app-name">
              <span class="app-initial">R</span>eal Estate
            </span>
            <p>
              We provides you with <strong>Well designed</strong> and{" "}
              <strong>Amazing</strong> Buildings
            </p>
          </div>
          <div class="useful-links">
            <div class="footer-title">Useful Links</div>
            <ul>
              <li>Buy</li>
              <li>Sign In</li>
              <li>About Us</li>
              <li>Sale</li>
              <li>Rent</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div class="help-sec">
            <div class="footer-title">Help</div>
            <ul>
              <li>Help Me</li>
              <li>Feedback</li>
              <li>Report a Issue / Bug</li>
            </ul>
          </div>
          <div class="g-i-t">
            <div class="footer-title">Get in Touch</div>
            <form action="/" method="post" class="space-y-2">
              <input
                type="text"
                name="g-name"
                class="g-inp"
                id="g-name"
                placeholder="Name"
              />
              <input
                type="email"
                name="g-email"
                class="g-inp"
                id="g-email"
                placeholder="Email"
              />
              <textarea
                type="text"
                name="g-msg"
                class="g-inp h-40 resize-none"
                id="g-msg"
                placeholder="Message..."
              ></textarea>
              <button type="submit" class="f-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div class="cr-con">Copyright &copy; 2022 | Made by Anas J Mirza</div>
      </footer>
    </div>
  );
};

export default Footer;
