"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { events } from "@/utils/Event_Data.js";
import { RiArrowUpSLine } from "react-icons/ri";

const Page = () => {


  const [filtersOpen, setFiltersOpen] = useState({
    Industry: false,
    Month: false,
    Country: false,
  });


  const [filters, setFilters] = useState({
    Industry: "all",
    Month: "all",
    Country: "all",
  });

  // let eventsCopy=structuredClone(events);

  const [eventsCopy, setEventsCopy] = useState([...events])


  const FilterFunction = () => {

    console.log("Indujnxkasncjc ",filters.Industry)

     let TempEventsCopy=events.slice()

     console.log("This is start",TempEventsCopy)

    if (filters.Industry != "all") {
      console.log("this is the value", TempEventsCopy);

      // TempEventsCopy = TempEventsCopy.map(
      //   (item) =>
      //     (item.events = item.events.filter((el) => {
      //       el.category.includes(filters.Industry);
      //     }))

      //     // item.events.category.includes(filters.Industry)
      // );


      TempEventsCopy = TempEventsCopy.map((item) => ({
        ...item,
        events: item.events.filter((el) =>
          el.category.includes(filters.Industry)
        ),
      }));

      
    }

    if (filters.Month != "all") {

      TempEventsCopy = TempEventsCopy.filter((item) => (

        item.month.includes(filters.Month)

      ))

    }


    if (filters.Country != "all") {
      TempEventsCopy = TempEventsCopy.map((item) => ({
        ...item,
        events: item.events.filter((el) =>
          el.location.includes(filters.Country)
        ),
      }));

    }

    setEventsCopy(TempEventsCopy);

    console.log("This is end",TempEventsCopy)


  }


  useEffect(() => {

    FilterFunction()
    // eventsCopy = structuredClone(events); // Create a deep copy

    console.log("in useEffect",eventsCopy)

  }, [filters , events  ])
  


  const industries = ["all","Technology", "Finance", "Healthcare", "Education"];
  const months = [ "all","January", "February", "March", "April"];
  const countries = [ "all","India", "America", "Canada", "Germany"];


  return (
    <div className="bg-white">
      {/* Banner Design Start */}
      <div className="banner relative max-h-[665px]">
        <div className="absolute bg-black top-0 right-0 left-0 w-full h-full opacity-40"></div>

        <div className="absolute top-[50%] left-7 text-white z-10 text-[90px] font-medium ">
          Events
        </div>
        <Image
          src="./Event/eventBanner.svg"
          width={100}
          height={100}
          className="w-[100%] "
          alt="banner"
        />
      </div>
      {/* Banner Design end */}
{/* MainSection Start */}
      <div className="MainSection flex gap-9 p-5 font-medium h-[1000vh] mt-10">
        <div className="left w-[20%] bg -amber-100 p-5">
          {/* All filters Start */}

          {/* Industry Filter */}
          <div className="Filter transition-all duration-700 ease-in py-3 border-b border-b-black mt-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">Industry</p>
              <RiArrowUpSLine
                className={`text-[1.4rem] cursor-pointer transform transition-transform duration-300 ${
                  filtersOpen.Industry ? "rotate-0" : "rotate-180"
                }`}
                onClick={() =>
                  setFiltersOpen((prev) => ({
                    ...prev,
                    Industry: !prev.Industry,
                  }))
                }
              />
            </div>

            <div
              className={`${
                filtersOpen.Industry ? "h-auto opacity-100" : "h-0 opacity-0"
              } transition-all duration-700 overflow-hidden`}
            >
              {industries.map((industry, index) => (
                <p
                  key={index}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      Industry: industry
                    }))
                  }
                  className={`py-2 px-2 mt-2 rounded-lg cursor-pointer capitalize  ${ filters.Industry===industry ? "bg-blue-600 text-white":"bg-blue-50"} transition-all duration-200`}
                  
                >
                  {industry}
                </p>
              ))}
            </div>
          </div>

          {/* Month Filter */}
          <div className="Filter py-3 border-b border-b-black mt-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">Month</p>
              <RiArrowUpSLine
                className={`text-[1.4rem] cursor-pointer transform transition-transform duration-300 ${
                  filtersOpen.Month ? "rotate-0" : "rotate-180"
                }`}
                onClick={() =>
                  setFiltersOpen((prev) => ({
                    ...prev,
                    Month: !prev.Month,
                  }))
                }
              />
            </div>

            <div
              className={`${
                filtersOpen.Month ? "h-auto opacity-100" : "h-0 opacity-0"
              } transition-all duration-700 overflow-hidden`}
            
            
            >
              {months.map((month, index) => (
                <p key={index} 
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    Month: month
                  }))
                }
                className={`py-2 px-2 mt-2 rounded-lg cursor-pointer capitalize  ${ filters.Month===month ? "bg-blue-600 text-white":"bg-blue-50"} transition-all duration-200`}
                >
                  {month}
                </p>
              ))}
            </div>
          </div>

          {/* Country Filter */}
          <div className="Filter py-3 border-b border-b-black mt-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">Country</p>
              <RiArrowUpSLine
                className={`text-[1.4rem] cursor-pointer transform transition-transform duration-300 ${filtersOpen.Country ? "rotate-0" : "rotate-180"
                  }`}
                onClick={() =>
                  setFiltersOpen((prev) => ({
                    ...prev,
                    Country: !prev.Country,
                  }))
                }
              />
            </div>

            <div
              className={`${filtersOpen.Country ? "h-auto opacity-100" : "h-0 opacity-0"
                } transition-all duration-700 overflow-hidden`}
            >
              {countries.map((country, index) => (
                <p key={index} 
                
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    Country: country
                  }))
                }
                className={`py-2 px-2 mt-2 rounded-lg cursor-pointer capitalize  ${ filters.Country===country ? "bg-blue-600 text-white":"bg-blue-50"} transition-all duration-200`}
               
                
                >
                  {country}
                </p>
              ))}
            </div>
          </div>

          {/* All filters End */}
        </div>

        <div className="right w-[80%] allEventDetails">



          {eventsCopy.length === 0 ? (
            <p className="text-center text-gray-500 mt-6">No events available</p>
          ) : (
            eventsCopy.map((monthData) => (
              <div key={monthData.month} className="EventDetails">
                <h2 className="text-[35px] mt-6 font-medium">
                  {monthData.month}
                </h2>

                {monthData.events.length === 0 ? (
                  <p className="text-gray-500 my-10">No events this month</p>
                ) : (
                  monthData.events.map((event, index) => (
                    <div
                      key={index}
                      className="bg-[#4BBAFF1A] mt-5 rounded-[5px] py-3 px-6"
                    >
                      <div className="flex justify-between items-center font-medium">
                        <p>{event.name}</p>
                        <p className="text-[15px]">{event.date}</p>
                        <p className="text-[15px]">{event.location}</p>
                      </div>
                      <p className="mt-2 text-xs text-blue-700 rounded p-1 bg-[#06DEFF26] w-fit">
                        {event.category}
                      </p>
                    </div>
                  ))
                )}
              </div>
            ))
          )}


          {/* { eventsCopy.map((monthData) => (
            <div key={monthData.month} className="EventDetails">
              <h2 className="text-[35px] mt-6 font-medium">
                {monthData.month}
              </h2>

              {monthData.events.map((event, index) => (
                <div
                  key={index}
                  className="bg-[#4BBAFF1A] mt-5 rounded-[5px] py-3 px-6"
                >
                  <div className="flex justify-between items-center font-medium">
                    <p>{event.name}</p>
                    <p className="text-[15px]">{event.date}</p>
                    <p className="text-[15px]">{event.location}</p>
                  </div>
                  <p className="mt-2 text-xs text-blue-700 rounded p-1 bg-[#06DEFF26] w-fit">
                    {event.category}
                  </p>
                </div>
              ))}
            </div>
          ))} */}

        </div>
      </div>

{/* MainSection Start */}

    </div>
  );
};

export default Page;
