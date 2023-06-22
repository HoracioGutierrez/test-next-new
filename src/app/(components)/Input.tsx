type Props = {
    type? : string,
    placeholder? : string,
    label? : string,
    id? : string,
    as? : string,
    className? : string,
    containerClassName? : string,
    error? : string
}

export default function Input({
    type = "text",
    placeholder = "Placeholder",
    label = "Input",
    id = "test",
    as = "input",
    className = "",
    containerClassName = "",
    error = ""
 }: Props) {
    return (
        <div className={`w-full ${containerClassName}`}>
            <label htmlFor={id} className="text-light-20">{label}</label>
            {as === "input" ? (
                <input type={type} id={id} name={id} className={` w-full bg-accent-7 border-accent-20 border outline-none transition duration-300 hover:border-accent focus:border-accent focus:shadow-[rgb(255,255,255,0.3)] focus:shadow-[0_0_4px_2px] focus:animate-[borderPulse_1000ms_ease_alternate_infinite] text-light-20 p-2 focus:text-white hover:text-white ${className}`} placeholder={placeholder}/>
            ) : (
                <textarea id={id} name={id} className={`w-full bg-accent-7 border-accent-20 border outline-none transition duration-300 hover:border-accent focus:border-accent focus:shadow-[rgb(255,255,255,0.3)] focus:shadow-[0_0_4px_2px] focus:animate-[borderPulse_1000ms_ease_alternate_infinite] text-light-20 p-2 focus:text-white hover:text-white ${className}`} placeholder={placeholder}/>
            )}
            {error && <p className="text-accent text-sm">{error}</p>}
        </div>
    )
}