import React from "react";

const date = new Date();
const time = date.getHours();

function Footer() {
  return <p className="footer">copyright &copy; {time}</p>;
}

export default Footer;
