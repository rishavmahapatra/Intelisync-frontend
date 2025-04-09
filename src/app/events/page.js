"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { events } from "@/utils/Event_Data.js";

import { RiArrowUpSLine } from "react-icons/ri";
import SocialIcons from "@/component/SocialIcons";

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

  }, [filters , events])
  


  const industries = ["all","Technology", "Finance", "Healthcare", "Education"];
  const months = [ "all","January", "February", "March", "April"];
  const countries = [ "all","India", "America", "Canada", "Germany"];


  return (
    <div className="bg-white">
      {/* Banner Design Start */}
      <div className="banner relative h-screen [350px] sm:h-full ">
        <div className="absolute z-10 bg-black top-0 right-0 left-0 w-full h-full opacity-40"></div>

        <div className="absolute top-[50%] left-7 text-white z-10 text-[60px]  sm:text-[90px] font-medium ">
          <h1> Event</h1>
        </div>

        <div className="w-full  h-full">
        <Image
          src="/Event/Events_Banner.webp"
           width={100}
           height={100}
           quality={10}
          className="w-full object-cover  h-full"
          alt="banner"
        /></div>
      </div>
      {/* Banner Design end */}

      {/* MainSection Start */}
      <div className="MainSection flex gap-9 p-5 font-medium h-auto mt-10">
        <div className="left w-[20%] hidden lg:block bg -amber-100 p-5">
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
                      Industry: industry,
                    }))
                  }
                  className={`py-2 px-2 mt-2 rounded-lg cursor-pointer capitalize  ${
                    filters.Industry === industry
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50"
                  } transition-all duration-200`}
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
                <p
                  key={index}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      Month: month,
                    }))
                  }
                  className={`py-2 px-2 mt-2 rounded-lg cursor-pointer capitalize  ${
                    filters.Month === month
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50"
                  } transition-all duration-200`}
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
                className={`text-[1.4rem] cursor-pointer transform transition-transform duration-300 ${
                  filtersOpen.Country ? "rotate-0" : "rotate-180"
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
              className={`${
                filtersOpen.Country ? "h-auto opacity-100" : "h-0 opacity-0"
              } transition-all duration-700 overflow-hidden`}
            >
              {countries.map((country, index) => (
                <p
                  key={index}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      Country: country,
                    }))
                  }
                  className={`py-2 px-2 mt-2 rounded-lg cursor-pointer capitalize  ${
                    filters.Country === country
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50"
                  } transition-all duration-200`}
                >
                  {country}
                </p>
              ))}
            </div>
          </div>

          {/* All filters End */}
        </div>

        <div className="right w-full lg:w-[80%] allEventDetails">
          {eventsCopy.length === 0 ? (
            <p className="text-center text-gray-500 mt-6">
              No events available
            </p>
          ) : (
            eventsCopy.map((monthData) => (
              <div key={monthData.month} className="EventDetails">
                <h2 className="text-[22px] sm:text-[35px] mt-6 font-medium">
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
                      <div className="flex sm:space-y-0 items-center space-y-6 sm:flex-row flex-col flex-wrap sm:flex-nowrap justify-between ite ms-center font-medium">
                        

                        <div className="sm:w-[200px] sm:mx-0 mx-auto text-center sm:text-left h-auto">
                          <p className="">{event.name}</p>
                          <p className="mt-2  mx-auto sm:mx-0 text-xs text-blue-700 rounded p-1 bg-[#06DEFF26] w-fit">
                            {event.category}
                          </p>
                        </div>
                        <p className="text-[15px] sm:text-center  sm:w-[200px]">
                          {event.date}
                        </p>
                        <p className="text-[15px] sm:w-[200px] sm:text-right">
                          {event.location}
                        </p>
                      </div>
                      {/* <p className="mt-2 text-xs text-blue-700 rounded p-1 bg-[#06DEFF26] w-fit">
                        {event.category}
                      </p> */}
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
        <SocialIcons/>
      </div>
  
      {/* MainSection End */}
        
   

    </div>
  );
};

export default Page;
