import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <header
      key='1'
      className='flex items-center h-14 px-4 w-full md:px-6 lg:justify-between lg:h-20'
    >
      <Link className='mr-6' href='/'>
        <MountainIcon className='h-6 w-6' />
        <span className='sr-only'>Acme Inc</span>
      </Link>
      <nav className='hidden items-center gap-4 lg:flex flex-1 text-sm font-medium justify-center'>
        <Link className='text-sm font-medium' href='/'>
          Home
        </Link>
        <Link className='text-sm font-medium' href='/jobs'>
          Job
        </Link>
        <Link className='text-sm font-medium' href='/rooms'>
          Room
        </Link>
        <Link className='text-sm font-medium' href='/events'>
          Event
        </Link>
        <Link className='text-sm font-medium' href='/meetups'>
          Meetup
        </Link>
        <Link className='text-sm font-medium' href='/people'>
          People
        </Link>
        <Link className='text-sm font-medium' href='/blogs'>
          Blog
        </Link>
      </nav>
      <Link className='text-sm font-medium' href='/profile'>
        <Avatar>
          <AvatarImage
            alt='Nimrod Kramer'
            src='https://media.licdn.com/dms/image/C5603AQFGhJdtAnmrBg/profile-displayphoto-shrink_200_200/0/1661350294379?e=1712793600&v=beta&t=IzhCSTRHKs01BRLSlL0xOTRyykTyvHcmY6TKYi6P8-Q'
          />
          <AvatarFallback>NK</AvatarFallback>
        </Avatar>
      </Link>
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}
