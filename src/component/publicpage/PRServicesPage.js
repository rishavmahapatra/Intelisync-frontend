// import { PublicRelationCards } from "@/utils/Cards_Data";

// export default function PRServicesPage() {
//   return (
//     <div className="bg-[#000B18] text-white py-16 px-6 md:px-20 lg:px-32 ">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-tight text-[#06FFFB]">
//         Crypto Public Relations Agency to Elevate Your Brand
//         </h2>

//         <p className="font-poppins text-[14px] leading-[24px] text-gray-300 mt-4 max-w-3xl mx-auto">
//         In the competitive crypto space, the right PR strategy can make all the difference. Our crypto PR agency helps you build trust, boost visibility, and connect with the right audience. With strong press public relations and media outreach, we position your brand as a leader.
//         Partner with a public relations agency that understands crypto and drives real impact. Let’s put your brand in the spotlight
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//         {PublicRelationCards.map((solution, index) => (
//           <div
//             key={index}
//             className="p-px relative rounded-2xl shadow-lg bg-[#081828] h-[250px]  "
//           >
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

//             <div className="p-4 bg-[#0B1522] rounded-2xl relative h-full py-8 px-10">
//               <h2 className="font-poppins font-[700px] text-[19px] leading-[25px] tracking-[-0.01%] whitespace-pre-line ">
//                 {solution.title}
//               </h2>

//               <p className="font-poppins font-[400px] text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 break-words ">
//                 {solution.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { PublicRelationCards } from "@/utils/Cards_Data";

export default function Artificialservice() {
    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="text-left mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-[500px] leading-tight text-[#06FFFB]">
                Crypto Public Relations Agency to Elevate Your Brand                </h2>

                <p className="text-[14px] sm:text-[16px] leading-[22px] tracking-tight text-gray-300 mt-2 max-w-3xl">
                In the competitive crypto space, the right PR strategy can make all the difference. Our crypto PR agency helps you build trust, boost visibility, and connect with the right audience. With strong press public relations and media outreach, we position your brand as a leader.
                Partner with a public relations agency that understands crypto and drives real impact. Let’s put your brand in the spotlight                </p> 

                     
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PublicRelationCards.map((solution, index) => (
                    <div key={index} className="relative p-px rounded-2xl shadow-lg bg-[#081828] min-h-[250px]">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

                        {/* Card Content */}
                        <div className="p-4 bg-[#0B1522] rounded-2xl relative h-full py-6 sm:py-8 px-6 sm:px-10">
                            <h2 className="font-poppins font-[700px] text-[19px] sm:text-[20px] leading-[25px] tracking-tight">
                                {solution.title}
                            </h2>

                            <p className="font-poppins font-[400px] text-[13px] sm:text-[15px] leading-[22px] tracking-tight text-gray-300 mt-4 break-words">
                                {solution.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

