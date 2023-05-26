type Props = {
  children: React.ReactNode;
  className?: string;
}
export default function Button({ children , className }: Props) {
  return (
    <button className={`bg-transparent hover:text-yellow-200 ripple-bg-slate-600 border-slate-600 border-2 text-white p-2 mt-4 rounded block w-fit transition-colors btn text-center group-hover:bg-[rgb(27,27,27)]  ${className}`}>{children}</button>
  )
}