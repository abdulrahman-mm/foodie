import React from "react";
import "./Hero.css";
import iphone from "../assets/iphone.png";
import logo from "../assets/logo.png";
import herovideo from "../assets/herovideo.mp4";

function Hero() {
  return (
    <main className="relative w-full h-screen">
      <div className="map-image"></div>
      <div className="red_color"></div>

      <div className="hero  flex flex-col lg:flex-row px-6 lg:px-20 gap-10 lg:gap-40 justify-center items-center">
        <div className="iphone-div relative w-64 md:w-80 md:h-128 lg:w-80 pt-10 lg:pt-0">
          <video
            className="iphone-video absolute w-full h-full lg object-cover"
            autoPlay
            muted
            loop
          >
            <source src={herovideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={iphone}
            alt="iPhone"
            className="iphone-image absolute w-full h-full "
          />
        </div>

        <div className="text-white lg:w-96 text-center mt-10 lg:mt-0">
          <img
            className="h-8 w-20 mx-auto lg:mx-0 md-start"
            src={logo}
            alt="Logo"
          />
          <h1 className="text-2xl lg:text-3xl font-bold mt-4 md:content-start">
            Welcome to Foodie
          </h1>
          <p className="mt-4 md:content-start">
            At foodie, we redefine convenience with our seamless food delivery
            service. Whether you're craving the flavors of home or exploring new
            culinary delights, foodie brings it all to your doorstep. From
            hearty breakfasts to gourmet dinners and everything in between, our
            curated menu caters to every palate and preference.
          </p>
          <button className="text-black bg-white px-6 py-2 rounded-3xl mt-8 font-bold mb-24">
            Join the Waitlist
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
