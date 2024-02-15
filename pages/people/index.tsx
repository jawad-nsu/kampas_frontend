import ProfileCard from '@/components/people/profile_card';
import { executiveBody } from '@/constants/people.js';

export default function PeopleBoard() {
  return (
    <div className=''>
      <div className='bg-gradient-to-r from-slate-500 to-slate-800'>
        <div className='flex flex-col items-center space-y-4 text-center mb-24 p-12'>
          <div className='space-y-2 '>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>
              Meet the humans of BSAC
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
              Thank you for visiting our community. We invite you to explore our
              Kampas and discover the value we can bring to our Bangladeshi
              Community.
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 grid-rows-5 gap-4 mx-12 '>
        {executiveBody.map(({ id, name, img, title, followers, following }) => (
          <ProfileCard
            key={id}
            name={name}
            title={title}
            img={img}
            followers={followers}
            following={following}
          />
        ))}
      </div>
    </div>
  );
}
// bg-gradient-to-r from-fuchsia-500 to-cyan-500
// bg-gradient-to-r from-cyan-500 to-blue-500
