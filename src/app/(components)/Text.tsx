import React from "react"
import localFont from 'next/font/local'

const aeonik = localFont({
    src: [
        {
            path: "../(assets)/Aeonik/Aeonik-Regular.otf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../(assets)/Aeonik/Aeonik-Bold.otf",
            weight: "700",
            style: "normal"
        },
        {
            path: "../(assets)/Aeonik/Aeonik-Thin.otf",
            weight: "300",
            style: "normal"
        },
        {
            path: "../(assets)/Aeonik/Aeonik-Black.otf",
            weight: "900",
            style: "normal"
        },
        {
            path: "../(assets)/Aeonik/Aeonik-Medium.otf",
            weight: "500",
            style: "normal"
        }
    ]
})

type Props = {
    children: React.ReactNode,
    as?: string,
    className?: string,
    type?: "button" | "link" | "regular" | "card-1"
}

export default function Text({ children, as, className, type = "regular" }: Props) {
    return (
        <>
            {React.createElement(as || 'p', { className: `${aeonik.className} text-white font-[500] ${type === "button" ? "text-[14px] leading-[16.8px]" : type === "card-1" ? "text-[16px] leading-[19.2px]" : type === "link" ? "text-[17px] leading-[20.4px]" : "text-[20px] leading-[24px]"} ${className || ''}` }, children)}
        </>
    )
}