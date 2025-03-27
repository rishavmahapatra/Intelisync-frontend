import ContactUs from "@/component/ContactUs/ContactUs";
import ButtonAndDescription from "@/component/ProductPage/ButtonAndDescription";
import ButtonTitle from "@/component/ProductPage/ButtonTitleWithMargin";
import Features_card from "@/component/ProductPage/Features_card";
import ProductBanner from "../../../component/ProductPage/ProductBanner";
import Rwa_works_card from "@/component/ProductPage/Rwa_works_card";
// import { TokenizePropertiyData, WorkCardData } from "@/utils/Cards_Data";
import { TokenizePropertiyData, WorkCardData } from "@/utils/Products_Data";
import { FeaturesCardsData } from "@/utils/Products_Data";
import Blog from "@/component/Blogs/Blogs";
const page = () => {
  return (
    // page wrapper start
    <div className="h-auto w-[100vw]  text-white overflow-x-hidden bg-[#020202] ">

      {/* herosection start  */}
      <ProductBanner />
      {/* herosection ends  */}

      {/* buttons-heading and description start  */}
      <div className="wrapper mx-auto relative px-4">
        {/* side gradient image   */}
        <div className="blurGradient w-[600px]  h-[600px]  bg-gradient-to-r from-[#049EBC] via-[#00375A] to-[#490074] blur-[160px] rounded-full absolute z-[1]  left-12 top-10"></div>
        {/* side  gradient image ends */}

        {/* context 1 start */}
        <ButtonAndDescription
          buttonTitle="Problem Statement"
          description="Real estate remains one of the most lucrative yet illiquid asset classes, with high entry barriers, lengthy transaction processes, and limited global accessibility. Traditional property investments require significant capital, involve intermediaries, and lack transparency in ownership and revenue sharing"
        />
        {/* context 2 ends */}

        {/* context 1 start */}
        <ButtonAndDescription
          buttonTitle="Solutions"
          description="TokenizeProperty is Intelisync’s flagship real-world asset (RWA) tokenization platform designed to democratize real estate investment. By converting physical properties into fractionalized, blockchain-based tokens, investors worldwide can own, trade, and earn from real estate with ease."
        />
        {/* context 2 ends */}
      </div>
      {/* buttons-heading and description ends  */}

      {/* How it works Section start  */}
      <div className="works-cards-wrapper-fullWidth my-0 sm:my-8 relative px-4">
        {/* gradient design start  */}
        <div className="blurGradient w-[550px]  h-[550px]  bg-gradient-to-r from-[#049EBC] via-[#00375A] to-[#490074] blur-[180px] rounded-full absolute z-[1]  right-16 -bottom-16"></div>
        {/* gradient design ends  */}

        {/* cards wrapper shrink wrapper start */}
        <div className="works-cards-wrapper max-w-[812px] mx-auto relative z-40 ">
          {/* button title start  */}
          <ButtonTitle buttonTitle={"How it Works ?"} />
          {/* button title ends  */}

          <div className="works-cards flex flex-wrap justify-center md:justify-between items-center gap-8">
            {/* work-cards start */}
            {WorkCardData.map((item, index) => (
              <Rwa_works_card
                key={index}
                card_title={item.title}
                description={item.description}
              />
            ))}
            {/* work-cards ends */}
          </div>
        </div>
        {/* cards wrapper shrink wrapper start */}

        {/* key feautures start */}
        <div className=" max-w-[812px] mx-auto my-8 relative z-20">
          {/* button heading start  */}
          <div className="text-center mt-12">
            <ButtonTitle buttonTitle={"Key features"} />
          </div>
          {/* button heading ends  */}

          {/* Features card wrapper start */}
          <div className="features-cards py-4 sm:py-5 flex flex-wrap gap-10 justify-center md:justify-between items-center ">
            {FeaturesCardsData.map((item, index) => (
              <Features_card
                key={index}
                description={item.title}
                borderStyle={"border-l"}
              />
            ))}
          </div>
          {/* Features card wrapper ends */}
        </div>
        {/* key feauture ends  */}
      </div>
      {/* How it works Section ends  */}

      {/* Target Audiance start  */}
      <div className="Target-audience flex flex-col items-center justify-baseline sm:block max-w-[850px] mx-auto mt-0 sm:mt-2 space-y-8 relative px-4">
        {/* gradient design start  */}
        <div className="blurGradient w-[500px]  h-[500px]  bg-gradient-to-r from-[#049EBC] via-[#00375A] to-[#490074] blur-[190px] rounded-full absolute z-[1]  -left-36 -top-2"></div>
        {/* gradient design ends  */}

        {/* Heading  start  */}
        <h2 className="relative z-20">
          <ButtonTitle buttonTitle={"Target audience"} />
        </h2>
        {/* Hwading ends  */}

        {/* content 1  */}
        <div className="content space-y-8max- relative z-20 w-[308px] sm:w-auto">
          {/* heading  */}
          <li className="text-[#00EFE1] text-[18px]">
            {" "}
            Real Estate Developer{" "}
          </li>

          {/* description  */}
          <p className="mb-2 text-[14px] text-[#FFFFFFCC] w-[100%] sm:w-[70%]">
            Raise capital faster by tokenizing upcoming projects and attracting
            global investors. 
          </p>
        </div>

        {/* content 2 */}
        <div className="content space-y-4 relative z-20 max-w-[308px] sm:w-auto">
          {/* heading  */}
          <li className="text-[#00EFE1] text-[18px]">
            {" "}
            Retail & Institutional Investors 
          </li>

          {/* description  */}
          <p className="mb-2 text-[14px] text-[#FFFFFFCC] w-[100%] sm:w-[70%]">
            Diversify portfolios with fractional ownership of high-value
            properties. 
          </p>
        </div>

        {/* content 3  */}
        <div className="content space-y-4 relative z-20 max-w-[308px] sm:w-auto">
          {/* heading  */}
          <li className="text-[#00EFE1] text-[18px]"> Property Managers </li>

          {/* description  */}
          <p className="mb-2 text-[14px] text-[#FFFFFFCC] w-[100%] sm:w-[70%]">
            Automate rent collection, maintenance fees, and profit distribution
            via smart contracts. 
          </p>
        </div>
        {/* contents ends  */}
      </div>
      {/* Target Audiance Ends  */}

      {/* Benefites start  */}
      <div className="benefites max-w-[1300px] mx-auto mt-8 px-4">
        {/* button heading start  */}
        <div className="text-center my-8 ">
          <ButtonTitle buttonTitle={"Benefits"} />
        </div>
        {/* button heading ends  */}

        {/* steps tracker start  */}
        <div className="steps-traker-wrapper max-w-[100%] mx-auto flex flex-col justify-center items-center sm:flex-row sm:justify-around sm:items-start relative">
          {/* Dotted Border start  */}
          <div className="StepsBorder hidden sm:block absolute top-6 left-[82px] md:left-[100px] mx-auto  z-10 w-[75%] border-t-1 border-b border-dotted border-[#FFFFFF]"></div>
          {/* Dotted Border ends  */}

          {/* step 1 */}
          <div className="step1 text-center space-y-4 relative z-40 mb-6 sm:mb-0">
            {/* step  */}
            <h2 className="step flex justify-center items-center text-black w-[50px] h-[50px] font-medium mx-auto rounded-full bg-gradient-to-tr from-[#2BFAFF] to-[#047EB6]">
              1
            </h2>

            {/* step desciption start */}
            <div className="step-TitleAndDescription w-[200px] sm:w-auto mx-auto space-y-2 sm:space-y-4">
              {/* title  */}
              <div className="title font-medium text-[18px]">Liquidity</div>

              {/* description  */}
              <div className="Step-des text-[12px] w-[80%] mx-auto">
                 Turn illiquid assets into tradable tokens. {" "}
              </div>
            </div>
          </div>

          {/* step 2 */}
          <div className="step2 text-center space-y-4 relative z-40 mb-6 sm:mb-0">
            {/* step  */}
            <h2 className="step flex justify-center items-center text-black w-[50px] h-[50px] font-medium mx-auto rounded-full bg-gradient-to-tr from-[#2BFAFF] to-[#047EB6]">
              2
            </h2>

            {/* step desciption */}
            <div className="step-TitleAndDescription w-[200px] sm:w-auto mx-auto space-y-2 sm:space-y-4">
              {/* title  */}
              <div className="title font-medium text-[18px]">Transparency</div>

              {/* description  */}
              <div className="Step-des text-[12px] w-[80%] mx-auto">
                 Real-time audit trails for ownership and cash flows. {" "}
              </div>
            </div>
          </div>

          {/* step 3 */}
          <div className="step3 text-center space-y-4 relative z-40 mb-6 sm:mb-0">
            {/* step  */}
            <h2 className="step flex justify-center items-center text-black w-[50px] h-[50px] font-medium mx-auto rounded-full bg-gradient-to-tr from-[#2BFAFF] to-[#047EB6]">
              3
            </h2>

            {/* step desciption */}
            <div className="step-TitleAndDescription w-[200px] sm:w-auto mx-auto space-y-2 sm:space-y-4">
              {/* title  */}
              <div className="title font-medium text-[18px]">
                Cost Efficiency
              </div>

              {/* description  */}
              <div className="Step-des text-[12px] w-[80%] mx-auto">
                Reduce legal, brokerage, and administrative fees by 60%. {" "}
              </div>
            </div>
          </div>

          {/* step 4 */}
          <div className="step4 text-center space-y-4 relative z-40 mb-6 sm:mb-0">
            {/* step  */}
            <h2 className="step flex justify-center items-center text-black w-[50px] h-[50px] font-medium mx-auto rounded-full bg-gradient-to-tr from-[#2BFAFF] to-[#047EB6]">
              4
            </h2>

            {/* step desciption */}
            <div className="step-TitleAndDescription w-[200px] sm:w-auto mx-auto space-y-2 sm:space-y-4">
              {/* title  */}
              <div className="title font-medium text-[18px]">Scalability</div>

              {/* description  */}
              <div className="Step-des text-[12px] w-[80%] mx-auto">
                 Tokenize residential, commercial, or industrial properties
                globally. {" "}
              </div>
            </div>
          </div>
        </div>
        {/* steps tracker ends  */}
      </div>
      {/* Benefites ends  */}

      {/* Why Choose Section start  */}
      <div className="whychoose-wrapper relative my-4 max-w-[1300px] mx-auto px-4">
        {/* gradient design start  */}
        <div className="blurGradient w-[500px]  h-[500px]  bg-gradient-to-r from-[#049EBC] via-[#00375A] to-[#490074] blur-[210px] rounded-full absolute z-[1]   left-[30%] "></div>
        {/* gradient design ends  */}

        {/* button title start  */}
        <div className="Title text-center relative z-40">
          <ButtonTitle buttonTitle={"Why Choose TokenizeProperty? "} />
        </div>
        {/* button title ends  */}

        {/* tokenize card wrapper start  */}
        <div className="features-cards py-4 sm:py-5 relative z-40 flex flex-wrap gap-10 justify-center items-center mx-auto w-[90%] ">
          {TokenizePropertiyData.map((item, index) => (
            <Features_card
              key={index}
              description={item.title}
              borderStyle={"border-b"}
            />
          ))}
        </div>
        {/* tokenize card wrapper ends  */}
      </div>
      {/* Why choose section ends  */}

      {/* Call To Action start  */}
      <div className="callToAction my-0 sm:my-4 max-w-[1300px] mx-auto px-4">
        {/* button title start  */}
        <div className="Title text-center relative z-40">
          <ButtonTitle buttonTitle={"Call to action "} />
        </div>
        {/* button title ends  */}

        {/* text content of action start  */}
        <div className="actionContent my-8 py-[20px] px-[55px] text-center rounded-[20px] border-2 bg-[#37ADFC26] border-[#06FFF0]">
          "Unlock the Future of Real Estate Investment. Tokenize Your Property
          or Start Investing Today!" 
        </div>
        {/* text content of action ends */}
      </div>
      {/* Call To Action ends  */}

      {/* conclusion start  */}
      <div className="conclusion my-8 max-w-[1300px] mx-auto px-4">
        {/* button title start  */}
        <div className="Title text-center relative z-40">
          <ButtonTitle buttonTitle={"Conclusion "} />
        </div>
        {/* button title ends  */}

        {/* text content of action start  */}
        <div className="actionContent my-8 w-[80%] mx-auto text-center">
          This project example highlights real estate tokenization a
          high-impact, relatable use case while showcasing Intelisync’s
          technical capabilities (ERC-1400, ZKPs, cross-chain support) and
          alignment with market needs (liquidity, compliance, fractional
          ownership). It’s ready to feature as a standalone product page on your
          website! 
        </div>
        {/* text content of action ends */}
      </div>
      {/* concliusion ends  */}

      {/* NOTE : FAQS IS PENDING  */}
      {/* FAQ's start */}
      {/* <FAQSection/> */}
      {/* FAQ's Ends  */}

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
    // Page wrapper ends
  );
};

export default page;
