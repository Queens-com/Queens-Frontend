import React from "react";
import styles from "../Styles/style.js";
import {
  Q_svg,
  facebook_img,
  hero1,
  insta_img,
  x_img,
} from "../Assets/index.js";

function Footer() {
  return (
    <footer className="Footer">
      <div className="relative h-[450px] w-[100vw] g-pink-500 flex flex-col items-center">
        <div
          className="absolute flex flex-col g-slate-500 bottom-0 w-100"
          style={{ width: "77%" }}
        >
          <div className="flex text-active_text w-[100%] text">
            <div className="roboto text-[16px] bg-rked-500 basis-1/4">
              <h4 className={`font-bold m-0 ${styles.footerh4}`}>Company</h4>
              <div className="leading-7 ">
                <a href="">
                  <p>About us</p>
                </a>
                <a href="">
                  <p>Testimonials</p>
                </a>
                <a href="">
                  <p>Career</p>
                </a>
                <a href="">
                  <p>Terms & Conditions</p>
                </a>
                <a href="">
                  <p>Best Sellers</p>
                </a>
                <a href="">
                  <p>New Arrivals</p>
                </a>
              </div>
            </div>
            <div className="roboto text-[16px] bg-rked-500 basis-1/4">
              <h4 className={`font-bold m-0 ${styles.footerh4}`}>Products</h4>
              <div className="leading-7 ">
                <a href="">
                  <p>Necklaces</p>
                </a>
                <a href="">
                  <p>Braclets</p>
                </a>
                <a href="">
                  <p>Earings</p>
                </a>
                <a href="">
                  <p>Others</p>
                </a>
              </div>
            </div>
            <div className="roboto text-[16px] bg-rked-500 basis-1/2">
              <h4 className={`font-bold m-0 ${styles.footerh4}`}>Help</h4>
              <div className="leading-7 flex ">
                <div className="basis-1/2">
                  <a href="">
                    <p>Shooping and returns </p>
                  </a>
                  <a href="">
                    <p>Size guides</p>
                  </a>
                  <a href="">
                    <p>Material and care</p>
                  </a>
                </div>
                <div className="basis-1/2">
                  <a href="">
                    <p>How to pay</p>
                  </a>
                  <a href="">
                    <p>Customer Care </p>
                  </a>
                  <a href="">
                    <p>Return policy</p>
                  </a>
                  <a href="">
                    <p>FAQ</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[1px] bg-placeholder_text mt-12 mb-2" />

          {/* prettier-ignore */}
          <div className="flex justify-between g-yellow-200 p-4">
            <img className="w-12 h-12" src={Q_svg} alt="logo" />
            <span className="self-center text-placeholder_text flex">{`@${new Date().getFullYear()} Queens. All rights reserved`}</span>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src={insta_img} alt="Instagram logo" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src={x_img} alt="X logo" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src={facebook_img} alt="Facebook logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
