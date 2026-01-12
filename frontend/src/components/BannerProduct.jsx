import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';
import image1 from '../assets/banner/phone.jpg';
import image2 from '../assets/banner/phonea.jpg';
import image3 from '../assets/banner/i1.jpg';
import image4 from '../assets/banner/phoneb.jpg';
import image5 from '../assets/banner/i2.jpg';
import image6 from '../assets/banner/i3.jpg';


import wifbannerbig from '../assets/banner/wifbannerbig.jpg';
import launch1 from '../assets/banner/launchBig1.jpg';
import launch2 from '../assets/banner/launchbig2.jpg';
import launch3 from '../assets/banner/launchbig3.jpg';
import uv from '../assets/banner/uvd.jpg';
import congd from '../assets/banner/congd.jpg';





import wifbannersmall from '../assets/banner/wifbannersmall.jpg';
import launchsmall from '../assets/banner/launch1.jpg';
import launchsmall2 from '../assets/banner/lauch2.jpg';
import launchsmall3 from '../assets/banner/launch3.jpg';
import hoogemob from '../assets/banner/hoogemob.jpg';
import uvm from '../assets/banner/uvm.jpg';
import congm from '../assets/banner/congm.jpg';





import image1Mobile from '../assets/banner/callforvendor.jpg';
import image2Mobile from '../assets/banner/p1.jpg';
import image3Mobile from '../assets/banner/p2.jpg';
import image4Mobile from '../assets/banner/p3.jpg';
import image5Mobile from '../assets/banner/im1.jpg';
import image6Mobile from '../assets/banner/im2.jpg';
import image7Mobile from '../assets/banner/im3.jpg';







const BannerProduct = () => {
  const [currrentImage, setCurrentImage] = useState(0);

  const desktopImages = [wifbannerbig,image3,];

  const mobileImages = [wifbannersmall,image6Mobile];

  const nextImage = () => {
    if (desktopImages.length - 1 > currrentImage) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const previousImage = () => {
    if (currrentImage !== 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currrentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currrentImage]);

  return (
    <div className="px-1 lg:mt-[95px] mt-[93px] rounded-md">
      <div className="h-[160px] sm:h-56 md:h-72 w-full bg-slate-200 rounded-2xl relative">
        <div className="absolute z-10 w-full h-full md:flex  items-center hidden">
          <div className="flex justify-between w-full text-2xl ">
            <button onClick={previousImage} className="bg-white shadow-md rounded-md">
              <FaAngleLeft />
            </button>
            <button onClick={nextImage} className="bg-white shadow-md rounded-md">
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/* Desktop and Tablet Version */}
        <div className="hidden md:flex h-full w-full p-1 overflow-hidden rounded-lg">
          {desktopImages.map((imageURL, index) => {
            return (
              <div
                className="h-full w-full min-w-full min-h-full transition-all"
                key={imageURL}
                style={{ transform: `translateX(-${currrentImage * 100}%)` }}
              >
                <img src={imageURL} className="w-full h-full" />
              </div>
            );
          })}
        </div>

        {/* Mobile Version */}
        <div className="flex h-[170px] rounded-2xl w-full p-1 overflow-hidden md:hidden">
          {mobileImages.map((imageURL, index) => {
            return (
              <div
                className="h-[165px] w-full min-w-full rounded-2xl min-h-[100px] transition-all"
                key={imageURL}
                style={{ transform: `translateX(-${currrentImage * 100}%)` }}
              >
                <img src={imageURL} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
