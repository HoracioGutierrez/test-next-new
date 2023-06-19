import { Chakra_Petch } from 'next/font/google'
import React from 'react'

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"]
})


type Props = {
    children: React.ReactNode,
    as?: string,
    className?: string,
    type : "hero" | "section" | "regular",
    filled?: boolean
}

export default function Title({ children, as, className, type , filled = true}: Props) {
    const fontSize = type === "hero" ? "text-[163px]" : type === "section" ? "text-6xl" : "text-4xl";
    const lineHeight = type === "hero" ? "leading-[132px]" : type === "section" ? "leading-9" : "leading-8";
    const fontWeight = type === "hero" ? "font-bold" : "font-medium";
  
    return (
      <>
        {React.createElement(as || "h1", { className: `${fontSize} ${lineHeight} ${fontWeight} ${className || ''} ${chakra.className} ${filled ? "text-transparent title-filled" : "text-white"} tracking-[-0.01em]` }, children)}
      </>
    )
  }