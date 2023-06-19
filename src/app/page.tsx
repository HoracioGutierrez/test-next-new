import Divider from "./(components)/Divider"
import Text from "./(components)/Text"
import Title from "./(components)/Title"

type Props = {}

export default function page({ }: Props) {
  return (
    <div>
      <div className="flex items-center gap-[15px]">
        <div className="w-[9px] h-[9px] bg-light"></div>
        <Text className="relative -left-0.5">I BUILD SOFTWARE SOLUTIONS</Text>
      </div>
      <Divider className="my-[30px]" />
      <Title type="hero" className="relative -left-2.5">NEXT LEVEL</Title>
      <Title type="hero" filled={false} className="relative -left-2.5 flex items-center gap-[23px]">
        AT
        <svg width="103" height="92" viewBox="0 0 103 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57 8L95 46L57 84" stroke="white" stroke-width="11" stroke-miterlimit="10" stroke-linecap="square" />
          <path d="M6 40.5H0.5V51.5H6V40.5ZM93 51.5C96.0376 51.5 98.5 49.0376 98.5 46C98.5 42.9624 96.0376 40.5 93 40.5V51.5ZM6 51.5H93V40.5H6V51.5Z" fill="white" />
        </svg>
        WEB
        <svg width="103" height="92" viewBox="0 0 103 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 8L8 46L46 84" stroke="white" stroke-width="11" stroke-miterlimit="10" stroke-linecap="square" />
          <path d="M97 40.5H102.5V51.5H97V40.5ZM9 51.5C5.96243 51.5 3.5 49.0376 3.5 46C3.5 42.9624 5.96243 40.5 9 40.5V51.5ZM97 51.5H9V40.5H97V51.5Z" fill="white" />
        </svg>
      </Title>
      <div className="flex">
        <Title type="hero" className="relative -left-2.5" style={{ WebkitTextStroke: "3px white" }}>#</Title>
        <Title type="hero" filled={false} className="relative -left-2.5">DEVELOPMENT</Title>
      </div>
      <Divider className="my-[30px]" />
    </div>
  )
}