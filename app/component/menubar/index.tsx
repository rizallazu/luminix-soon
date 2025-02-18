"use client";
import Link from 'next/link';
import React from 'react'

const index = () => {
  return (
    <div className='py-3 px-4 rounded-full bg-white flex items-center justify-between fixed bottom-7 left-1/2 -translate-x-1/2  s md:p z-40'>
        <Link href={"#home"} className='bg-primary-500 text-white rounded-full px-4 py-2'>Home</Link>
        <Link href={"#about"} className='rounded-full px-4 py-2'>About</Link>
        <Link href={"#work"} className='rounded-full px-4 py-2'>Work</Link>
        <Link href={"#team"} className='rounded-full px-4 py-2'>Team</Link>
        <Link href={"/journal"} className='rounded-full px-4 py-2'>Journal</Link>
    </div>
  )
}

export default index