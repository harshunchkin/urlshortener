import React from 'react'
import Link from 'next/link'

const contact = () => {
  return (
    <div>
        <div className='flex flex-col p-6'>
      <div className='border-l-2 p-2  ml-[200px]  border-l-[#BCCCDC]  w-[300px] h-[300px] flex flex-col gap-2'>
        <h1 className='text-xl font-semibold'>Hi, I'm Harshit</h1>
        <h2>This is one of the few, simpler projects that I am doing during winter vacation</h2>
        <h2>It's a simple URL Shortner tool which will shorten any desired URL you need. Just go to <Link href={"/features"}>features</Link> section and put your URL and the desired shortened URL you want.</h2>
        <h2>After clicking on the "Generate" button the shortened URL will link you to the parent URL.</h2>
      </div>
      <div className='border-r-2 p-2  ml-[calc(1223px-(200px+290px))]  border-r-[#BCCCDC] text-end  w-[300px] h-[280px] flex flex-col gap-2'>
        <h2>I am currently doing a major in Electrical Engineering and a minor in Artificial Intelligence in Signal Processing</h2>
        <h2>I am also a passionate programmer since I was in high school. I like to read and play video games. I love web development and I'm constantly working to improve my coding skills.</h2>
        <h2>My current motto is to finish what you have started even it ends up imperfect</h2>
      </div>
    </div>
    </div>
  )
}

export default contact
