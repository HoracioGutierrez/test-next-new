type Props = {
    className?: string,
    children?: React.ReactNode
}

export default function GrayIcon({ children, className }: Props) {
    return (
        <>
            <div className={`${className} p-2 w-fit bg-[#18181C] border-light-20 border border-dashed hover:border-accent group transition-colors duration-[0.3s]`}>
                {children}
            </div>
        </>
    )
}