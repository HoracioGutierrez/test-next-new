type Props = {
    children: React.ReactNode , 
    className ?: string
}

export default function CardFrame({ children , className }: Props) {
    return (
        <article className={`${className} bg-accent-20 p-4 text-light card-frame relative`}>
            <div className="card-frame__top-border"></div>
            {children}
            <div className="card-frame__bottom-border"></div>
        </article>
    )
}