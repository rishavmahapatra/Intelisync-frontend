import Link from "next/link";
import { termsData } from "../../utils/terms_Condtions_Data";
export default function Condtionspage() {
  return (
    <div className=" text-black py-16 px-6 md:px-20 lg:px-32 bg-white text">
      <div className="max-w-6xl mx-auto">
        <div className="text-gray-400 text-sm mb-6">
          <Link href="/" className="hover:text-gray-300 transition">
            Homepage
          </Link>
          <span className="mx-1">&gt;</span>

          <span className="text-cyan-400 font-medium hover:text-cyan-300 transition">
            Terms & Conditions
          </span>
        </div>

        <h1 className="font-poppins font-medium text-[40px] leading-[50px] tracking-[-0.01%] mb-6">
          Terms & Conditions
        </h1>

        {termsData.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>

            {section.content && (
              <p className="text-gray-700 mb-2">{section.content}</p>
            )}

            {(section.subItems || section.contain) && (
              <ul className="list-disc pl-5 text-gray-700">
                {(section.subItems || section.contain).map((item, subIndex) => (
                  <li key={subIndex} className="mb-2">
                    {item.heading && (
                      <span className="font-semibold">{item.heading}:</span>
                    )}{" "}
                    {item.details}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
