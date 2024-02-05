import React from "react";
import Caraou from "../component/home/Caraou";
import Carousel from "../component/home/Carousel";

function Home() {
  let slides = [
    "/images/warq.png",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <div>
      <div className="h-screen max-w-screen overflow-hidden">
        {/* <Carousel slides={slides} /> */}
      </div>
    </div>
  );
}

export default Home;
