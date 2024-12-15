import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div >
      <nav className="bg-[#F8FAFC] border-b-2 border-[#5A6C57]  text-xl">
        <ul className="flex gap-6 justify-end p-2 px-4  text-[#49535f]">
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/features"}><li>Features</li></Link>
          <Link href={"/contact"}><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
