"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import {
  Ourservicedata,
  IndustryData,
  CompanyData,
  OurProductsData,
  globalPresenceData,
} from "@/utils/Dropdown_Data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);
  const [show, handleShow] = useState(false);
  const [global, setGlobal] = useState(false);
  const [nestedDropDown, setNestedDropDown] = useState(false)

  const menuItems = [
    { key: "company", title: "Company", data: CompanyData, link: '/company/aboutuspage' },
    { key: "services", title: "Services", data: Ourservicedata, link: '/services' },
    { key: "industry", title: "Industry", data: IndustryData, link: '/Industry' },
    { key: "products", title: "Our Products", data: OurProductsData, link: '/products' },
  ];

  const [hoveredText, setHoveredText] = useState("");

  const handleHover = (e) => {
    setHoveredText(e.target.innerText); // Get inner text on hover
  };
  const handleHoverLeave = () => {
    setHoveredText(""); // Get inner text on hover
  };
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (prev) setDropdownOpen("");
      return !prev;
    });
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => (prev === key ? "" : key));
  };

  const renderDropdown = (data) => (
    <motion.ul
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 5, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute left-0 md:mt-2 w-70 border border-gray-700 rounded-xl shadow-lg backdrop-blur-md"
      style={{
        background: "linear-gradient(135deg, #104073 0%, #03F0E2B2 100%)",
      }}
    >
      {data.map((item, index) => (
        <div key={index} className="wrapper">
        <li
          key={index}
          onMouseEnter={() => {
            setHoverIndex(index);
            console.log("the index is this ", index);
            if (item.title == "Global Presence") {
              setGlobal(true);
            }
          }}
          onMouseLeave={() => {
            setHoverIndex(null);
            if (item.title == "Global Presence") {
              setGlobal(false);
            }
          }}
          className="relative z-40 flex items-center px-4 py-2 md:py-3 text-white transition
         duration-300 cursor-pointer"
        >
          {hoverIndex === index && <GoArrowRight className="mr-2" />}
          <Link href={item.link}>{item.title}</Link>
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // className="absolute left-0 md:mt-2 w-70 border border-gray-700 rounded-xl shadow-lg backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, #104073 0%, #03F0E2B2 100%)",
            }}
          >
            {/* { global &&  */}

            {/* }  */}
          </motion.ul>
        </li>

        <div
          onMouseEnter={() => setGlobal(true)}
          onMouseOver={() => setGlobal(true)}
          onMouseLeave={() => setGlobal(false)}
          className={`
               ${
                 global && item.title == "Global Presence"
                   ? "block"
                   : "hidden"
               }
            absolute  z-50 top-[50%] left-[100%] md:mt-2 w-70 border border-gray-700 rounded-xl shadow-lg backdrop-blur-[400px] py-[17px] px-[21px] bg-[linear-gradient(189.87deg,_rgba(16,64,115,0.55)_-3.49%,_rgba(3,240,226,0.55)_155.64%)]`}
        >
          {/* ${
              item.title == "Global Presence" ? " block" : "hidden"
            }  */}


          <li className="border-b border-b-[#707070] flex items-center px-4 py-2 md:py-3 transition duration-300 cursor-pointer group">
            <GoArrowRight
              className={` mr-2 transition-colors duration-200  ${
                hoveredText === "Dubai"
                  ? "opacity-100 duration-200"
                  : "opacity-0"
              }`}
            />
            <Link href='/global-presence/dubai'
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
              className=""
            >
              Dubai
            </Link>
          </li>

          <li className="group border-b h-fit relative z-[9999] border-b-[#707070] flex items-center px-4 py-2 md:py-3 transition duration-300 cursor-pointer ">
            <GoArrowRight
              className={` mr-2 transition-colors duration-200  ${
                hoveredText === "India"
                  ? "opacity-100 duration-200"
                  : "opacity-0"
              }`}
            />
            <Link href='/global-presence/singapore'
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
              className=""
            >
              Singapore
            </Link>
          </li>

          <li className="border-b border-b-[#707070] flex items-center px-4 py-2 md:py-3 transition duration-300 cursor-pointer group">
            <GoArrowRight
              className={` mr-2 transition-colors duration-200  ${
                hoveredText === "United States (UK)"
                  ? "opacity-100 duration-200"
                  : "opacity-0"
              }`}
            />
            <span
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
              className=""
            >
              Boston
            </span>
          </li>

          <li className="border-b border-b-[#707070] flex items-center px-4 py-2 md:py-3 transition duration-300 cursor-pointer group">
            <GoArrowRight
              className={` mr-2 transition-colors duration-200  ${
                hoveredText === "Riyadh"
                  ? "opacity-100 duration-200"
                  : "opacity-0"
              }`}
            />
            <Link href='/global-presence/uk'
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
              className=""
            >
              London
            </Link>
          </li>
          <li className="border-b border-b-[#707070] flex items-center px-4 py-2 md:py-3 transition duration-300 cursor-pointer group">
            <GoArrowRight
              className={` mr-2 transition-colors duration-200  ${
                hoveredText === "United States (UK)"
                  ? "opacity-100 duration-200"
                  : "opacity-0"
              }`}
            />
            <Link href='/global-presence/riyadh'
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
              className=""
            >
              Riyadh
            </Link>
          </li>
          <li className="border-b border-b-[#707070] flex items-center px-4 py-2 md:py-3 transition duration-300 cursor-pointer group">
            <GoArrowRight
              className={` mr-2 transition-colors duration-200  ${
                hoveredText === "United States (UK)"
                  ? "opacity-100 duration-200"
                  : "opacity-0"
              }`}
            />
            <Link href='/global-presence/india'
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
              className=""
            >
              India
            </Link>
          </li>
        </div>
      </div>
      ))}
    </motion.ul>
  );

  return (
    <nav className={` text-white py-4 w-full top-0 z-70 sticky ${show && "nav_blur"}`} >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 ">
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-white">Inteli</span>
            <span className="text-teal-400">sync</span>
          </div>
        </Link>

        <div className="max-lg:hidden lg:flex space-x-8 md:items-center lg:items-center xl:space-x-12 text-lg relative">
          <div className="relative group">
            <Link href="/company/aboutuspage" className="cursor-pointer flex items-center gap-1 hover:text-teal-400" >Company</Link>
            <div className="absolute inset-4 left-0 invisible group-hover:visible group-hover:pointer-events-auto">
              {renderDropdown(CompanyData)}
            </div>
          </div>

          <div className="relative group">
            <Link
              href="/services"
              className="cursor-pointer flex items-center gap-1 hover:text-teal-400"
            >
              Our Services
            </Link>
            <div className="absolute inset-4 left-0 invisible group-hover:visible group-hover:pointer-events-auto">
              {renderDropdown(Ourservicedata)}
            </div>
          </div>

          <div className="relative group">
            <Link
              href="/Industry"
              className="cursor-pointer flex items-center gap-1 hover:text-teal-400"
            >
              Industry
            </Link>
            <div className="absolute inset-4 left-0 invisible group-hover:visible group-hover:pointer-events-auto">
              {renderDropdown(IndustryData)}
            </div>
          </div>

          <div className="relative group">
            <Link
              href="/products"
              className="cursor-pointer flex items-center gap-1 hover:text-teal-400"
            >
              Our Products
            </Link>
            <div className="absolute inset-4 left-0 invisible group-hover:visible group-hover:pointer-events-auto">
              {renderDropdown(OurProductsData)}
            </div>
          </div>

          <Link href="/events" className="hover:text-teal-400">
            Events
          </Link>
          <Link href="/company/careers" className="hover:text-teal-400">
            Careers
          </Link>
          <Link href="/company/blog" className="hover:text-teal-400">
            Blog
          </Link>
        </div>

        <div className="max-lg:hidden lg:flex space-x-8 lg:items-center xl:space-x-12 text-lg relative">
          <Link href="/contact">
            <button className="border border-teal-400 px-4 py-2 rounded-md hover:bg-teal-400 hover:text-black transition">
              Contact
            </button>
          </Link>
        </div>

        <button onClick={toggleMenu} className="lg:hidden">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#020B17] text-white py-6 px-4 ">
          {menuItems.map((item) => (
            <div key={item.key} className="mb-2">
              <div
                className="flex justify-between items-center cursor-pointer py-2 font-medium"

              >
                <Link href={item?.link} className={dropdownOpen === item.key ? "text-white-600" : ""} onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen("");
                }}
                >{item.title}</Link>
                <FiChevronDown
                  size={16}
                  className={`transition-transform ${dropdownOpen === item.key ? "rotate-180 text-white-600" : ""
                    }`} onClick={() => toggleDropdown(item.key)}
                />
              </div>
              {dropdownOpen === item.key && (
                <ul className="ml-4 border-l border-gray-300 pl-3 space-y-2">
                  {item.data.map((subItem, index) => (
                    <li key={index}>
                      <div className="flex justify-between items-center">
                        <Link href={subItem.link} className="block py-1 text-white-700" onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen("");
                        }}
                        >
                          {subItem.title}
                        </Link>
                        {
                          subItem.title === "Global Presence" && (
                            <FiChevronDown
                              size={16}
                              className={`transition-transform ${nestedDropDown ? "rotate-180 text-white-600" : ""
                                }`} onClick={() => setNestedDropDown(!nestedDropDown)}
                            />
                          )
                        }
                      </div>
                      {subItem.title === "Global Presence" &&
                        nestedDropDown && (
                          <ul className="ml-4 border-l border-gray-300 pl-3 space-y-2">
                            {globalPresenceData.map((country, idx) => (
                              <li key={idx}>
                                <Link
                                  href={country.link}
                                  className="block py-1 text-white-500"
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setDropdownOpen("");
                                    setNestedDropDown(false);
                                  }}
                                >
                                  {country.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Other Links */}
          <Link href="/events" className="block py-2" onClick={() => {
            setMenuOpen(false);
            setDropdownOpen("");
          }}>Events</Link>
          <Link href="/company/careers" className="block py-2" onClick={() => {
            setMenuOpen(false);
            setDropdownOpen("");
          }}>Careers</Link>
          <Link href="/company/blog" className="block py-2" onClick={() => {
            setMenuOpen(false);
            setDropdownOpen("");
          }}>Blog</Link>
          <Link href="/contact" className="block py-2" onClick={() => {
            setMenuOpen(false);
            setDropdownOpen("");
          }} >Contact</Link>
        </div>
      )}

    </nav>
  );
}
