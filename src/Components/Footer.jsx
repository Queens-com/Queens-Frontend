import React from "react";
import styles from "../Styles/style.js";

function Footer() {
  return (
    <footer className="Footer">
      <div className="relative h-[450px] w-[100vw] bg-pink-500 flex flex-col space-x-4 flex-1 items-center">
        <div
          className="absolute flex bg-slate-500 bottom-0 w-100"
          style={{ width: "77%", height: "50%" }}
        >
          <div>
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

          <hr className="w-100 color-black" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
