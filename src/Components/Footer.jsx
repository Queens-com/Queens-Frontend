import React from "react";
import styles from "../Styles/style.js";
import {
  Q_svg,
  facebook_img,
  insta_img,
  x_img,
} from "../Assets/index.js";

function Footer() {
  return (
    <footer className="bg-white py-8 px-4 md:px-20 md:w-sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[77%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className={`font-bold mb-4 ${styles.footerh4}`}>Company</h4>
            <ul className="space-y-2">
              {["About us", "Testimonials", "Career", "Terms & Conditions", "Best Sellers", "New Arrivals"].map((item) => (
                <li key={item}><a href="#" className="hover:text-gray-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-4 ${styles.footerh4}`}>Products</h4>
            <ul className="space-y-2">
              {["Necklaces", "Bracelets", "Earrings", "Others"].map((item) => (
                <li key={item}><a href="#" className="hover:text-gray-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <h4 className={`font-bold mb-4 ${styles.footerh4}`}>Help</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2">
                {["Shopping and returns", "Size guides", "Material and care", "How to pay"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-gray-600 transition-colors">{item}</a></li>
                ))}
              </ul>
              <ul className="space-y-2">
                {["Customer Care", "Return policy", "FAQ"].map((item) => (
                  <li key={item}><a href="#" className="hover:text-gray-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[1px] bg-placeholder_text mt-10" />

        <div className="mt-1 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <img className="w-12 h-12" src={Q_svg} alt="logo" />
            <span className="text-gray-500 text-sm">{`© ${new Date().getFullYear()} Queens. All rights reserved`}</span>
            <div className="flex items-center space-x-4">
              {[
                { src: insta_img, alt: "Instagram", href: "https://www.instagram.com" },
                { src: x_img, alt: "X", href: "https://www.twitter.com" },
                { src: facebook_img, alt: "Facebook", href: "https://www.facebook.com" },
              ].map((social) => (
                <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <img className="w-8 h-8" src={social.src} alt={`${social.alt} logo`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;