import React from "react";
import "./sociallinks.css"; // Import the CSS file

const SocialLinks = () => {
  return (
    <div id="contact" className="parent-container">
      <ul className="social-links-list">
        <li>
          <a href="https://twitter.com/sxnkr">Twitter</a>
        </li>
        <li>
          <a href="mailto:sxnkr@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://github.com/sxnkr">Github</a>
        </li>
        <li>
          <p>👋</p>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
