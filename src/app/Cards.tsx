import React from 'react'
import Card from './Card'
import { getPosts } from './_services/notion'
import Link from 'next/link';

async function Cards() {
  const posts = await getPosts();
  return (
    <div id='blogs' className='sm:mx-4 md:mx-6 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 md:gap-3
     '>
        {posts.map((post) => ( post.published &&
          <div key={post.id} className='bg-blue-950 bg-opacity-90 rounded-2xl flex flex-col p-6  shadow-md shadow-blue-900   hover:scale-105 hover:transition-all hover:bg-blue-400 hover:bg-opacity-10 ease-in-out'>
            <div className=' text-black  flex gap-2 font-semibold opacity-70 text-sm mb-7 md:text-[1rem]'>{post.tag.map((tag)=><div key={tag} className='bg-white bg-opacity-80 w-min rounded-xl px-2 py-1'>{tag}</div>)}</div>
            <div className='mb-7 uppercase font-bold text-lg md:text-2xl text-black'>{post.title}</div> 
            <div className='text-justify opacity-95'>{post.description}</div>
            <div className='flex justify-between mt-8 items-center'>

            <div className='opacity-40'>{new Date(post.createdat).getUTCDate()}-{new Date(post.createdat).getUTCMonth()}-{new Date(post.createdat).getUTCFullYear()}</div>
            <button className='bg-blue-600 py-2 px-3 rounded-2xl font-semibold  hover:scale-110  transition-colors ease-in-out '> <Link href={`/${post.slug}`}>
            Read More
            </Link></button>
            </div>

          </div>
        ))}
    </div>
  )
}

export default Cards