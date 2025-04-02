import React from 'react'
import Blockchain_Blog from "@/component/Blogs_Conatin/Blockchain_Blog/Blockchain_Blog"
export const metadata = {
  title: "Blockchain Marketing  Strategies for Growth in the Web3 Era",
  description:
    "Explore blockchain marketing tactics that build trust, prevent ad fraud, and engage customers with NFTs, smart contracts, and token-based rewards.",
  keywords: "Blockchain Marketing",
  openGraph: {
    title: "Blockchain Marketing  Strategies for Growth in the Web3 Era",
    description:
      "Explore blockchain marketing tactics that build trust, prevent ad fraud, and engage customers with NFTs, smart contracts, and token-based rewards.",
    url: "https://intelisync.ai/blogpage/Blockchain_Blog/",
  },
  alternates: {
    canonical: "https://intelisync.ai/blogpage/Blockchain_Blog/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};
function page() {
  return (
    <div>
      <Blockchain_Blog />
    </div>
  )
}

export default page