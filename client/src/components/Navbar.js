// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   const [nav, setNav] = useState(false);

//   return (
//     <header className="bg-purple-300 p-5 mb-4 rounded-2xl sticky top-0">
//       <div className="flex">
//         <Link to="/">
//           <h1 className="my-auto font-bold text-[22px] lg:text-3xl uppercase pr-2 mr-2 border-r-2 border-purple-500 lg:pr-5 lg:mr-5">
//             Navbar
//           </h1>
//         </Link>
//         <span className="my-auto mr-2 lg:hidden" onClick={() => setNav(!nav)}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="2"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
//             />
//           </svg>
//         </span>
//         <div className="my-auto">
//           <ul className="hidden lg:flex uppercase font-bold">
//             <NavLink
//               to="/"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
//                 Home
//               </li>
//             </NavLink>
//             <NavLink
//               to="/about"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
//                 About
//               </li>
//             </NavLink>
//             <NavLink
//               to="/portfolio"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
//                 Portfolio
//               </li>
//             </NavLink>
//             <NavLink
//               to="/feedback"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mr-10 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
//                 Feedback
//               </li>
//             </NavLink>
//             <NavLink
//               to="/contact"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mr-5 p-1 border-2 border-transparent hover:text-black hover:border-purple-500 hover:bg-white rounded">
//                 Contact
//               </li>
//             </NavLink>
//           </ul>
//         </div>
//         <Link
//           to="https://github.com/PugazhendhiDev/"
//           className="my-auto ml-auto flex text-white font-bold bg-red-400 p-1 rounded lg:rounded-xl lg:px-5 lg:py-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="2"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
//             />
//           </svg>
//           <h1 className="hidden uppercase ml-2 lg:block">Hire</h1>
//         </Link>
//       </div>
//       {nav && (
//         <div
//           id="menu"
//           className="mt-5 p-5 bg-white border-2 border-purple-500 rounded-2xl"
//           onClick={() => setNav(!nav)}
//         >
//           <ul className="font-bold ">
//             <NavLink
//               to="/"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mb-2 hover:text-purple-500">Home</li>
//             </NavLink>
//             <NavLink
//               to="/about"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mb-2 hover:text-purple-500">About</li>
//             </NavLink>
//             <NavLink
//               to="/portfolio"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mb-2 hover:text-purple-500">Portfolio</li>
//             </NavLink>
//             <NavLink
//               to="/feedback"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="mb-2 hover:text-purple-500">Feedback</li>
//             </NavLink>
//             <NavLink
//               to="/contact"
//               style={({ isActive }) => ({
//                 color: isActive ? "rgb(107, 33, 168)" : "#000",
//                 textDecoration: "none",
//               })}
//             >
//               <li className="hover:text-purple-500">Contact</li>
//             </NavLink>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // console.log(token);
  axios.defaults.withCredentials = true;

  const logOut = () => {
    axios
      .get("http://localhost:5000/logout")
      .then((result) => {
        localStorage.removeItem("token");
        toast.success(result.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const logOut1 = () => {
  //   try {
  //     const { data } = axios.get("http://localhost:5000/logout");
  //     localStorage.removeItem("token");

  //     toast.success(data.message);
  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error.respomse.data.message);
  //   }
  // };
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="bg-blue-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid-100 border-slate-600">
        <div className="flex-shrink-0 font-bold tracking-wider">LOGO</div>
        <div className="hidden md:block">
          <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
            {/* <Link
              to="#"
              className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="#"
              className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Login
            </Link>
            <Link
              to="#"
              className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Register
            </Link> */}
            <Link
              to="/contact"
              className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Contact
            </Link>
            <Link className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
              refreshtoken
            </Link>
            <button
              type="button"
              onClick={logOut}
              className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              LogOut
            </button>
          </div>
        </div>
        <button
          type="button"
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        {showMobileMenu && (
          <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
            {/* <Link
              to="#"
              className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="#"
              className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Features
            </Link>
            <Link
              to="#"
              className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Pricing
            </Link> */}
            <button
              type="button"
              onClick={logOut}
              className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
