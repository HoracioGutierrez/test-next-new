import Link from "next/link"
import Text from "./Text"

type Props = {
    href: string,
    children: React.ReactNode,
    className?: string
}

export default function CurlyLink({ href, children, className }: Props) {
    return (
        <Link href={href} className={`group flex items-baseline ${className}`}>
            <Text as="span" type='regular' className='cursor-pointer relative left-3 opacity-0  group-hover:-left-1 transition-all group-hover:text-accent group-hover:opacity-100 '>{`{`}</Text>
            <Text as="span" type='link' className='cursor-pointer  group-hover:text-accent'>{children}</Text>
            <Text as="span" type='regular' className='cursor-pointer relative right-3 opacity-0 group-hover:-right-1 transition-all group-hover:text-accent group-hover:opacity-100'>{`}`}</Text>
        </Link>
    )
}