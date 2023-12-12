import React from 'react'
import Logo from '../../public/Logo'

function About() {
  return (
    <div id='about' className=" h-screen justify-center flex flex-col items-center ">
      <div>

      <h1 className='font-bold mb-5 md:mb-[3rem] lg:mb-[.3.5rem] text-[1.3rem] text-center md:text-[2rem] '>Software in Civil Engineering</h1>
      <p className='text-justify mx-6 mt-2 opacity-90 md:text-[1.35rem] md:opacity-70 md:font-medium'>MAMPRO is company at the AEC industry focussing in closing the gap between Software Engineering and Civil Enginnering. This is the space where we write about how coding can make the AEC industry more productive. We explore  things like Hypar, IFC.js, Alpaca 4D, Kangaroo, Grasshoper, Dynamo and more.</p>
      </div>
        <div className='relative h-[250px] w-[250px] mt-11 opacity-70 md:h-[320px] md:w-[320px] md:opacity-60'>
        <Logo/>
        </div>

    </div>
  )
}

export default About