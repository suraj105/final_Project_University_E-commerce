import { Carousel } from "react-responsive-carousel";
import banner from "../public/yoo1.png";
import banner2 from "../public/yoo2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

function Banner() {
  return (
    <div className=" relative">
      <Carousel
        autoPlay
        infiniteloop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <Image
            loading="lazy"
            src={banner}
            width={1400}
            height={400}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src={banner2}
            width={1400}
            height={400}
            objectFit="contain"
          />
        </div>
      </Carousel>

      <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-white w-full h-2/5"></div>
    </div>
  );
}

export default Banner;
