import ContactUs from "@/component/ContactUs/ContactUs";
import RoadMapForOwnly from "@/component/OwnlyMarketPlace/RoadMapForOwnly";
import ButtonDescriptionAndList from "@/component/ProductPage/ButtonDescriptionAndList";
import ProductBanner from "../../../component/ProductPage/ProductBanner"
import React from "react";
import FAQSection from "@/component/footer/FAQSection";
import Blog from "@/component/Blogs/Blogs";

const page = () => {
  return (
    <div className="bg-[#020202] text-white h-[100vh] w-[100vw] overflow-x-hidden overflow-y-auto">
    
      {/* herosection (Banner) start  */}
      <ProductBanner />
      {/* herosection (Banner) ends  */}

      {/* Section start  */}
      <section className="gpunet relative py-10 w-full px-4">
        <div className="absolute bg-[linear-gradient(256.74deg,#049EBC_47.38%,#00375A_61.04%,#490074_70.05%)]  w-[155.3px] h-[391.98px] top-0  blur-[170px] -[1217.67px] left-16 -[238.44px] rotate-[148.52deg]"></div>

        <div className="mx-auto max-w-[802px]">
          <ButtonDescriptionAndList
            title="Ownly – Secure, Compliant, and Scalable RWA Tokenization"
            paragraphs={[
              `Ownly is one of Intelisync’s core solutions, leading the way in tokenizing real-world assets (RWAs). By offering a full end-to-end ecosystem, Ownly enables fractional ownership of physical assets, solving key challenges in liquidity, trading, and market exposure. With strong partnerships and a seamless platform, Ownly bridges the gap between traditional asset markets and the Web3 space. `,
            ]}
            listItems={[]}
          />

          <ButtonDescriptionAndList
            title="Challenge"
            paragraphs={[
              `Traditional asset sales often require buyers to purchase entire assets, a time-consuming and expensive process. Although fractional ownership has attempted to address this, it has been hindered by low liquidity, limited trading options, and restricted market access. Ownly is designed to solve these limitations and make RWA investment more accessible to everyone. `,
            ]}
            listItems={[]}
          />

          <div className="mt-10 text-[#FFFFFFCC]">
            <p className="text-[#06FFFB] text-[20px] mt-10">
              Ownly – The End-to-End RWA Tokenization Platform for Fractional
              Ownership
            </p>
            <p className=" mt-5">
              wnly is Intelisync’s all-in-one RWA tokenization platform. It
              covers the entire investment journey—from tokenization and smart
              contracts to audits, launchpad services, and a secure marketplace.
              By bringing issuers and investors together into one ecosystem,
              Ownly simplifies high-volume tokenization and trading. 
            </p>
            <p className=" mt-5">
              The platform also leverages regulated trading licenses to ensure
              compliance and trust throughout the tokenization process. This
              provides a secure, transparent environment that makes fractional
              ownership of high-value assets easier and more accessible. 
            </p>

            <p className="text-[#06FFFB] text-[20px] mt-10">
              Bridging Traditional Asset Markets with Web3 for Enhanced
              Liquidity and Accessibility
            </p>
            <p className=" mt-5">
              Ownly’s partnerships are key to its success. The platform has
              developed one of the largest RWA tokenization pipelines by
              collaborating with: 
            </p>

            <ul className="text-[#FFFFFFCC] list-disc ms-12 mt-4">
              <li className="mt-2">
                Leading private equity firms in the UAE and Asia 
              </li>
              <li className="mt-2">Commodities and metal-backed tokens </li>
              <li className="mt-2">Real estate portfolios </li>
              <li className="mt-2">
                Veblen goods (luxury items and high-value assets) 
              </li>
            </ul>
            <p className=" mt-5">
              These partnerships ensure unmatched liquidity and market exposure,
              positioning Ownly as a leader in the global RWA tokenization
              market. 
            </p>

            <div className="relative">
              <div className="absolute bg-[linear-gradient(256.74deg,#049EBC_47.38%,#00375A_61.04%,#490074_70.05%)]  w-[155.3px] h-[391.98px] top-0  blur-[170px] -[1217.67px] right-16 -[238.44px] rotate-[148.52deg]"></div>

              <p className="text-[#06FFFB] mt-10 text-[20px]">
                Capturing the $16 Trillion RWA Market with Secure and Scalable
                Tokenization
              </p>
              <p className=" mt-5">
                According to a report by Boston Consulting Group and DDX, the
                asset tokenization market is projected to reach $16 trillion by
                2030, representing 10% of global GDP. With its streamlined and
                secure platform, Ownly is poised to capture a significant
                portion of this rapidly growing market. 
              </p>

              <p className="text-[#06FFFB] mt-10 text-[20px]">
                The Future of Asset Tokenization – Secure, Transparent, and
                Scalable with Ownl
              </p>
              <p className=" mt-5">
                Ownly is Intelisync’s solution to the future of asset
                tokenization. By creating an integrated, transparent, and
                compliant ecosystem for fractional ownership, Ownly is
                transforming how real-world assets are bought, sold, and traded.
                Its comprehensive services, trusted partnerships, and
                forward-thinking approach are shaping the future of asset
                tokenization within the Web3 space. 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section Ends */}

      {/* Road Map Start  */}
      <div className="mt-12 relative z-10">
        <RoadMapForOwnly />
      </div>
      {/* Road Map Ends  */}

      {/*⚠️ NOTE : Need to Send a FAQ's Data in this component ⚠️  */}
      {/* FAQ's Start  */}
            {/* <FAQSection/> */}
      {/* FAQ's ends  */}

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

    </div>
  );
};

export default page;
