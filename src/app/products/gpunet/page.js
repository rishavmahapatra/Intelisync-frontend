import ButtonTitle from "@/component/ProductPage/ButtonTitle";

import React from "react";

import ButtonDescriptionAndList from "@/component/ProductPage/ButtonDescriptionAndList";
import Image from "next/image";
import ProductBanner from "@/component/ProductPage/ProductBanner";
import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import FAQSection from "@/component/footer/FAQSection";

import ContactUs from "@/component/ContactUs/ContactUs";
import Blog from "@/component/Blogs/Blogs";

const page = () => {
  return (
    <>
      <ProductBanner />

      <div className=" bg-[#000B18]">
        <section className="gpunet relative py-10  overflow-x-hidden px-4 w-full">
          <div className="absolute bg-[linear-gradient(256.74deg,#049EBC_47.38%,#00375A_61.04%,#490074_70.05%)]  w-[155.3px] h-[391.98px] top-0  blur-[170px] -[1217.67px] left-16 -[238.44px] rotate-[148.52deg]"></div>

          <div className="mx-auto max-w-[802px]">
            <ButtonDescriptionAndList
              title="GPUNet – Decentralized High-Performance AI Computing "
              paragraphs={[
                `GPUNet leverages a decentralized GPU network to provide scalable, cost-effective, and accessible AI computing power. By integrating enterprise-grade GPUs, including NVIDIA 3080, 3090, and A100, GPUNet enables developers, businesses, and researchers to train and deploy AI models without infrastructure constraints.  `,
                `GPUNet leverages a decentralized GPU network to provide scalable, cost-effective, and accessible AI computing power. By integrating enterprise-grade GPUs, including NVIDIA 3080, 3090, and A100, GPUNet enables developers, businesses, and researchers to train and deploy AI models without infrastructure constraints.  `,
              ]}
              listItems={[]}
            />

            <ButtonDescriptionAndList
              title="The Role of GPUs in AI Computing"
              paragraphs={[
                `GPUs (Graphics Processing Units) are the backbone of modern AI computing. Unlike traditional CPUs, which handle sequential tasks, GPUs process massive amounts of data in parallel, making them ideal for AI workloads such as: `,
              ]}
              listItems={[
                "GPUs accelerate AI model training by performing millions of simultaneous calculations.",
                "AI models like ChatGPT and BERT rely on GPUs for high-speed language processing.",
                "Tasks such as text-to-video conversion, image generation, and 3D modeling require GPU-intensive computations.",
                "GPUs enhance simulations, big data analysis, and real-time AI inference.",
              ]}
            />

            {/* 3rd */}

            <div className="relative">
              <ButtonDescriptionAndList
                title="The Challenge – AI’s Growing Demand for High-Performance Computing "
                paragraphs={[
                  `As AI adoption accelerates, businesses and developers face several challenges: `,
                ]}
                listItems={[
                  "Renting AI computing power from centralized providers is expensive, making it difficult for startups and researchers to scale.",
                  "Large cloud providers dominate the market, restricting affordable GPU availability.",
                  "Many high-performance GPUs remain idle, representing untapped computing power.",
                  "AI workloads fluctuate, and centralized services struggle with demand surges.",
                ]}
              />

              <Image
                src="/ProductPage/growthChart.svg"
                alt="Growth Chart"
                width={475}
                height={446}
                className="absolute bottom-[-170px] right-[-170px]"
              />
            </div>

            <p className="ms-6 text-[#FFFFFFCC] mt-5">
              Despite their importance, access to high-performance GPUs is
              expensive and limited, creating a barrier for AI development. 
            </p>

            <div className="relative">
              <div className="absolute w-[302.75px] h-[302.44px] blur-[190px] top-[100.43px] left-[140.05px] rotate-[-7.68deg] opacity-90 bg-[linear-gradient(256.74deg,_rgba(4,158,188,0.91)_47.38%,_rgba(0,55,90,0.91)_61.04%,_rgba(73,0,116,0.91)_70.05%)]"></div>

              <ButtonDescriptionAndList
                title="Product Description "
                paragraphs={[
                  `GPUNet is Intelisync’s Generative AI Model-as-a-Service (MaaS) platform, built on a Decentralized Physical Infrastructure Network (DePIN). It provides scalable, affordable AI computing for tasks like language modeling, video rendering, text-to-video conversion, and image generation. By using distributed devices, GPUNet allows even low-end hardware to handle complex AI tasks efficiently and at lower costs. `,
                  `What makes GPUNet stand out is its tokenized credit system, which uses real-world asset (RWA) backed tokens and blockchain technology to offer secure, transparent access to computing resources. This approach creates a more accessible and efficient ecosystem for businesses and developers. `,
                  `With its decentralized GPU network, GPUNet breaks away from the limits of traditional centralized systems. It bridges the gap between the growing demand for AI and the need for scalable, cost-effective solutions making high-performance AI computing more accessible for everyone. 
  `,
                ]}
                listItems={[]}
              />
            </div>

            <ButtonDescriptionAndList
              title="Solution"
              paragraphs={[
                `GPUNet solves the challenges of high-demand AI computing with a combination of powerful, accessible technologies: `,
              ]}
              listItems={[]}
            />

            <ul className="text-white text-[14px] items-end mt-9 grid lg:grid-cols-2 gap-6 ">
              <li
                style={{
                  border: "2px solid",
                  borderImageSource:
                    "linear-gradient(90deg, rgba(7, 234, 211, 0) 1.96%, rgba(7, 234, 211, 0.28) 27.38%, #26DDFF 73.78%, rgba(38, 221, 255, 0) 95.38%)",
                  borderImageSlice: 1,
                  borderRadius: "30px",
                }}
                className="bg-[#2864975E] overflow-hidden h-fit rounded-[30px] px-3 py-3  text-white border-b  border-t"
              >
                {" "}
                GPUNet uses RWA-backed credits to offer transparent,
                decentralized access to computing power, making it easier for
                developers and businesses to access resources as needed. 
              </li>

              <li
                style={{
                  border: "2px solid",
                  borderImageSource:
                    "linear-gradient(90deg, rgba(7, 234, 211, 0) 1.96%, rgba(7, 234, 211, 0.28) 27.38%, #26DDFF 73.78%, rgba(38, 221, 255, 0) 95.38%)",
                  borderImageSlice: 1,
                  borderRadius: "30px",
                }}
                className="bg-[#2864975E] overflow-hidden h-fit rounded-[30px] px-3 py-3  text-white border-b  border-t"
              >
                {" "}
                A scalable network of GPUs, including high-performance devices
                like NVIDIA 3080 and 3090, ensures reliable computing capacity
                for AI tasks. 
              </li>

              <li
                style={{
                  border: "2px solid",
                  borderImageSource:
                    "linear-gradient(90deg, rgba(7, 234, 211, 0) 1.96%, rgba(7, 234, 211, 0.28) 27.38%, #26DDFF 73.78%, rgba(38, 221, 255, 0) 95.38%)",
                  borderImageSlice: 1,
                  borderRadius: "30px",
                }}
                className="bg-[#2864975E] overflow-hidden h-fit rounded-[30px] px-3 py-3  text-white border-b  border-t"
              >
                Developers can run AI models across various devices such as PCs
                and IoT hardware offering greater accessibility and reduced
                costs. 
              </li>

              <li
                style={{
                  border: "2px solid",
                  borderImageSource:
                    "linear-gradient(90deg, rgba(7, 234, 211, 0) 1.96%, rgba(7, 234, 211, 0.28) 27.38%, #26DDFF 73.78%, rgba(38, 221, 255, 0) 95.38%)",
                  borderImageSlice: 1,
                  borderRadius: "30px",
                }}
                className="bg-[#2864975E] overflow-hidden h-fit rounded-[30px] px-3 py-3  text-white border-b  border-t"
              >
                {" "}
                Secure, trustless access through blockchain enables global
                adoption, allowing developers worldwide to leverage GPUNet’s
                high-performance computing with confidence. 
              </li>
            </ul>
            <div className="relative">
              <div className="absolute w-[302.75px] h-[302.44px] blur-[190px] top-[38%] right-[0px] rotate-[-7.68deg] opacity-90 bg-[linear-gradient(256.74deg,_rgba(4,158,188,0.91)_47.38%,_rgba(0,55,90,0.91)_61.04%,_rgba(73,0,116,0.91)_70.05%)]"></div>

              <ButtonDescriptionAndList
                title="Market Opportunity – The Future of AI Computing"
                paragraphs={[
                  `The AI computing industry is experiencing exponential growth: `,
                ]}
                listItems={[
                  `AI infrastructure spending is expected to increase from $820 million in 2023 to $10.99 billion by 2026. `,
                  `Tech giants such as Google, Microsoft Azure, and Meta are heavily investing in GPU-driven AI computing. `,
                  `GPUNet is strategically positioned to meet this demand by offering a more accessible, scalable, and decentralized alternative. `,
                ]}
              />

              <ButtonDescriptionAndList
                title="Results – Proven AI Performance at Scale "
                paragraphs={[
                  `GPUNet has demonstrated real-world success in high-performance AI computing:  `,
                ]}
                listItems={[
                  `50% lower costs compared to centralized AI cloud providers. `,
                  `Successful partnerships with AI DApp developers, expanding decentralized AI solutions. `,
                  `High-performance computing for AI workloads, including text-to-video conversion, image-to-3D modeling, and deep learning applications.   `,
                ]}
              />
            </div>
            <ButtonDescriptionAndList
              title="Traction"
              paragraphs={[
                `GPUNet is already making strides in its development: `,
              ]}
              listItems={[]}
            />

            <div className="flex flex-wrap justify-center text-white mt-10 gap-8 text-[16px]">
              <div className="bg-[#2864975E]  rounded-[30px]  w-full sm:w-[244px] p-2">
                <div className="p-[1.6px]  bg-[linear-gradient(123deg,_rgba(7,234,211,0)_1.96%,_rgba(7,234,211,0.28)_27.38%,_#26DDFF_73.78%,_rgba(38,221,255,0)_95.38%)] h-full w-full rounded-[30px]">
                  <div className=" bg-[#000b18] relative flex justify-between items-center h-full borde r-2  border-transparent  rounded-[30px]">
                    <div className="bg-[#2864975E] rounded-[30px] w-full h-full p-6">
                      Integration of NVIDIA 3080 and 3090 GPUs boosts computing
                      power, ensuring seamless AI processing. 
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2864975E]  rounded-[30px]  w-full sm:w-[244px] p-2">
                <div className="p-[1.6px]  bg-[linear-gradient(123deg,_rgba(7,234,211,0)_1.96%,_rgba(7,234,211,0.28)_27.38%,_#26DDFF_73.78%,_rgba(38,221,255,0)_95.38%)] h-full w-full rounded-[30px]">
                  <div className=" bg-[#000b18] relative flex justify-between items-center h-full borde r-2  border-transparent  rounded-[30px]">
                    <div className="bg-[#2864975E] rounded-[30px] w-full h-full p-6">
                      GPUNet has launched its first AI applications and is
                      rapidly growing its ecosystem by partnering with
                      developers and enterprises. 
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2864975E]  rounded-[30px]  w-full sm:w-[244px] p-2">
                <div className="p-[1.6px]  bg-[linear-gradient(123deg,_rgba(7,234,211,0)_1.96%,_rgba(7,234,211,0.28)_27.38%,_#26DDFF_73.78%,_rgba(38,221,255,0)_95.38%)] h-full w-full rounded-[30px]">
                  <div className=" bg-[#000b18] relative flex justify-between items-center h-full borde r-2  border-transparent  rounded-[30px]">
                    <div className="bg-[#2864975E] rounded-[30px] w-full h-full p-6">
                      Continuous development of both networks ensures smooth,
                      global deployment of AI applications. 
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative ">
              <div className="absolute w-[302.75px] h-[302.44px] blur-[190px] top-[170.43px] left-[-60.05px] rotate-[-7.68deg] opacity-90 bg-[linear-gradient(256.74deg,_rgba(4,158,188,0.91)_47.38%,_rgba(0,55,90,0.91)_61.04%,_rgba(73,0,116,0.91)_70.05%)]"></div>

              {/* Business model section start */}

              <ButtonDescriptionAndList
                title="Business Model – AI Computing as a Service (MaaS)"
                paragraphs={[
                  `GPUNet operates on a subscription-based Model-as-a-Service (MaaS) framework. `,
                ]}
                listItems={[
                  `Gain access to high-performance AI computing without expensive infrastructure investments. `,
                  `Earn GPUNet tokens by contributing unused GPU resources, creating a sustainable and incentivized ecosystem. `,
                ]}
              />

              {/* Business model section end */}

              {/* Financial Projections & Funding Requirements  section start */}

              <ButtonDescriptionAndList
                title="Financial Projections & Funding Requirements "
                paragraphs={[
                  `GPUNet aims to capture a significant share of the $10.99 billion AI computing market by 2026. `,
                ]}
                listItems={[
                  `Funding Goal: Seeking $3 million in seed funding to expand network capacity, grow the developer ecosystem, and launch new AI applications. 
`,
                ]}
              />
            </div>
            {/* Financial Projections & Funding Requirements  section end */}

            <ButtonDescriptionAndList
              title="Conclusion – The Future of AI Computing is Decentralized "
              paragraphs={[
                `GPUNet, a product of Intelisync, is revolutionizing AI computing by making high-performance GPU power accessible, scalable, and cost-effective. `,
                `By combining decentralized infrastructure, blockchain-powered tokenized credits, and enterprise-grade GPUs, GPUNet eliminates cost, access, and scalability barriers—allowing businesses and developers to focus on innovation, not infrastructure challenges. `,
                `As AI adoption continues to grow, GPUNet is at the forefront of decentralized AI computing, shaping the future of AI infrastructure worldwide. `,
              ]}
              listItems={[]}
            />
          </div>
        </section>
      </div>

      {/* <FAQSection/> */}

      {/* Blog and Our Exprt Guidance start  */}
      <div className="text-center text-white mt-10">
        <h2 className="min-[320px]:max-[480px]:text-[20px] text-[32px] leading-[26px] text-center inline-block relative after:content-[''] after:block after:h-[1px] after:w-full after:max-w-full after:bg-gradient-to-r after:from-[#07CDFF] after:to-[#06FFF0] after:absolute after:bottom-0 after:left-0 pb-4">
        Blog- Our Expert Articles
        </h2>
      </div>
      <Blog />
      {/* Blog and Our Exprt Guidance ends */}
      {/* Contact Form Start  */}
      <ContactUs />
      {/* COntact form ends  */}

  
    </>
  );
};

export default page;
