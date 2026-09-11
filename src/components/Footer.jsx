import React from "react";
import { Link } from "react-router";
import logo4Dark from "@/imgs/logo4Dark.png"; 
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-(--footer-color) text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-gray-800">

          {/* العمود الأول*/}
          <div className="flex flex-col gap-4">
            <Link to="/">
              <img src={logo4Dark} alt="Logo" className="h-auto w-50" />
            </Link>
            <p className="text-sm text-(--p-color) leading-relaxed">
                Your premier online shopping destination, offering the best prices and highest quality. 
                We guarantee a secure and fast shopping experience that meets all your needs.</p>
            {/* أيقونات السوشيال ميديا */}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="#facebook" 
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-(--main-color) hover:text-white transition-all text-gray-300"
                title="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a 
                href="#twitter" 
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-(--main-color) hover:text-white transition-all text-gray-300"
                title="Twitter"
              >
                <FaTwitter size={14} />
              </a>
              <a 
                href="#instagram" 
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-(--main-color) hover:text-white transition-all text-gray-300"
                title="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a 
                href="#linkedin" 
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-(--main-color) hover:text-white transition-all text-gray-300"
                title="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* العمود الثاني */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg relative pb-2 after:rounded-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-(--main-color)">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-(--p-color)">
              <li>
                <Link to="/" className="hover:text-(--main-color) transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-(--main-color) transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/accessories" className="hover:text-(--main-color) transition-colors">Accessories</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-(--main-color) transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث*/}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg relative pb-2 after:rounded-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-(--main-color)">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-(--p-color)">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-(--main-color) mt-1 shrink-0" />
                <span>123 Tayaran, Nasr City, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-(--main-color) shrink-0" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-(--main-color) shrink-0" />
                <span>support@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر في الأسفل */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-(--p-color)">
          <p>© 2026 S & M. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-(--main-color) transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-(--main-color) transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;