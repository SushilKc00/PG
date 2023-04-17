import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (<>
    <footer className="text-center text-white" style={{"background-color": "#f1f1f1"}}>
      

      <div
        className="text-center text-dark p-3"
        style={{"background-color": "rgba(0, 0, 0, 0.2)"}}
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          GoFood.com
        </a>
      </div>
    </footer>
    </>
  );
};

export default Footer;
