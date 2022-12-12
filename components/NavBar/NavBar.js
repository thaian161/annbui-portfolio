import { useState } from 'react';
import Image from 'next/legacy/image';
import Logo from '../../public/logo3.png';

import ResumeButton from './ResumeButton';
import { FaTimes } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { RiSunFill } from 'react-icons/ri';

const NavBar = (props) => {
  let [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <Image
            className="text-xl"
            src={Logo}
            width={90}
            height={90}
            alt="Developing Serive An Bui Provides"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <TiThMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            {!darkMode && (
              <h1
                className="flex text-[#516f96]  hover:text-[#35557e] hover:scale-110 font-[800] font-Nunito cursor-pointer"
                onClick={() => props.onSetDarkMode}
              >
                Dark
                <BsFillMoonStarsFill
                  onClick={() => props.onSetDarkMode}
                  className="cursor-pointer text-2xl"
                />
              </h1>
            )}
            {darkMode && (
              <h1
                className="flex text-yellow-200 font-[800] hover:text-yellow-300 hover:scale-110 font-Nunito cursor-pointer"
                onClick={() => props.onSetDarkMode}
              >
                Light
                <RiSunFill
                  onClick={() => props.onSetDarkMode}
                  className="cursor-pointer text-2xl"
                />
              </h1>
            )}
          </li>

          <ResumeButton>See Resume</ResumeButton>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
