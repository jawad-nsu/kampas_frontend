// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/nav6d8LxIo1
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Button } from '@/components/ui/button';
// import { CardContent, Card } from '@/components/ui/card';

// import { Progress } from '@/components/ui/progress';

// export default function Home() {
//   return (
//     <div className='bg-white'>
//       <nav className='flex justify-between items-center py-4 px-8 border-b'>
//         <div className='flex items-center space-x-4'>
//           <img
//             alt='estudee logo'
//             className='h-10'
//             height='40'
//             src='/placeholder.svg'
//             style={{
//               aspectRatio: '100/40',
//               objectFit: 'cover',
//             }}
//             width='100'
//           />
//           <ul className='flex space-x-6'>
//             <li>
//               <a className='text-gray-600 hover:text-blue-600' href='#'>
//                 About
//               </a>
//             </li>
//             <li>
//               <a className='text-gray-600 hover:text-blue-600' href='#'>
//                 Services
//               </a>
//             </li>
//           </ul>
//         </div>
//         <Button className='bg-blue-600 text-white'>Contact Us</Button>
//       </nav>
//       <header className='text-center py-16 px-8 bg-gradient-to-r from-blue-600 to-blue-400'>
//         <h1 className='text-4xl font-bold text-white mb-4'>
//           Digital platform for all student activity.
//         </h1>
//         <p className='text-white mb-6'>
//           Networking with lecturer and also collegiate
//         </p>
//         <Button className='bg-white text-blue-600'>Download App</Button>
//         <div className='flex justify-center space-x-4 mt-6'>
//           <div className='flex items-center space-x-1'>
//             <StarIcon className='text-yellow-400' />
//             <span className='text-white font-bold'>4,9</span>
//           </div>
//           <div className='flex items-center space-x-1'>
//             <TextIcon className='text-white' />
//             <span className='text-white font-bold'>189</span>
//           </div>
//         </div>
//         <div className='text-white mt-2'>Good Responses</div>
//       </header>
//       <section className='py-16 px-8'>
//         <h2 className='text-3xl font-bold text-center mb-8'>Features</h2>
//         <div className='grid grid-cols-3 gap-8'>
//           <Card className='bg-blue-100'>
//             <CardContent>
//               <CheckCircleIcon className='text-blue-600' />
//               <h3 className='font-bold mt-2'>Presence</h3>
//               <p className='text-sm'>
//                 Sit donec amet, consectetur in lorem quam, convallis lorem
//                 ipsum.
//               </p>
//             </CardContent>
//           </Card>
//           <Card className='bg-blue-100'>
//             <CardContent>
//               <ActivityIcon className='text-blue-600' />
//               <h3 className='font-bold mt-2'>Assignment</h3>
//               <p className='text-sm'>
//                 Sit donec amet, consectetur in lorem quam, convallis lorem
//                 ipsum.
//               </p>
//             </CardContent>
//           </Card>
//           <Card className='bg-blue-100'>
//             <CardContent>
//               <ActivityIcon className='text-blue-600' />
//               <h3 className='font-bold mt-2'>Events</h3>
//               <p className='text-sm'>
//                 Sit donec amet, consectetur in lorem quam, convallis lorem
//                 ipsum.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//         <div className='text-center mt-8'>
//           <Button className='bg-blue-600 text-white'>More Features</Button>
//         </div>
//       </section>
//       <section className='py-16 px-8 bg-blue-600 text-white'>
//         <h2 className='text-3xl font-bold text-center mb-8'>
//           What kind of Benefit from this app
//         </h2>
//         <div className='grid grid-cols-2 gap-8'>
//           <div>
//             <h3 className='font-bold mb-4'>Student Portal</h3>
//             <p className='mb-4'>
//               Access all student-related services, including grades, schedules,
//               and more.
//             </p>
//             <Progress className='w-full bg-blue-800' value={60} />
//           </div>
//           <div>
//             <h3 className='font-bold mb-4'>Real-Time Updates</h3>
//             <p className='mb-4'>
//               Stay informed with notifications about important academic events
//               and deadlines.
//             </p>
//             <Progress className='w-full bg-blue-800' value={75} />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function ActivityIcon(props: Object) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
//     </svg>
//   );
// }

// function CheckCircleIcon(props: Object) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
//       <polyline points='22 4 12 14.01 9 11.01' />
//     </svg>
//   );
// }

// function StarIcon(props: Object) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
//     </svg>
//   );
// }

// function TextIcon(props: Object) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     >
//       <path d='M17 6.1H3' />
//       <path d='M21 12.1H3' />
//       <path d='M15.1 18H3' />
//     </svg>
//   );
// }
