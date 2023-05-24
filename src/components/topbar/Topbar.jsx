import { useState } from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const [email, setEmail] = useState('iamspangeni@gmail.com')
  const [phone, setPhone] = useState('+977 9864404745')
  const [logo, setLogo] = useState('Sandeep...')

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {logo}
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>{phone}</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>{email}</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
