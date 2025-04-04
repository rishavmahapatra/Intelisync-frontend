import React from 'react'
import WEB3_Marketing_Blog from "@/component/Blogs_Conatin/WEB3_Marketing_Blog/WEB3_Marketing_Blog ";
export const metadata = {
  title: "Master Web3 Marketing: Build, Scale & Engage Communities",
  description:
    "Discover how Web3 marketing transforms brand engagement with blockchain, DAOs, and NFTs. Learn strategies to grow and thrive in the decentralized web.",
  keywords: "Web3 Marketing",
  openGraph: {
    title: "Master Web3 Marketing: Build, Scale & Engage Communities",
    description:
      "Discover how Web3 marketing transforms brand engagement with blockchain, DAOs, and NFTs. Learn strategies to grow and thrive in the decentralized web.",
    url: "https://intelisync.ai/blogpage/WEB3_Marketing_Blog/",
  },
  alternates: {
    canonical: "https://intelisync.ai/blogpage/WEB3_Marketing_Blog/",
  },
}

function page() {
  return (
    <div>
        <WEB3_Marketing_Blog />    </div>
  )
}

export default page