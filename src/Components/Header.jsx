// function Header() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Header


// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
// function Header() {
//   return (
//     <div className="mt-10 ml-96">
//     <ul className="my-4 mt-16 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           AI Services
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           Cultural Events
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           Cultural Details
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           About Us
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           Login or Sign Up
//         </a>
//       </Typography>
//     </ul>
//     </div>
//   );
// }
 
// export function NavbarSimple() {
//   const [openNav, setOpenNav] = React.useState(false);
 
//   const handleWindowResize = () =>
//     window.innerWidth >= 960 && setOpenNav(false);
 
//   React.useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);
 
//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);
 
//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <Header />
//         </div>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <Header />
//       </Collapse>
//     </Navbar>
//   );
// }

// export default Header


// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// function Header() {
//   return (
//     <div className="absolute top-0 left-96 mt-4 ml-4">
//       <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
//         {["AI Services", "Cultural Events", "Cultural Details", "About Us", "Login or Sign Up"].map((item) => (
//           <Typography
//             as="li"
//             variant="small"
//             color="blue-gray"
//             className="p-1 font-medium"
//             key={item}
//           >
//             <a
//               href="#"
//               className="flex items-center hover:text-blue-500 transition-colors"
//             >
//               {item}
//             </a>
//           </Typography>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export function NavbarSimple() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     const handleWindowResize = () => {
//       if (window.innerWidth >= 960) {
//         setOpenNav(false);
//       }
//     };

//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);

//   return (
//     <Navbar className="relative mx-auto max-w-screen-xl px-6 py-3">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <Header />
//         </div>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <Header />
//       </Collapse>
//     </Navbar>
//   );
// }

// export default Header;

import { useState } from 'react';
import { Link } from 'react-router-dom';
// import AIService from './Pages/AIService';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if(isMenuOpen){
    window.scrollTo({top: window.scrollY + 70, behavior: 'smooth'});
  }else{
    window.scrollTo({top:0, behavior:'smooth'});
  }

  return (
    <nav className="h-16">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to ='/' className="flex items-center">
          <img src="/src/assets/logo 1.png" alt="Cross Cult Logo" className="h-20 ml-10 mt-6" />
        </Link>

        <div className="hidden md:flex space-x-14 mr-24 font-semibold text-lg">
          {/* <a href="" className="hover:text-gray-400">AI Services</a>
          <a href="#" className="hover:text-gray-400">Cultural Events</a>
          <a href="#" className="hover:text-gray-400">Cultural Details</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Login Or Signup</a> */}

          <Link to ="/aiservice" className="hover:text-gray-400">Translator</Link>
          <Link to = "./Pages/" className='hover:text-gray-400'>Cultural Events</Link>
          <Link to = './Pages' className='hover:text-gray-400'>Cultural Details</Link>
          <Link to ='./Pages' className='hover:text-gray-400'>About Us</Link>
          <Link to ='/login' className='hover:text-gray-400'>Login or SignUp</Link>
        </div>

        <button className="block md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="bg-gray-800 text-white">
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">All Services</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Cultural Events</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Cultural Details</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">About Us</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-700">Login Or Signup</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;