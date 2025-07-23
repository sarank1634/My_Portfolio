import React from "react";
import logo from "../assets/rk.png";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
const Navbar = () => {
    return (
       <nav className="flex w-full item -center justify-between  py-6">
          <div className="flex flex-shrink-0 item-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
            </a>
          <div className="m-8 item-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>

            <a href="https://www.instagram.com/in/your-instagram-profile" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn"><FaInstagram /></a>
            <a href="https://www.twitter.com/in/your-twitter-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.github.com/in/your-github-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>

          </div>
          </div>
       </nav>
    )
}

export default Navbar;