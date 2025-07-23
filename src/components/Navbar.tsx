// import logo from "../assets/rk.png";
// import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

// const Navbar = () => {
//     return (
//        <nav className="flex w-full items-center justify-between py-6 px-4 bg-gray-800 text-white shadow-md">
//           <div className="flex items-center flex-shrink-0">
//             <a href="/" aria-label="Home">
//             <img src={logo} className="mx-2 " width={50} height={33} alt="logo" />
//             </a>
//             </div>
//           <div className="flex items-center gap-6 text-2xl text-white mr-4 sm:mr-8">
//             <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
//             <a href="https://www.instagram.com/in/your-instagram-profile" target="_blank" rel="noopener noreferrer"
//             aria-label="LinkedIn"><FaInstagram /></a>
//             <a href="https://www.twitter.com/in/your-twitter-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
//             <a href="https://www.github.com/in/your-github-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
//           </div>    
//        </nav>
//     )
// }

// export default Navbar;


import logo from "../assets/rk.png";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between py-6 px-4 bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="h-10 w-auto mx-2 object-contain"
            alt="logo"
          />
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 text-2xl mr-4 sm:mr-8">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
