// import React from 'react'

// const Nav = () => {
//   return (
//     <div className='flex justify-between p-8 items-center w-full h-[3rem] bg-yellow-300 text-blue-950'>
// <div className="logo text-[2rem] font-bold ">LOGO</div>

// <ul className="flex gap-5">
// <a href=""><li>Home</li></a>
// <a href=""><li>Conatct-us</li></a>
// <a href=""><li>About</li></a>


// </ul>


//     </div>
//   )
// }

// export default Nav


import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons from react-icons

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between p-4 md:p-8 items-center w-full h-[3rem] bg-yellow-300 text-blue-950'>
      <div className="logo text-[2rem] font-bold mb-4 md:mb-0">LOGO</div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-blue-950 focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Use the icons */}
        </button>
      </div>

      <ul className={`flex flex-col md:flex-row gap-5 md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href=""><li>Home</li></a>
        <a href=""><li>Contact Us</li></a>
        <a href=""><li>About</li></a>
      </ul>
    </div>
  );
}

export default Nav;


