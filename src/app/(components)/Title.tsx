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
    filled?: boolean,
    style?: React.CSSProperties
}

export default function Title({ children, as, className, type , filled = true , style }: Props) {
    const fontSize = type === "hero" ? "text-[50px] min-[350px]:text-[55px] min-[430px]:text-[70px] min-[530px]:text-[85px] min-[630px]:text-[100px] min-[730px]:text-[120px] lg:text-[163px]" : type === "section" ? "text-6xl" : "text-4xl";
    const lineHeight = type === "hero" ? "leading-[50px] min-[350px]:leading-[55px] min-[430px]:leading-[60px] min-[530px]:leading-[80px] min-[630px]:leading-[100px] min-[730px]:leading-[110px] lg:leading-[123px]" : type === "section" ? "leading-9" : "leading-8";
    const fontWeight = type === "hero" ? "font-bold" : "font-medium";
  
    return (
      <>
        {React.createElement(as || "h1", { className: `${fontSize} ${lineHeight} ${fontWeight} ${className || ''} ${chakra.className} ${filled ? "text-transparent title-filled" : "text-white"} tracking-[-0.01em]` , style }, children)}
      </>
    )
  }