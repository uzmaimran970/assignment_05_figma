import React from 'react';
import Image from 'next/image';
import fash1 from '../../public/images/fash2.svg';

const Heropage = () => {
  return (
    <div className="flex flex-col md:flex-row h-[80%] md:h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:ml-[176px]">
        <h1 className="font-[Libre Bodoni] text-[32px] md:text-[40px] font-bold mt-[80px] md:mt-[150px] leading-tight">
          IMPECCABLE<br /> CRAFTSMANSHIP AND <br />FINESSE
        </h1>
        <p className="w-full md:w-[902px] text-[18px] md:text-[30px] pt-[10px] md:pt-[15px] text-[#787054]">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <button className="bg-[#A29875] w-[200px] md:w-[288px] h-[48px] md:h-[58px] rounded-[10px] text-[20px] md:text-[30px] text-white font-[Libre Bodoni] mt-[20px]">
          Explore Now
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-[50px] md:mt-[125px]">
        <Image
          src={fash1}
          alt="hero image"
          width={300}
          height={400}
          className="w-[80%] md:w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Heropage;
