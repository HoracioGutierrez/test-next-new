import Divider from '../(components)/Divider'
import BlueButton from '../(components)/BlueButton'
import CardFrame from '../(components)/CardFrame'
import CurlyContainer from '../(components)/CurlyContainer'
import Text from '../(components)/Text'
import Title from '../(components)/Title'
import GrayIcon from '../(components)/GrayIcon'
import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

type Props = {}

export default function HomePage({ }: Props) {

  return (
    <>
      <div className="flex gap-4">
        <GrayIcon>
          <Link href='https://www.instagram.com/horagutierrez/' target='_blank'>
            <InstagramLogoIcon width={24} height={24} className='group-hover:text-accent text-white  transition-colors duration-[0.3s]' />
          </Link>
        </GrayIcon>
        <GrayIcon>
          <Link href='https://github.com/HoraGutierrez' target='_blank'>
            <GitHubLogoIcon width={24} height={24} className='group-hover:text-accent text-white transition-colors duration-[0.3s]' />
          </Link>
        </GrayIcon>
      </div>
      <br />
      <br />
      <Title type='hero' filled={false}>Horacio Gutierrez</Title>
      <br />
      <Title type='regular' filled={false}>Horacio Gutierrez</Title>
      <br />
      <Title type='section' filled={false}>Section Title</Title>
      <br />
      <Title type='section' filled={true}>Section Title</Title>
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <BlueButton text='Test Button' />
      <br />
      <br />
      <CardFrame>
        <Text type='card-1'>TEST CARD FRAME</Text>
      </CardFrame>
      <br />
      <br />
      <CardFrame className='flex flex-col gap-2'>
        <p>test card frame</p>
        <BlueButton text='Test Button' />
      </CardFrame>
      <br />
      <br />
      <CardFrame className='flex flex-col gap-4'>
        <p>test card frame</p>
        <Divider />
        <BlueButton text='Test Button' />
      </CardFrame>
      <br />
      <br />
      <CurlyContainer>
        <p>test curly container</p>
      </CurlyContainer>
      <br />
      <br />
      <CurlyContainer>
        <br />
        <p>test curly container</p>
        <br />
        <Divider />
        <br />
        <BlueButton text='Test Button' className='my-2' />
        <br />
      </CurlyContainer>
      <br />
      <br />
      <CurlyContainer>
        Colo Puto
      </CurlyContainer>
      <br />
      <br />
      <CurlyContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro earum ratione deserunt. Cum vel magnam asperiores illum odio dicta, quisquam soluta quam unde sint fugit laborum id, quia consequuntur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus enim quasi omnis hic adipisci iusto aut recusandae vero. Enim reprehenderit dignissimos animi sit delectus, odio ipsum maiores eligendi quod.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus, atque eveniet a corporis accusantium alias ut dolores, laboriosam dolor eius explicabo eligendi assumenda doloremque at harum. At, inventore iure?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur alias voluptate, ab odit odio placeat expedita unde exercitationem! Odit atque aliquid porro laborum, id corrupti doloribus? Nemo voluptatem nesciunt laborum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, hic distinctio ipsum commodi, voluptatum praesentium aut impedit et sit suscipit consequatur reiciendis harum. Accusantium recusandae veniam eos cupiditate excepturi eaque.
      </CurlyContainer>
      <br />
      <br />
      <Text>Texto Diferente?</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro earum ratione deserunt. Cum vel magnam asperiores illum odio dicta, quisquam soluta quam unde sint fugit laborum id, quia consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus enim quasi omnis hic adipisci iusto aut recusandae vero. Enim reprehenderit dignissimos animi sit delectus, odio ipsum maiores eligendi quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus, atque eveniet a corporis accusantium alias ut dolores, laboriosam dolor eius explicabo eligendi assumenda doloremque at harum. At, inventore iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur alias voluptate, ab odit odio placeat expedita unde exercitationem! Odit atque aliquid porro laborum, id corrupti doloribus? Nemo voluptatem nesciunt laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, hic distinctio ipsum commodi, voluptatum praesentium aut impedit et sit suscipit consequatur reiciendis harum. Accusantium recusandae veniam eos cupiditate excepturi eaque.</Text>
    </>
  )
}