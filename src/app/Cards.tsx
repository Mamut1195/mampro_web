import React from 'react'
import Card from './Card'
import { getPosts } from './_services/notion'
import Link from 'next/link';

async function Cards() {
  const posts = await getPosts();
  return (
    <div id='blogs' className='sm:mx-4 md:mx-6 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3
     '>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.slug}`}>{post.title}</Link>

          </li>
        ))}
      </ul>


    </div>
  )
}

export default Cards