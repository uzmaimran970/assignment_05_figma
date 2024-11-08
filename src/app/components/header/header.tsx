import Image from 'next/image';
import logo from '../../public/images/logofash.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <div className="bg-[#A29875] h-[100px] md:h-[134px] w-full flex items-center justify-between px-4 md:px-10">
        
        {/* Logo */}
        <div className="w-32 md:w-auto">
          <Image 
            src={logo}
            alt="logo"
            width={242.56}
            height={87.45}
            className="w-full h-auto"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
            <input
              type="text"
              placeholder="Search for Gold Jewelry, Diamond Jewelry, and more..."
              className="w-full h-10 md:h-[56.24px] rounded-lg px-4 pr-12 focus:outline-none text-sm md:text-base"
            />
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" 
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-[38.7px] text-white">
          <FontAwesomeIcon icon={faHeart} className="w-5 md:w-6 h-5 md:h-6" /> 
          <FontAwesomeIcon icon={faUser} className="w-5 md:w-6 h-5 md:h-6" />  
          <FontAwesomeIcon icon={faShoppingCart} className="w-5 md:w-6 h-5 md:h-6" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden flex justify-center mt-4 px-4">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 rounded-lg px-4 pr-10 focus:outline-none text-sm"
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" 
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

