import React from 'react';
import Image from 'next/image';
import jimg1 from '../../public/images/jimg1.png';
import jimg2 from '../../public/images/jimg2.png';
import jimg3 from '../../public/images/jimg3.png';
import jimg4 from '../../public/images/jimg4.png';
import jimg5 from '../../public/images/jimg5.svg';
import jimg6 from '../../public/images/jimg6.svg';

const ImageComponent = () => { 
  return (
    <div className="flex flex-col items-center justify-center  px-6">
      <div className="grid grid-cols-[auto_auto_auto] gap-4">
        
        {/* First Row */}
        <div className="relative w-[893px] h-[580px]">
          <Image src={jimg1} alt="Image 1" />
        </div>
        <div className="relative w-[438px] h-[582px]">
          <Image src={jimg2} alt="Image 2" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-[438px] h-[582px]">
          <Image src={jimg3} alt="Image 3" layout="fill" objectFit="cover" />
        </div>

        {/* Second Row - Opposite Layout */}
        <div className="relative w-[438px] h-[581px]">
          <Image src={jimg4} alt="Image 4" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-[438px] h-[581px]">
          <Image src={jimg5} alt="Image 5" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-[893px] h-[582px]">
          <Image src={jimg6} alt="Image 6" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
