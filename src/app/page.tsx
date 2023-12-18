import type { Metadata } from 'next'
import About from './About'
import Cards from './Cards'

export const metadata: Metadata = {
  title: 'Blog MAMPRO',
  description: 'Software in Civil Engineering',
}


export default function Home() {

  return (
    <>
      <About />
      <Cards />
    </>

  )
}
