type Props = {
  className?: string
}

export default function Divider({ className }: Props) {
  return (
    <div className={`${className} border-t border-accent border-b h-3.5 border-dashed`}></div>
  )
}