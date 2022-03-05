import React from "react";
import "./Footer.css";

const SwagLabsFooter = () => {
  return (
    <footer className="footer">
      <ul className="social">
        <li className="social_twitter">
          <a
            href="https://twitter.com/mindfuldevtest"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className="social_linkedin">
          <a
            href="https://www.linkedin.com/pjcalvov/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <div className="footer_copy">
        &copy; {new Date().getFullYear()} coffeestain.io. <br/><br/>Web App forked from SauceLabs: <a
            href="https://github.com/saucelabs/sample-app-web"
            target="_blank"
            rel="noreferrer">
              https://github.com/saucelabs/sample-app-web
          </a>
      </div>
    </footer>
  );
};

export default SwagLabsFooter;
