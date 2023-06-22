"use client"

import Text from "./Text"

type Props = {
    text?: string,
    className?: string,
    children?: React.ReactNode,
    onClick?: () => void,
    type?: "button" | "submit" | "reset"
}

export default function BlueButton({ text, className, children , onClick = () => {} , type = "submit" }: Props) {
    return (
        <button type={type} className={`${className} p-3.5 uppercase border border-accent text-accent flex items-center gap-2.5 bg-accent-7`} onClick={onClick}>
            <Text type="button">
                {children ? children : text}
            </Text>
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.527832 9.59564L7.52761 1.81659" stroke="#007EFF" strokeWidth="1.6243" strokeLinecap="square" strokeLinejoin="bevel" />
                <path d="M1.17969 0.997986L8.10531 1.2608L8.12627 8.19138" stroke="#007EFF" strokeWidth="1.6243" strokeLinecap="square" />
                <rect x="-157.5" y="-16.5" width="183" height="45" stroke="#007EFF" />
            </svg>
        </button>
    )
}