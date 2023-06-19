type Props = {
    children: React.ReactNode,
    className?: string
}

export default function CurlyContainer({ children, className }: Props) {
    return (
        <div className={`${className} relative pt-3 pb-5 px-8 text-light flex flex-col justify-center w-fit`}>
            <div className={`absolute left-[0px] top-0 h-full`}>
                <svg className='h-full' width="32" viewBox="0 0 32 110" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3734 95.8596V96.0855L10.543 96.2348L20.9227 105.375L21.0644 105.5H21.2532H31H31.5V105V101.099V100.599H31H23.5938L16.1835 94.0731V61.7503V61.5284L16.019 61.3795L6.94304 53.1682V52.7203L16.019 44.509L16.1835 44.3602V44.1383V11.9269L23.5938 5.4014H31H31.5V4.9014V1V0.5H31H21.2532H21.0644L20.9227 0.624755L10.543 9.76516L10.3734 9.91448V10.1404V42.0248L0.660329 51.0168L0.5 51.1652V51.3837V54.5048V54.7233L0.660329 54.8717L10.3734 63.8637V95.8596Z" stroke="#007EFF" />
                </svg>
            </div>
            {children}
            <div className={`absolute right-[-0px] top-0 h-full`}>
                <svg className='h-full' width="32" viewBox="0 0 32 110" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.457 96.2348L21.6266 96.0855V95.8596V63.8637L31.3397 54.8717L31.5 54.7233V54.5048V51.3837V51.1652L31.3397 51.0168L21.6266 42.0248V10.1404V9.91448L21.457 9.76516L11.0773 0.624755L10.9356 0.5H10.7468H1H0.5V1V4.9014V5.4014H1H8.40617L15.8165 11.9269V44.1383V44.3602L15.981 44.509L25.057 52.7203V53.1682L15.981 61.3795L15.8165 61.5284V61.7503V94.0731L8.40617 100.599H1H0.5V101.099V105V105.5H1H10.7468H10.9356L11.0773 105.375L21.457 96.2348Z" stroke="#007EFF" />
                </svg>
            </div>
        </div >
    )
}